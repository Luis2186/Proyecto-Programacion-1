//Ambos perfiles

function perfilUsuario(usuarioLogueado) {
    /* funcion que mueestra el perfil del alumnpo, verificando que sea el usuario logueado*/
    let resultado = `<div> `;
    let mostrarImgenPerfil= '';
    for (let i = 0; i < datosdeUsuarios.length; i++) {

        if (usuarioLogueado == datosdeUsuarios[i].nombreUsuario && datosdeUsuarios[i].tipoDeUsuario == "Alumno") {

            profesorAsignadoAalumno = datosdeUsuarios[i].profesorAsignado;
            nivelAlumnoActual = datosdeUsuarios[i].nivel[0];
            resultado += `<p> Nombre: ${datosdeUsuarios[i].nombre}</p>`;
            resultado += `<p> Nivel: ${datosdeUsuarios[i].nivel[0]}</p>`;
            resultado += `<p>Profesor Asignado: ${datosdeUsuarios[i].profesorAsignado}</p>`;
            document.querySelector("#datosUsuario").innerHTML = resultado;

        } else if (usuarioLogueado == datosdeUsuarios[i].nombreUsuario && datosdeUsuarios[i].tipoDeUsuario == "Docente") {

            nombreProfesorActual = datosdeUsuarios[i].nombre;
            resultado += `<p> Nombre: ${datosdeUsuarios[i].nombre}</p>`;
            resultado += `<p>${mostrarImgenPerfil}</p>`;
            imagenPerfilUsuario()
            document.querySelector("#datosUsuario").innerHTML = resultado;
        }
    }

    resultado += `</div>`;

    selectTareasPendientes();
    selectMostrarNombreAlumnoEstadisticasProfesor(); //para tomar el usuario logueado en primera instancia
}

function nuevaImagen(pNombreUsuario,pImagen) {
    let imagenNueva = new Imagen(pNombreUsuario,pImagen)
    imagenesPerfil.push(imagenNueva)
}


function imagenPerfilUsuario() {
    let resultado=''
    for( let i=0; i < imagenesPerfil.length ; i++) {
        if(usuarioLogueado== imagenesPerfil[i].nombreUsuario) {
            resultado += `<div>    <img src="Imagen/${imagenesPerfil[i].imagenPerfil}" class="visualisarImg"></div>`;
        }
    }
    console.log(imagenesPerfil)
    document.querySelector("#imgPerfilusuario").innerHTML=resultado
   
}


function buscarEjerciciosIngresados() {
    //TODO. Modifique un poco el buscador, inclui una funcion.

    let datoBuscado = document.querySelector("#buscarejercicios").value;
    let datoBuscadoEnMinuscula = datoBuscado.toLowerCase();
    let datoBuscadoSinAcento = quitarAcento(datoBuscadoEnMinuscula);
    let datoBuscadoSinEspacios = sacarEspaciosTexto(datoBuscadoSinAcento);
    let mostrar = document.querySelector(`#mostrarEjerciciosAlumnos`);
    let resultado = `<ol type=”A”>`;
    let resultadoNoEncontrado = "";
    let i = 0;

    while (i <= datosDeEjercicios.length - 1) {
             
        if (profesorAsignadoAalumno == datosDeEjercicios[i].nombreUsuarioProfesor && datosDeEjercicios[i].nivel == nivelAlumnoActual) {

            let tituloActual = datosDeEjercicios[i].titulo;
            let tituloActualSinEspacio = sacarEspaciosTexto(tituloActual);
            let tituloActualEnMin = tituloActualSinEspacio.toLowerCase();
            let tituloActualSinAcento = quitarAcento(tituloActualEnMin);
            let descripcionActual = datosDeEjercicios[i].descripcion;
            let descripcionSinEsp = sacarEspaciosTexto(descripcionActual);
            let descripActualMin = descripcionSinEsp.toLowerCase();
            let descripActSinAc = quitarAcento(descripActualMin);

            if (verificarsubcadena(tituloActualSinAcento, datoBuscadoSinEspacios) == true) {

                resultado += `<li>  Titulo: ${tituloActual}  <br><br> Nivel: ${datosDeEjercicios[i].nivel} <br><br> <img src="Imagen/${datosDeEjercicios[i].imagen}" class="imgBuscador"><br><br>
                                        Descripcion: ${datosDeEjercicios[i].descripcion} <br> <br> </li> `;
                resultadoNoEncontrado = "Encontrado";
            } else if (verificarsubcadena(descripActSinAc, datoBuscadoSinEspacios) == true) {

                resultado += `<li>  Titulo: ${tituloActual}  <br><br> Nivel: ${datosDeEjercicios[i].nivel} <br><br> <img src="Imagen/${datosDeEjercicios[i].imagen}" class="imgBuscador"><br><br>
                                        Descripcion: ${datosDeEjercicios[i].descripcion} <br> <br> </li> `;
                resultadoNoEncontrado = "Encontrado";
            }
        }
        i++;
    }

    resultado += `</ol>`;

    if (resultadoNoEncontrado == "") {
        mostrar.innerHTML = "No hay resultados que coincidan con su busqueda.";
    } else {
        mostrar.innerHTML = resultado;
    }

    limpiarTablaTodosLosEjercicios()
}

