function registro() {

    let tipoDeUsuario = document.querySelector("#tipoDeUsuario").value; //con 7 errores para verificar validacion.
    let nombreUsuario = document.querySelector("#usuario").value;
    let contraseña = document.querySelector("#contraseña").value;
    let nombre = document.querySelector("#nombre").value;
    let profesorAsignado = document.querySelector("#asignarProfesor").value;
    let divIdRegistro = document.querySelector("#erroresRegistro");
    let pNivel = ["Inicial",1];


    if (verificarQueNoExistaUsuario(datosdeUsuarios, nombreUsuario) == false) {
        nuevoUsuario(tipoDeUsuario, nombreUsuario, contraseña, nombre, profesorAsignado, pNivel);    
        selectAlumno()
        erroresDeRegistro(tipoDeUsuario, nombre, contraseña, nombreUsuario,profesorAsignado);
        ocultarSelectSeleccionarProfesor() 
 
    } else {
 
        usuarioSugerido = generarNombreUsuario(nombreUsuario);
        divIdRegistro.innerHTML = `El nombre de usuario ya existe, <br> usuario sugerido: ${usuarioSugerido}`;
        document.querySelector("#tipoDeUsuario").selectedIndex = "1";
    
    }
     console.log(datosdeUsuarios)

    resetearSelect();
    limpiarTodasLasPantallas();
   
}

function nuevoUsuario(tipoDeUsuario, nombreUsuario, contraseña, nombre, profesorAsignado, pNivel) {

    let ingresoDatoAlumno = new UsuarioAlumno(tipoDeUsuario, nombreUsuario, contraseña, nombre, profesorAsignado, pNivel);
    let ingresoDatoProfesor = new UsuarioProfesor(tipoDeUsuario, nombreUsuario, contraseña, nombre);

    switch (tipoDeUsuario) {
        case "Docente":
            if (validarUsuario(tipoDeUsuario, nombreUsuario, contraseña, nombre,'')) {
                datosdeUsuarios.push(ingresoDatoProfesor);
            }
            break;

        case "Alumno":
            if (validarUsuario(tipoDeUsuario, nombreUsuario, contraseña, nombre,profesorAsignado)) {
                datosdeUsuarios.push(ingresoDatoAlumno);
            }
            break;

        default:
            break;
    }
}

function login() {

    let ingresoNombre = document.querySelector("#logusuario").value;
    let ingresoContraseña = document.querySelector("#logcontraseña").value;
    let tipoDeUsuario = document.querySelector("#tipoDeUsuario").value;
    let validacionLogin = validarLogin(datosdeUsuarios, ingresoNombre, ingresoContraseña);

    if (validacionLogin == true) {
        iniciarSesion();
        usuarioLogueado = usuarioIgualaRegistro(ingresoNombre);
        perfilUsuario(usuarioLogueado);
    }

    limpiarTodasLasPantallas();

    if (tipoDeUsuario !== "Alumno") {
        document.querySelector("#asignarProfesor").style.display = "none";
        document.querySelector("#labelSelectProfesor").style.display = "none";
    }
}

function erroresDeLogin(login, nombre, password) { //También muestra mensaje exitoso

    let resultado = "";
    let divIdLogin = document.querySelector("#erroresLogin");
    resultado += `<div class="errores">`;

    if (login == false && nombre != "" && password != "") {
        resultado = `Nombre de usuario y/o contraseña incorrectos </div>`;
        divIdLogin.innerHTML = resultado;
    } else {
        resultado = "Complete los campos";
        divIdLogin.innerHTML = resultado;
    }

    mostrarErroresLogin();
}


function erroresDeRegistro(tipoDeUsuario,nombre,password,usuario,pProfesorAsignado ) {
    let resultado = ``;
    let divIdRegistro = document.querySelector("#erroresRegistro");

        resultado += `<div class="errores">`;
        
        if ( validarUsuario(tipoDeUsuario, usuario, password, nombre,pProfesorAsignado)== false )  { //TODO agregue el parametro tipodeusuario a la funcion para que pueda validar el usuario
           
            if (nombre == "") {
                resultado += `El campo Nombre es de ingreso obligatorio </div>`;
                divIdRegistro.innerHTML = resultado;
                resetearSelect();
                ocultarSelectSeleccionarProfesor() 

            } else if ( usuario == "" ) {
                resultado += `El campo usuario es de ingreso obligatorio </div>`;
                divIdRegistro.innerHTML = resultado;
                resetearSelect();
                ocultarSelectSeleccionarProfesor() 

            } else if (password == "") {
                resultado += `El campo contraseña es de ingreso obligatorio </div>`;
                divIdRegistro.innerHTML = resultado;
                ocultarSelectSeleccionarProfesor() 

            } else if(pProfesorAsignado=='' && tipoDeUsuario=="Alumno") {

                resultado += `Debe seleccionar un Profesor </div>`;
                divIdRegistro.innerHTML = resultado;

            }else if ( password !== "") {
                resultado += `La contraseña ingresada no es correcta. <br>
                              Ingresar una contraseña que contenga: <br>
                            - Largo minimo 4 caracteres.  <br>
                            - Al menos una mayuscula. <br>
                            - Al menos un numero. <br>
                            </div>`;
                divIdRegistro.innerHTML = resultado;
                resetearSelect();
                ocultarSelectSeleccionarProfesor() 
            } 
        } else {
            resultado += "Se ha registrado correctamente";
            divIdRegistro.innerHTML = resultado;
             resetearSelect();
            ocultarSelectSeleccionarProfesor() 
        }

     
}
function generarNombreUsuario(nombreUsuario) {

    let letras = "0123456789abcdefghijklmnopqrstuvwxyz";
    let nombreUsuarioSugerido = nombreUsuario;
    nombreUsuarioSugerido += letras.charAt(Math.random() * letras.length);

    if (verificarQueNoExistaUsuario(datosdeUsuarios, nombreUsuarioSugerido) == false) {
        return nombreUsuarioSugerido;
    }
}
