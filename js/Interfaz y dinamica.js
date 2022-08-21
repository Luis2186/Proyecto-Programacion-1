inicializar();

function inicializar() {
    clicksEnBotones();
    baseDeDatos();
    construirMenu();
}

function baseDeDatos() {
    preCargarUsuarios();
    preCargajercicios();
    precargaDevoluciones();
    precargaEntregaTareas();
    htmlDinamico();
    imagenesPerfilPrecargas();
}

function clicksEnBotones() {

    // Ambos Perfiles

    document.querySelector("#btnIniciarSesion").addEventListener("click", login);
    document.querySelector("#btnIngresarRegistro").addEventListener("click", registro);
    document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion);
    document.querySelector("#btnusuario").addEventListener("click", mostrarPerfilUsuario); //TODO.se unifica mostrar perfil

    // Perfil Profesor

    document.querySelector("#plantearejercicio").addEventListener("click", ingresarEjerciciosPlanteados);
    document.querySelector("#btnUsuarioNivel").addEventListener("click", asignacionDeNivelAlumno);
    document.querySelector("#btnAsignacionDeNivel").addEventListener("click", mostrarAsignacionDeNivel);
    document.querySelector("#btnEstadisticaProfesor").addEventListener("click", mostrarEstadisticaProfesor);
    document.querySelector("#btndevolucionejercicio").addEventListener("click", redactarDevolucion);
    document.querySelector("#btnDevolucionDeEjercicios").addEventListener("click", mostrarDevolucionEjercicios);
    document.querySelector("#btnPlanteamientoEjercicios").addEventListener("click", mostrarPlanteamientoEjercicios);
    document.querySelector("#btnLimpiarEstadistica").addEventListener("click", limpiarPantallaSelectEstadisticaProfesor);
    document.querySelector("#btnVerEjPlanteados").addEventListener("click", mostrarListadoDeEjericiciosPlanteados);
    document.querySelector("#btnPlenteamientoEj").addEventListener("click", ocultarListadoDeEjerciciosPlanteados);

    //Perfil Alumno

    document.querySelector("#btnEntregaTarea").addEventListener("click", entregaTarea);
    document.querySelector("#btnVisualizacionEjercicios").addEventListener("click", mostrarVisualizacionEjercicios);
    document.querySelector("#btnVisualizacionEjerciciosResueltos").addEventListener("click", mostrarVisualizacionEjerciciosResueltos);
    document.querySelector("#btnEntregaEjercicios").addEventListener("click", mostrarEntregaEjercicios);
    document.querySelector("#btnEstadisticaAlumno").addEventListener("click", mostrarEstadisticaAlumno);
    document.querySelector("#buscar").addEventListener("click", buscarEjerciciosIngresados);
    document.querySelector("#btnLimpiarBusqueda").addEventListener("click", limpiarBuscadorAlumno);
    document.querySelector("#btnVertodos").addEventListener("click", verTodosLosEjercicios);

}

function htmlDinamico() {
    //TODO Aca va todo lo del html hecho dinamicamente
    selectTareasPendientes();
    selectAlumno();
    selectAsignacionAlumno();
    listarEntregaEjercicios();
    selectMostrarNombreAlumnoEstadisticasProfesor();
    selectAsignacionDeNivel();
}

function interfazoculta() {

    let interfaz = document.querySelectorAll(".interfaz");

    for (let i = 0; i < interfaz.length; i++) {
        interfaz[i].style.display = "none";
    }
}

function ocultarbotonesmenu() {

    let botones = document.querySelectorAll(".btninterfaz");

    for (let i = 0; i < botones.length; i++) {
        botones[i].style.display = "none";
    }

}

function limpiarTodasLasPantallas() {

    limpiarPantallaRegistro();
    limpiarPantallaLogin();
    limpiarPantallaIngresoEjercicio();
    limpiarPantallaDevolucionEjercicio();
    limpiarPantallaBuscarEjercicios();
    limpiarPantallaSelectEstadisticaProfesor();
    resetearSelectPlanteamientoEjercicios();
    limpiarPantallaEntregaEjercicio();
    limpiarBuscadorAlumno();
    limpiarTablaTodosLosEjercicios()
    limpiarErrorsAsignacionNivel()
    ocultarListadoDeEjerciciosPlanteados() 
}