function entregaTarea() {

    let elegirEjercicio = document.querySelector("#entregaTarea").value;
    let pAudio = document.querySelector("#audioTarea").value;
    let audioFinal = eliminarFakePath(pAudio);
    let nuevaEntrega = new EntregaTarea(elegirEjercicio, usuarioLogueado, audioFinal, nivelAlumnoActual, profesorAsignadoAalumno);
    let extensionAudio = controlarExtension(audioFinal);
    let msjTareas=  document.querySelector("#msjTareas")
    if (validarEntrega(elegirEjercicio, usuarioLogueado) == false && pAudio !== "" && extensionAudio == true && elegirEjercicio!=="") {
        datosTareasEntregadas.push(nuevaEntrega);
        ingresarDevoluciones(elegirEjercicio, usuarioLogueado, "Pendiente", "Pendiente", nivelAlumnoActual, profesorAsignadoAalumno);
        listarEntregaEjercicios();
        mostrarMsjsDeTarea()
        msjTareas.innerHTML= "Tarea enviada al Docente"
  
        //mostrarEnvioDeTarea()
    } else {
        mostrarMsjsDeTarea()
        msjTareas.innerHTML= `Tarea no enviada al Docente
        <br> Se debe cargar un archivo de audio con la extension ".m4a"`
       // mostrarErroresEntregas();
    }
    console.log(datosTareasEntregadas)
    limpiarTodasLasPantallas()
}

function nuevaTarea(pTitulo, pNombreUsuarioAlumno, pAudio, pNivel, pProfesorAsignado) {

    let nuevaEntrega = new EntregaTarea(pTitulo, pNombreUsuarioAlumno, pAudio, pNivel, pProfesorAsignado);

    if (datosTareasEntregadas.length == 0 && pAudio !== "") {

        datosTareasEntregadas.push(nuevaEntrega);
    } else {

        if (validarEntrega(pTitulo, pNombreUsuarioAlumno) == false && pAudio !== "") {
            datosTareasEntregadas.push(nuevaEntrega);
        } else {
            /* Usuario Repetido */
        }
    }
}

function listarEntregaEjercicios() {
    // TODO.lista ejercicios a entregar
    let selectVacio = false;
    let i = 0;
    let resultado = "";
    resultado = `<div id="selectDeTareas">`;
    resultado += `<from>`;
    resultado += `<select id="entregaTarea"  class="inputText">`;
    resultado += `<option value=""> Seleccionar tarea... </option>`;

    while (i <= datosDeEjercicios.length - 1) {
        let tituloEj = datosDeEjercicios[i].titulo;
        let verificacionEj = validarEntrega(tituloEj, usuarioLogueado);

        if (profesorAsignadoAalumno == datosDeEjercicios[i].nombreUsuarioProfesor && nivelAlumnoActual == datosDeEjercicios[i].nivel && verificacionEj == false) {

            let tituloActual = datosDeEjercicios[i].titulo;
            selectVacio = true;
            resultado += `<option value="${tituloActual}"> ${tituloActual} </option>`;
        }
        i++;
    }

    resultado += `</select>`;
    resultado += `</from>`;
    resultado += `<br><br>`;
    resultado += `</div>`;

    document.querySelector("#entregarTarea").style.display = "block";

    if (selectVacio == false) {
        document.querySelector("#entregarTarea").style.display = "none";
        resultado = ` No hay tareas pendientes de entrega `;
    }

    document.querySelector(".tareas").innerHTML = resultado;
}

