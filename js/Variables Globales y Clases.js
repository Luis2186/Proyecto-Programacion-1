let hayUsuarioLogueado = false;
let profesor = false;
let alumno = false;
let numeroEjercicio = 1;
let datosdeUsuarios = [];
let datosDeEjercicios = [];
let datosDevoluciones = [];
let idTareasEntregadas=1;
let idDevoluciones=1;
let datosTareasEntregadas = [];
let mayorCantidadEj = Number.NEGATIVE_INFINITY;
let profesorAsignadoAalumno = "";
let usuarioActual = "";
let nivelAlumnoActual = "";
let nombreProfesorActual = "";
let usuarioLogueado = "";
let nivelAlumnoEstadisticaProf="";
let imagenesPerfil=[];



class Ejercicio {
    constructor(pTitulo, pDescripcion, pImagen, pNumeroDeEjercicio, pNombreUsuarioProfesor, pNivel) {

        this.id = pNumeroDeEjercicio;
        this.titulo = pTitulo;
        this.descripcion = pDescripcion;
        this.imagen = pImagen;
        this.nombreUsuarioProfesor = pNombreUsuarioProfesor;
        this.nivel = pNivel;
        numeroEjercicio++;
    }
}

class Devolucion {
    constructor(pTitulo, pNombreUsuarioAlumno, pCorreccion, pStatus, pNivel, pProfesorAsignado) {
        this.id= idDevoluciones
        this.titulo = pTitulo;
        this.nombreUsuarioAlumno = pNombreUsuarioAlumno;
        this.correccion = pCorreccion;
        this.status = pStatus;
        this.nivel = pNivel;
        this.profesorAsignado = pProfesorAsignado;
        idDevoluciones++
    }
}

class EntregaTarea {
    constructor(pTitulo, pNombreUsuarioAlumno, pAudio, pNivel, pProfesorAsignado) {
        this.id= idTareasEntregadas
        this.titulo = pTitulo;
        this.nombreUsuarioAlumno = pNombreUsuarioAlumno;
        this.audio = pAudio;
        this.nivel = pNivel;
        this.profesorAsignado = pProfesorAsignado;
        idTareasEntregadas++
    }
}

class UsuarioAlumno {
    constructor(pTipoDeUsuario, pNombreUsuario, pContraseña, pNombre, pProfesorAsignado, pNivel) {

        this.tipoDeUsuario = pTipoDeUsuario;
        this.nombreUsuario = pNombreUsuario;
        this.contraseña = pContraseña;
        this.nombre = pNombre;
        this.profesorAsignado = pProfesorAsignado;
        this.nivel = pNivel;
    }
}

class UsuarioProfesor {
    constructor(pTipoDeUsuario, pNombreUsuario, pContraseña, pNombre) {

        this.tipoDeUsuario = pTipoDeUsuario;
        this.nombreUsuario = pNombreUsuario;
        this.contraseña = pContraseña;
        this.nombre = pNombre;

    }
}

class Imagen {
    constructor(pNombreUsuario,pImagen) {
   
        this.nombreUsuario = pNombreUsuario;
        this.imagenPerfil = pImagen;
        

    }
}