function ocultarMsjs() {
    ocultarMsjDevoluciones();
    ocultarMjsDeTareas();
    ocultarMjsIngresoEjercicios();

}

function construirMenu() {

    ocultarbotonesmenu();

    if (hayUsuarioLogueado) {
        document.querySelector("#btnusuario").style.display = "inline-block"; // TODO. Se se deja botones comunes afuera
        document.querySelector("#btnCerrarSesion").style.display = "inline-block";
        mostrarBienvenida();

        if (hayUsuarioLogueado && profesor) {
            document.querySelector("#btnPlanteamientoEjercicios").style.display = "inline-block";
            document.querySelector("#btnDevolucionDeEjercicios").style.display = "inline-block";
            document.querySelector("#btnEstadisticaProfesor").style.display = "inline-block";
            document.querySelector("#btnAsignacionDeNivel").style.display = "inline-block";
            mostrarImagenUsuario()
        } else if (hayUsuarioLogueado && alumno) {
            document.querySelector("#btnVisualizacionEjercicios").style.display = "inline-block";
            document.querySelector("#btnEntregaEjercicios").style.display = "inline-block";
            document.querySelector("#btnEstadisticaAlumno").style.display = "inline-block";
            document.querySelector("#btnVisualizacionEjerciciosResueltos").style.display = "inline-block";
        }

    } else {
        mostrarInicio();

    }
}

function cio() {
    interfazoculta();
}

function mostrarAsignacionDeNivel() {
    interfazoculta();
    document.querySelector("#asignacionDeNivel").style.display = "block";
    selectAsignacionAlumno();
    limpiarTodasLasPantallas();
}

function mostrarVisualizacionEjercicios() {
    interfazoculta();
    //perfilUsuario(usuarioLogueado);
    document.querySelector("#visualizacionEjercicios").style.display = "block";
    console.log(usuarioLogueado)
}

function mostrarEntregaEjercicios() {
    interfazoculta();
    document.querySelector("#entregaEjercicios").style.display = "block";
    listarEntregaEjercicios();
    limpiarTodasLasPantallas();
    ocultarMsjs()
}

function mostrarVisualizacionEjerciciosResueltos() {
    interfazoculta();
    visualizacionEjerciciosResueltos();
    limpiarTodasLasPantallas();
    document.querySelector("#visualizacionEjerciciosResueltos").style.display = "block";
}

function mostrarSelectAlumno() {
    document.querySelector("#registroAlumno").style.display = "block";
    document.querySelector("#asignarProfesor").style.display = "inline-block";
    document.querySelector("#labelSelectProfesor").style.display = "inline-block";
}

function ocultarSelectAlumno() {
    document.querySelector("#registroAlumno").style.display = "none";
}

function ocultarSelectTareas() {
    document.querySelector("#entregaTarea").style.display = "none";
}
function iniciarSesion() {
    hayUsuarioLogueado = true;
    construirMenu();
    baseDeDatos();
}

function cerrarSesion() {
    hayUsuarioLogueado = false;
    mayorCantidadEj = Number.NEGATIVE_INFINITY;
    profesorAsignadoAalumno = "";
    usuarioActual = "";
    nivelAlumnoActual = "";
    nombreProfesorActual = "";
    usuarioLogueado = "";
    document.querySelector("#erroresRegistro").innerHTML = "";
    document.querySelector("#erroresLogin").innerHTML = "";
    ocultarMsjs()
    construirMenu();
    ocultarImagenUsuario()

}


function mostrarErroresLogin() {
    document.querySelector("#erroresLogin").style.display = "block";
}

function mostrarDevolucionEjercicios() {
    interfazoculta();
    document.querySelector("#devolucionEjercicios").style.display = "block";
    ocultarMsjs()
    limpiarTodasLasPantallas();
}

function mostrarEstadisticaProfesor() {
    interfazoculta();
    estadisticaProfesor();
    document.querySelector("#estadistica").style.display = "block";
}

function mostrarEstadisticaAlumno() {
    interfazoculta();
    estadisticaAlumno();
    limpiarTodasLasPantallas();
    document.querySelector("#estadisticaAlumno").style.display = "block";
}