function asignacionDeNivelAlumno() {

    let elegirAlumno = document.querySelector("#elegirAlumno").value;
    let asignarNivel = document.querySelector("#nivelAlumno").value;
    let i = 0;
    let alumnoEncontrado = false;
    let resultado = `<div> `

    while (i < datosdeUsuarios.length && alumnoEncontrado == false) {

        if (datosdeUsuarios[i].nombre == elegirAlumno) {

            const nivelActual = datosdeUsuarios[i].nivel[0]
            resultado += ""

            if (datosdeUsuarios[i].nivel[1] <= asignarNivel) {

                if (asignarNivel == 2 && datosdeUsuarios[i].nivel[1] == 1) {
                    datosdeUsuarios[i].nivel = ["Intermedio", 2];
                    resultado += `<div class="nivelesAsig">Al alumno ${datosdeUsuarios[i].nombre}, de nivel ${nivelActual},
                                        se le asigna el nivel ${datosdeUsuarios[i].nivel[0]}</div>`
                    alumnoEncontrado = true;
                } else if (asignarNivel == 3 && datosdeUsuarios[i].nivel[1] == 2) {
                    datosdeUsuarios[i].nivel = ["Avanzado", 3];
                    resultado += `<div>Al alumno ${datosdeUsuarios[i].nombre}, de nivel ${nivelActual}, 
                                        se le asigna el nivel ${datosdeUsuarios[i].nivel[0]}</div>`;
                    alumnoEncontrado = true;
                } else if (asignarNivel == datosdeUsuarios[i].nivel[1]) {
                    resultado += `<div class="nivelesAsig">El alumno ya se encuentra en el nivel seleccionado</div>`;
                } else if (asignarNivel - datosdeUsuarios[i].nivel[1] > 1) {
                    resultado += `<div class="nivelesAsig"><br>No se permite asignar de a más de un nivel a la vez</div>`;
                }
            } else {
                resultado = `<div class="nivelesAsig">El nivel del alumno seleccionado no puede ser inferior al nivel actual de este</div>`;
            }
        }
        i++;
        document.querySelector("#alumnoAsignado").innerHTML = resultado;

    }

    selectAsignacionAlumno()
}

//Funciones Alumno

function totalEjerciciosResueltosAlumno(pNombreAlumno) {

    let ejResueltos = `<div>`;
    ejResueltos += `<ul>`;

    for (let i = 0; i < datosTareasEntregadas.length; i++) {

        let alumno = datosTareasEntregadas[i].pNombreUsuarioAlumno;
        let titulo = datosTareasEntregadas[i].titulo;

        if (alumno == pNombreAlumno) {
            ejResueltos += `<li> ${titulo} </li>`;
        }
    }

    ejResueltos += `</ul>`;
    ejResueltos += `</div>`;
}
function cantidadDeEjerciciosEntregadosPorAlumno(pAlumno) {

    let cantidadEjerciciosRealizados = 0;
    
    let datos = [cantidadEjerciciosRealizados, pAlumno];
    let nivelActual= '';

    for( let j=0 ; j < datosdeUsuarios.length; j++) {
         
        if ( pAlumno== datosdeUsuarios[j].nombreUsuario && datosdeUsuarios[j].tipoDeUsuario=="Alumno") {
        nivelActual= datosdeUsuarios[j].nivel[0]
                    
       
            for (let i = 0; i < datosTareasEntregadas.length; i++) {
                let nombreAlumno = datosTareasEntregadas[i].nombreUsuarioAlumno;

                if (nombreAlumno == pAlumno && nivelActual== datosTareasEntregadas[i].nivel) {
                    cantidadEjerciciosRealizados++;
                    datos[0] = cantidadEjerciciosRealizados;
                }
            }
        }
   } console.log(datos)
    return datos;
    
}





