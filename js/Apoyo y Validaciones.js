// Validaciones

function contadorCaracteresValidacion(texto1, texto2) {
    //Contador para el titulo y el textarea
    texto1.trim();
    texto2.trim();
    let caracterestexto1 = texto1.length;
    let caracterestexto2 = texto2.length;
    let totalcaracteres = caracterestexto1 + caracterestexto2;
    let hacer = false;

    if (totalcaracteres >= 20 && totalcaracteres <= 200 && texto1 !== "" && texto2 !== "") {
        hacer = true;
    }

    return hacer;
}

function validarContraseña(contraseña, minCaracteresAceptados, minMayusuclaAceptadas, minMinusculaAceptadas, minNumerosAceptados) {
    //Funcion que se encarga de validar la contraseña //Con un minimo de caracteres, mayusuclas,minusculas y numeros.
    let mayusculas = 0;
    let minusculas = 0;
    let numerocontraseña = 0;
    let isOk = false;

    for (let e = 0; e < contraseña.length; e++) {

        let codigoASCII = contraseña.charCodeAt(e);

        if (codigoASCII >= 65 && codigoASCII <= 90) {
            mayusculas++;
        } else if (codigoASCII >= 97 && codigoASCII <= 122) {
            minusculas++;
        } else if (codigoASCII >= 48 && codigoASCII <= 57) {
            numerocontraseña++;
        }
    }

    if (contraseña.length >= minCaracteresAceptados && mayusculas >= minMayusuclaAceptadas && minusculas >= minMinusculaAceptadas && numerocontraseña >= minNumerosAceptados) {
        isOk = true;
    }

    return isOk;
}

function validarUsuario(tipoDeUsuario, nombreUsuario, contraseña, nombre,pProfesorAsignado) {
    //Se encarga de verificar si el usuario cumple con las validaciones correspondientes.
    let hacer = false;
    let contraseñaSinEspacio = sacarEspaciosTexto(contraseña);

    if (tipoDeUsuario === "Docente") {

        if (nombreUsuario !== "" && contraseña !== "" && nombre !== "") {

            if (validarContraseña(contraseñaSinEspacio, 4, 1, 1, 1)) {
                hacer = true;
            }
        } //Falta validacion de usuario, hay que hacerla en un for in lo demas esta funcional

    } else if (tipoDeUsuario === "Alumno") {

        if (nombreUsuario !== "" && contraseña !== "" && nombre !== "" && pProfesorAsignado!=="") {
            if (validarContraseña(contraseñaSinEspacio, 4, 1, 1, 1)) {
                hacer = true;
            }
        }
    }

    return hacer;
}

function validarLogin(arrayDondeBuscar, variableNombre, variableContraseña) {

    let nombreminuscula = variableNombre.toLowerCase();
    let hacer = false;

    for (let i = 0; i < arrayDondeBuscar.length; i++) {
        let nombreUsuario = arrayDondeBuscar[i].nombreUsuario;
        let usuarioProfesor = arrayDondeBuscar[i].tipoDeUsuario == "Docente";
        let usuarioAlumno = arrayDondeBuscar[i].tipoDeUsuario == "Alumno";
        let usuarioContraseña = arrayDondeBuscar[i].contraseña;

        if (nombreUsuario.toLowerCase() == nombreminuscula && usuarioContraseña == variableContraseña) {

            if (usuarioProfesor) {
                alumno = false;
                profesor = true;
                hacer = true;
            } else if (usuarioAlumno) {
                profesor = false;
                alumno = true;
                hacer = true;
            }
        }

        erroresDeLogin(hacer, variableNombre, variableContraseña);
    }

    return hacer;
}

function verificarQueNoExistaUsuario(arrayDondeBuscar, usuarioBuscado) {

    let i = 0;
    let usuarioEncontrado = false;
    let usuarioBuscadoMin = usuarioBuscado.toLowerCase();

    while (!usuarioEncontrado && i < arrayDondeBuscar.length) {
        let nombreUsuario = arrayDondeBuscar[i].nombreUsuario;
        let nombreUsuarioMiN = nombreUsuario.toLowerCase();

        if (usuarioBuscadoMin == nombreUsuarioMiN) {
            usuarioEncontrado = true;
        }

        i++;
    }

    return usuarioEncontrado;
}

function validarEntrega(pTitulo, pNombreUsuarioAlumno) {

    let x = 0;
    let usuarioEncontrado = false;

    while (!usuarioEncontrado && x < datosTareasEntregadas.length) {
        let nombreUsuarioAlumno = datosTareasEntregadas[x].nombreUsuarioAlumno;
        let titulo = datosTareasEntregadas[x].titulo;

        if (pNombreUsuarioAlumno == nombreUsuarioAlumno && pTitulo == titulo) {
            usuarioEncontrado = true;
        }

        x++;
    }

    return usuarioEncontrado;
}

function verificarsubcadena(texto, textoSubCadena) {

    let esSubcadena = false;
    let ubicacionsub = 0;

    for (let i = 0; i <= texto.length; i++) {

        if (texto[i] == textoSubCadena[ubicacionsub]) {
            ubicacionsub++;
        } else {
            ubicacionsub = 0;
        }

        if (ubicacionsub == textoSubCadena.length && textoSubCadena.length !== 0 && ubicacionsub !== 0) {
            esSubcadena = true;
        }
    }

    return esSubcadena;
}