function mostrarPlanteamientoEjercicios() {
    interfazoculta();
    //perfilUsuario(usuarioLogueado);
    limpiarTodasLasPantallas();
    ocultarMsjs()
    document.querySelector("#planteamientoEjercicios").style.display = "block";
    console.log(usuarioLogueado)
}

function resetearSelect() {
    document.querySelector("#tipoDeUsuario").selectedIndex = "0";
}

function mostrarMsjsIngresoEjercicio() {
  
    document.querySelector("#msjsIngresoEj").style.display = "block";
}

function ocultarMjsIngresoEjercicios() {
    document.querySelector("#msjsIngresoEj").style.display = "none";
 
}


function mostrarPerfilUsuario() {
    interfazoculta();
    document.querySelector("#perfilUsuario").style.display = "block";
    //perfilUsuario(usuarioLogueado);
    limpiarTodasLasPantallas();
}

function mostrarInicio() {
    interfazoculta();
    document.querySelector("#resgitroLog").style.display = "block";
}

function mostrarBienvenida() {
    // TODO.Se muestra mensaje bienvenida
    interfazoculta();
    limpiarTodasLasPantallas();
    document.querySelector("#bienvenida").style.display = "block";
}



function mostrarBtnTarea() {
    document.querySelector("#entregarTarea").style.display = "block";
}

function limpiarPantallaRegistro() {
    document.querySelector("#nombre").value = "";
    document.querySelector("#usuario").value = "";
    document.querySelector("#contraseña").value = "";
}

function limpiarPantallaLogin() {
    document.querySelector("#logusuario").value = "";
    document.querySelector("#logcontraseña").value = "";
}

function limpiarPantallaIngresoEjercicio() {
    document.querySelector("#titulo").value = "";
    document.querySelector("#descripcion").value = "";
    document.querySelector("#imgEjercicio").value = "";
}

function limpiarPantallaDevolucionEjercicio() {
    document.querySelector("#devolucionTarea").value = "";
}

function limpiarPantallaBuscarEjercicios() {
    document.querySelector("#buscarejercicios").value = "";
}

function limpiarPantallaSelectEstadisticaProfesor() {
    selectMostrarNombreAlumnoEstadisticasProfesor();
}

function resetearSelectPlanteamientoEjercicios() {
    document.querySelector("#nivelEjercicio").value = "";
}

function limpiarPantallaEntregaEjercicio() {
    document.querySelector("#audioTarea").value = "";
}

function ocultarMjsDeTareas() {
    document.querySelector("#msjTareas").style.display = "none";
}



function limpiarTablaTodosLosEjercicios() {
    document.querySelector("#todosLosEjerciciosDelAlumno").innerHTML = "";
}

function limpiarErrorsAsignacionNivel() {
    document.querySelector("#alumnoAsignado").innerHTML = "";
}

function mostrarMsjsDeTarea() {
    document.querySelector("#msjTareas").style.display = "block";
}

function ocultarSelectSeleccionarProfesor() {
    document.querySelector("#labelSelectProfesor").style.display = "none";
    document.querySelector("#asignarProfesor").style.display = "none";
}


function mostrarElMsjDevoluciones() {
    document.querySelector("#devExitosa").style.display = "block";
}

function  ocultarMsjDevoluciones() {
    document.querySelector("#devExitosa").style.display = "none";
}

function mostrarListadoDeEjericiciosPlanteados() {
   listarEjerciciosPlanteados();
   document.querySelector("#visualizarIngresoEjercicios").style.display = "none";
   document.querySelector("#mostrarEjerciciosPlanteados").style.display = "block";
   document.querySelector("#btnPlenteamientoEj").style.display = "block";
}


function ocultarListadoDeEjerciciosPlanteados() {

    document.querySelector("#visualizarIngresoEjercicios").style.display = "block";
    document.querySelector("#mostrarEjerciciosPlanteados").style.display = "none";
    document.querySelector("#btnPlenteamientoEj").style.display = "none";
    document.querySelector("#btnPlenteamientoEj").style.display = "none";
}


function ocultarImagenUsuario() {
    document.querySelector("#imgPerfilusuario").style.display = "none";
}


function mostrarImagenUsuario() {
    document.querySelector("#imgPerfilusuario").style.display = "block";
}