function estadisticaAlumno() {  // estadisticaAlumno

    let mostrar = document.querySelector("#mostrarEstadisticaAlumno");
    let cantidadEjDelProf = totalEjerciciosNivel(usuarioLogueado, profesorAsignadoAalumno)
    let cantidadEjResueltos = cantidadDeEjerciciosEntregadosPorAlumno(usuarioLogueado);    
    let promedio = (cantidadEjResueltos[0] * 100) / cantidadEjDelProf;
    
    let ejResuelto = 0;
    let ejPendiente = 0;
    let resultado = "";
    let nivelActual= '';
    for (let i=0; i< datosdeUsuarios.length; i++) {

        if ( datosdeUsuarios[i].nombreUsuario== usuarioLogueado && datosdeUsuarios[i].tipoDeUsuario=="Alumno" ) {

            nivelActual= datosdeUsuarios[i].nivel[0]

            for (f = 0; f < datosDevoluciones.length; f++) {
                devolucionActual = datosDevoluciones[f];

                if( nivelActual== devolucionActual.nivel) {
                    if (devolucionActual.status == "Realizada" && devolucionActual.nombreUsuarioAlumno == usuarioLogueado ) {
                        ejResuelto++;

                        } else if (devolucionActual.status == "Pendiente" && devolucionActual.nombreUsuarioAlumno == usuarioLogueado) {
                        ejPendiente++; 

                    }
                }
              
            }

        }
    }
    
    if(cantidadEjDelProf == 0) { // Promedio no se puede dividir entre 0
        promedio= 0 
    }

    
    resultado += ` <br> El porcentaje de Ejercicios Resueltos es: ${promedio} % <br>`; 
    resultado += `La cantidad de Ejercicios que cuentan con una devolucion es: ${ejResuelto} <br>`;
    resultado += `La cantidad de Ejercicios que tienen una devolucion pendiente es: ${ejPendiente} <br>`;
    
    mostrar.innerHTML = resultado;
    mostrar.value = "";
}

//Funciones Profesor

function ingresarEjerciciosPlanteados() {
    // TODO. agregue dos parametros para cambiar el audio despues y que la tarea se ingrese pendiente al princiipio.
    let titulo = document.querySelector("#titulo").value;
    let descripcion = document.querySelector("#descripcion").value;
    let nivel = document.querySelector("#nivelEjercicio").value;
    let img = document.querySelector("#imgEjercicio").value; // FALTA HACER EL INGRESO DE AUDIO Y IMAGEN Y VALIDAR QUE CONTENGAN ARCHIVOS
    let imgFinal = eliminarFakePath(img);
    let nombreProfesor = usuarioLogueado;
    let esImagen = controlarExtension(imgFinal);
    let msjsIngresoEjercicios= document.querySelector("#msjsIngresoEj");

    if (contadorCaracteresValidacion(titulo, descripcion) && img !== "" && esImagen == true && nivel!== "") {
        nuevoEjercicio(titulo, descripcion, imgFinal, numeroEjercicio, nombreProfesor, nivel);
        mostrarMsjsIngresoEjercicio() 
        msjsIngresoEjercicios.innerHTML= " El ejercicio se ingreso Exitosamente"
    } else {
        mostrarMsjsIngresoEjercicio() 
        msjsIngresoEjercicios.innerHTML= `El ejercicio debe contener nivel, título, descripción e imagen.
        <br>
        La suma de caracteres entre título y descripción debe estar entre 20 y 200 `
    }

    selectTareasPendientes();
    limpiarTodasLasPantallas();
    console.log(datosDeEjercicios)
}

function nuevoEjercicio(titulo, descripcion, imagen, numeroEjercicio, pNombreUsuarioProfesor, nivel, audio) {

    if (contadorCaracteresValidacion(titulo, descripcion) && imagen !== "" && nivel !== "") {

        let ejercicio = new Ejercicio(titulo, descripcion, imagen, numeroEjercicio, pNombreUsuarioProfesor, nivel, audio);
        datosDeEjercicios.push(ejercicio);
    }

}