function almacenarTareasPendientes(statusTarea, pProfesorAsignado) {

    let tareasPendientes = [];

    for (let e = 0; e < datosDevoluciones.length; e++) {
        //Recorrer el array global para ingresar//solamente los profesores para luego poder trabajar con ellos
        if (datosDevoluciones[e].status == `${statusTarea}` && datosDevoluciones[e].profesorAsignado == `${pProfesorAsignado}`) {
            tareasPendientes.push(datosDevoluciones[e]);
        }
    }

    return tareasPendientes;
}

function sacarEspaciosTexto(variableTexto) {
    //Funcion para sacar los espacios de un texto
    let contraseñasinespacio = "";

    for (let i = 0; i < variableTexto.length; i++) {
        if (variableTexto.charAt(i) == " ") {
            contraseñasinespacio += "";
        } else {
            contraseñasinespacio += variableTexto.charAt(i);
        }
    }

    return contraseñasinespacio;
}

function usuarioIgualaRegistro(nombre) {

    let nombreUsuarioRegistro = "";

    for (i = 0; i < datosdeUsuarios.length; i++) {

        if (datosdeUsuarios[i].nombreUsuario.toLowerCase() == nombre.toLowerCase()) {
            nombreUsuarioRegistro = datosdeUsuarios[i].nombreUsuario;
        }
    }

    return nombreUsuarioRegistro;
}



function quitarAcento(texto) {
    /* funcion que quita acentos en funcion buscador y en el dato buscado que esta en la funcion function mostrarEjerciosBuscadosPorElAlumno()*/
    let sinAcento = "";

    for (let i = 0; i <= texto.length; i++) {
        if (texto.charCodeAt(i) == 225) {
            sinAcento += "a";
        } else if (texto.charCodeAt(i) == 233) {
            sinAcento += "e";
        } else if (texto.charCodeAt(i) == 237) {
            sinAcento += "i";
        } else if (texto.charCodeAt(i) == 243) {
            sinAcento += "o";
        } else if (texto.charCodeAt(i) == 250) {
            sinAcento += "u";
        } else {
            sinAcento += texto.charAt(i);
        }
    }

    return sinAcento;
}

function limpiarBuscadorAlumno() {
    document.querySelector("#mostrarEjerciciosAlumnos").innerHTML = "";
}

function eliminarFakePath(pathCompleto) {

    let posicionUltimaBarra = buscarUltimoCaracterEnTexto(pathCompleto, "\\"); // la ruta de la imagen era con dos \\ y no con /, por ese motivo lo sustitui por contrabarras
    let nombreArchivo = cortarTextoDesdePosicion(pathCompleto, posicionUltimaBarra + 1);

    return nombreArchivo;
}

function cortarTextoDesdePosicion(texto, posicion) {
    //TODO anexo a fakepath
    let textoParaRetornar = "";

    for (let i = posicion; i < texto.length; i++) {
        textoParaRetornar += texto[i];
    }

    return textoParaRetornar;
}

function buscarUltimoCaracterEnTexto(textoDondeBuscar, caracterBuscado) {

    let posicion = 0;

    for (let i = 0; i < textoDondeBuscar.length; i++) {

        if (textoDondeBuscar[i] == caracterBuscado) {
            posicion = i;
        }

    }

    return posicion;
}

function eliminarelementosrepetidos(array) {

    array.sort();
    arraysinrepetidos = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
            arraysinrepetidos.push(array[i]);
        }
    }

    return arraysinrepetidos;
}

function mostrarArrayEnUnaLista(arrayParaMostrar) {
    let resultado = `<ul>`;

    for (let s = 0; s < arrayParaMostrar.length; s++) {
        resultado += `<li> ${arrayParaMostrar[s]} </li>`;
    }

    resultado += `</ul>`;

    return resultado;
}

function cambiarNombreUsuarioPorNombre(ArrayNombreUsuario) {

    let arrayNombres = [];

    for (let m = 0; m < datosdeUsuarios.length; m++) {
        let nombreUsuario = datosdeUsuarios[m].nombreUsuario;
        let nombre = datosdeUsuarios[m].nombre;

        for (let s = 0; s < ArrayNombreUsuario.length; s++) {
            if (nombreUsuario == ArrayNombreUsuario[s]) {
                arrayNombres.push(nombre);
            }
        }
    }

    return arrayNombres;
}

function controlartTipoUsuario() {

    let tipoDeUsuario = document.querySelector("#tipoDeUsuario").value;

    if (tipoDeUsuario == "Alumno") {
        mostrarSelectAlumno();
    } else if (tipoDeUsuario == "Docente") {
        ocultarSelectAlumno();
    }
}

function controlarExtension(extension) {
    let textoInvertido = "";
    let esAudio = false;
    let esImagen = false;

    for (let i = extension.length - 1; i >= 0; i--) {
        textoInvertido += extension[i];

        if (textoInvertido.charAt(0) == "a" && textoInvertido.charAt(1) == "4" && textoInvertido.charAt(2) == "m" && alumno == true) {
            esAudio = true;
            return esAudio;
        } else if (textoInvertido.charAt(0) == "g" && textoInvertido.charAt(1) == "n" && textoInvertido.charAt(2) == "p" && profesor == true) {
            esImagen = true;
            return esImagen;
        }
    }
}