function redactarDevolucion() {
    //TODO. Devolucion de tareas vinculada a un select dinamico y al input
    let devolucionTarea = document.querySelector("#devolucionTarea").value.trim();
    let ejercicioNombre = document.querySelector("#tareaPendiente").value;
    let msjError= document.querySelector("#devExitosa");
    for (let i = 0; i < datosDevoluciones.length; i++) {

        if (datosDevoluciones[i].id == parseInt(ejercicioNombre) && devolucionTarea !== "") {
            mostrarElMsjDevoluciones()
            datosDevoluciones[i].profesorAsignado = usuarioLogueado;
            datosDevoluciones[i].status = "Realizada";
            datosDevoluciones[i].correccion = devolucionTarea;
            msjError.innerHTML= "Devolucion enviada al Aumno"
            selectTareasPendientes();
          
        } else if (devolucionTarea == "") {
            mostrarElMsjDevoluciones()
            console.log(devolucionTarea)
            msjError.innerHTML= "Debe ingresar una Devolucion"
        }
    }
  
    console.log(datosDevoluciones)
    limpiarTodasLasPantallas();
    selectTareasPendientes();
}


function ingresarDevoluciones(pTituloEjercicio, pNombreAlumno, pCorreccion, pStatus, pNivel, pProfesorAsignado) {

    let nuevaDevolucion = new Devolucion(pTituloEjercicio, pNombreAlumno, pCorreccion, pStatus, pNivel, pProfesorAsignado);
    datosDevoluciones.push(nuevaDevolucion);
}


function mayorCantidadDeEjerciciosEntregados(pProfesor) {

    for (let e = 0; e < datosTareasEntregadas.length; e++) {

        let nombreAlumno = datosTareasEntregadas[e].nombreUsuarioAlumno;

        if (datosTareasEntregadas[e].profesorAsignado == pProfesor) {

            let cantidadEjAlumno = cantidadDeEjerciciosEntregadosPorAlumno(nombreAlumno);

            if (cantidadEjAlumno[0] >= mayorCantidadEj) {
                mayorCantidadEj = cantidadEjAlumno[0];
            }
        }
    }
}

function mostrarAlumnosConMayorEntrega(pProfesor) {

    mayorCantidadDeEjerciciosEntregados(pProfesor); //Calcula la mayor cantidad de Ejercicios entregados
    let ejEntregadosPorAlumno = [];
    let ejEntregadosPorAlumnoSinRepetir = [];
    let mostrarEjerciciosEnLista = "";
    let ejEntregadosPorAlumnoNombres = "";

    for (let p = 0; p < datosTareasEntregadas.length; p++) {
        // Con la mayor cantidad calculada, busca coincidencias entre la entrega de los alumnos y la mayor entrega, muestra los alumnos que entregaron mas.

        let nombreAlumno = datosTareasEntregadas[p].nombreUsuarioAlumno;
        let profesorDeAlumno = datosTareasEntregadas[p].profesorAsignado;

        if (profesorDeAlumno == pProfesor) {

            let cantidadEjAlumno = cantidadDeEjerciciosEntregadosPorAlumno(nombreAlumno);

            if (cantidadEjAlumno[0] == mayorCantidadEj) {
                ejEntregadosPorAlumno.push(cantidadEjAlumno[1]);
            }
        }
    }

    ejEntregadosPorAlumnoSinRepetir = eliminarelementosrepetidos(ejEntregadosPorAlumno);
    ejEntregadosPorAlumnoNombres = cambiarNombreUsuarioPorNombre(ejEntregadosPorAlumnoSinRepetir);
    mostrarEjerciciosEnLista = mostrarArrayEnUnaLista(ejEntregadosPorAlumnoNombres);

    return mostrarEjerciciosEnLista;
}

function cantidadEjTotalPorDocente(pProfesor) {    // perfilProfesor

    let cantidadEjEntregados = 0;
   
    for (let a = 0; a < datosTareasEntregadas.length; a++) {

        if (datosTareasEntregadas[a].profesorAsignado == pProfesor) {
            cantidadEjEntregados++;
        }
    }

    return cantidadEjEntregados;
}



function totalEjerciciosNivel(pNombreAlumno, pProfesorAsignado) {  // perfilProfesor

    let cantidadEjerciciosNivel = 0;

    for(let i= 0; i< datosdeUsuarios.length; i++){

        if(pNombreAlumno== datosdeUsuarios[i].nombreUsuario && datosdeUsuarios[i].tipoDeUsuario=="Alumno") {
            let nivelActual= datosdeUsuarios[i].nivel[0]
       
            for( let e=0; e < datosDeEjercicios.length; e++) {
        
                if(nivelActual== datosDeEjercicios[e].nivel && pProfesorAsignado== datosDeEjercicios[e].nombreUsuarioProfesor ){
                  
                    cantidadEjerciciosNivel++;
                } 
            }

        }

    }
    return cantidadEjerciciosNivel
    
}

function cantidadEjerciciosResueltos(pNombreAlumno) {  // perfilProfesor
    let cantidadEjResueltos = 0;
    for(let i= 0; i< datosdeUsuarios.length; i++){

        if(pNombreAlumno== datosdeUsuarios[i].nombreUsuario && datosdeUsuarios[i].tipoDeUsuario=="Alumno") {
            let nivelActual= datosdeUsuarios[i].nivel[0]
       
            for( let e=0; e < datosTareasEntregadas.length; e++) {
        
                if(nivelActual== datosTareasEntregadas[e].nivel && datosTareasEntregadas[e].nombreUsuarioAlumno == pNombreAlumno ){
                  
                    cantidadEjResueltos++;
                } 
            }

        }

    }
    return cantidadEjResueltos
}



function estadisticaProfesor() {  // perfilProfesor
  
    let alumnosMayorResolucionEj = mostrarAlumnosConMayorEntrega(usuarioLogueado);
    let totalEjEntregadosParaDocente = cantidadEjTotalPorDocente(usuarioLogueado);
    let mostraralumnosMayorResolucionEj = document.querySelector("#mayorCantidadEjercicios");
    let mostrarTotalEjEntregadosParaDocente = document.querySelector("#totalEjercicios");
    let resultado = "";
    let resultado1 = "";

    if (alumnosMayorResolucionEj == "<ul></ul>") {
        resultado = "Ningun alumno ha resuelto ejercicios por el momento";

        document.querySelector("#mostrarAlumnoNivel").style.display = "none";
        document.querySelector("#btnElegirAlumnoEstadistica").style.display = "none";
        document.querySelector("#btnLimpiarEstadistica").style.display = "none";
    } else {

        resultado += `<p> El/los Alumnos que resolvieron mas Ejercicios es/son: <br> ${alumnosMayorResolucionEj}</p> <br>`;
        resultado1 += `<p> La cantidad de Ejercicios que se han entregado en total son: ${totalEjEntregadosParaDocente}</p> <br>`;
    }

    mostraralumnosMayorResolucionEj.innerHTML = resultado;
    mostrarTotalEjEntregadosParaDocente.innerHTML = resultado1;
}

function totalEjPlanteadosYResueltos() {

    let mostrar = document.querySelector("#mostrarAlumnoNivel");  
    let nombreAlumno=document.querySelector("#nivelAlumnoEstadistica").value;
    let totalEjerciciosPlanteadosParaNivel = totalEjerciciosNivel(nombreAlumno,usuarioLogueado);
    let totalEjerciciosResueltos = cantidadEjerciciosResueltos(nombreAlumno);
    let resultado = "";
    console.log(totalEjerciciosResueltos)
    resultado += `<p> El total de ejercicios planteados para el nivel del alumno seleccionado son: ${totalEjerciciosPlanteadosParaNivel}</p> <br> `;
    resultado += `<p> El total de ejercicios resueltos para el alumno seleccionado son: ${totalEjerciciosResueltos}</p> <br> `;

    mostrar.innerHTML = resultado;
  
}

function visualizacionEjerciciosResueltos() {

    let resultado = "";
    resultado += '<table border="2">';
    resultado += "<thead>";
    resultado += "<tr>";
    resultado += "<th>";
    resultado += `Titulo`;
    resultado += "</th>";
    resultado += "<th>";
    resultado += "Audio";
    resultado += "</th>";
    resultado += "<th>";
    resultado += "Nivel";
    resultado += "</th>";
    resultado += "</tr>";
    resultado += "</thead>";
    resultado += "<tbody>";
    resultado += "<tr>";

    for (i = 0; i < datosTareasEntregadas.length; i++) {
        if (datosTareasEntregadas[i].nombreUsuarioAlumno == usuarioLogueado) {
            resultado += '<td align="center">';
            resultado += `${datosTareasEntregadas[i].titulo}`;
            resultado += "</td>";
            resultado += '<td align="center">';
            resultado += `<audio controls>
                                <source src="Audio/${datosTareasEntregadas[i].audio}" type="audio/mp3">
                                </audio>`;
            resultado += "</td>";
            resultado += '<td align="center">';
            resultado += `${datosTareasEntregadas[i].nivel}`;
            resultado += "</td>";
            resultado += "</tr>";
        }
    }

    resultado += "</tbody>";
    resultado += "</table>";

    document.querySelector("#mostrarEjResueltos").innerHTML = resultado;
}

function verTodosLosEjercicios() {

    let resultado = `<table border="2"> <tr><td>Titulo</td> <td>Descripcion</td>  <td>Imagen</td>  <td>Devolucion</td> </tr>`;

    for (let i = 0; i < datosDeEjercicios.length; i++) {
        let tituloActual = datosDeEjercicios[i].titulo;
        let profesorActual = datosDeEjercicios[i].nombreUsuarioProfesor;
        let descrpcionActual = datosDeEjercicios[i].descripcion;
        let imagenActual = datosDeEjercicios[i].imagen;
        let correccionActual = "Tarea sin entregar";
        let nivelEjercicioActual= datosDeEjercicios[i].nivel
         console.log(nivelAlumnoActual)
        if (profesorAsignadoAalumno == profesorActual && nivelEjercicioActual == nivelAlumnoActual) {

            for (let j = 0; j < datosDevoluciones.length; j++) {

                if (usuarioLogueado == datosDevoluciones[j].nombreUsuarioAlumno) {

                    if (tituloActual == datosDevoluciones[j].titulo) {
                        correccionActual = datosDevoluciones[j].correccion;
                    }
                }
            }

            resultado += `<tr><td> ${tituloActual} </td>`;
            resultado += `<td> ${descrpcionActual} </td>`;
            resultado += `<td>    <img src="Imagen/${imagenActual}" class="visualisarImg"></td>`;
            resultado += `<td> ${correccionActual} </td> </tr>`;
        }

    }
    resultado += "</table>";
    document.querySelector("#todosLosEjerciciosDelAlumno ").innerHTML = resultado;
    limpiarBuscadorAlumno();
   
}


function listarEjerciciosPlanteados() {
 
    let resultado = `<table border="2" id="tablaEjPlant"> <tr> <td>Nivel</td> <td>Titulo</td> <td>Descripcion</td>  <td>Imagen</td>  </tr>`;

    for( let i= 0; i< datosDeEjercicios.length; i++){
         const nivelActual= datosDeEjercicios[i].nivel;
         const tituloActual= datosDeEjercicios[i].titulo;      
         const descripcionActual= datosDeEjercicios[i].descripcion;
         const imagenActual= datosDeEjercicios[i].imagen;
         const profesorActual= datosDeEjercicios[i].nombreUsuarioProfesor

         if (usuarioLogueado== profesorActual ) {
            resultado += `<tr><td> ${nivelActual} </td>`;
            resultado += `<td> ${tituloActual} </td>`;
            resultado += `<td> ${descripcionActual} </td>`;
            resultado += `<td>    <img src="Imagen/${imagenActual}" class="visualisarImg"></td> </tr>`;
          
         }

    }
    resultado += "</table>";
    document.querySelector("#mostrarTabla").innerHTML = resultado;

}



