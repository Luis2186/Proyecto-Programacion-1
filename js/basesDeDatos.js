function precargaEntregaTareas() {
    
    if (datosTareasEntregadas == "") {
    
        //Inicial
        
        nuevaTarea(    "Escalas modales relativas en Eb",    "Renzo"    , "ej1.m4a" ,    "Inicial"  , "AgustinPerez" );
        nuevaTarea(    "Escalas modales relativas en A" ,    "Renzo"    , "ej2.m4a" ,    "Inicial"  , "AgustinPerez" );

        nuevaTarea(   "Escalas modales relativas en C"  ,   "Fabian"    , "ej3.m4a" ,    "Inicial"  ,     "lele"     );
        nuevaTarea(   "Escalas modales paralelas en Bb" ,   "Fabian"    , "ej4.m4a" ,    "Inicial"  ,     "lele"     );
        
        nuevaTarea(    "Escalas modales relativas en A" ,    "Saul"     , "ej2.m4a" ,    "Inicial"  ,    "LuciaR"    );

        //Intermedio

        nuevaTarea(       "Notas fuertes y débiles"     ,     "Enzo"    , "ej5.m4a" ,  "Intermedio" ,    "LuciaR"    );
        nuevaTarea(       "Adornos y notas de paso"     ,     "Enzo"    , "ej6.m4a" ,  "Intermedio" ,    "LuciaR"    );

        nuevaTarea(       "Adornos y notas de paso"     ,     "Maxi"    , "ej6.m4a" ,  "Intermedio" , "AgustinPerez" );
        nuevaTarea(        "Tensiones en las voces"     ,     "Maxi"    , "ej7.m4a" ,  "Intermedio" , "AgustinPerez" );

        nuevaTarea(     "Adornos y notas de paso"       ,    "Augusto"  , "ej6.m4a" ,  "Intermedio" ,     "lele"     );
        nuevaTarea(      "Notas fuertes y débiles"      ,    "Augusto"  , "ej5.m4a" ,  "Intermedio" ,     "lele"     );
        nuevaTarea(      "Tensiones en las voces"       ,    "Augusto"  , "ej7.m4a" ,  "Intermedio" ,     "lele"     );

        //Avanzado
        nuevaTarea(            "Modulaciones"           ,  "Martin2156" , "ej8.m4a" ,   "Avanzado"  , "AgustinPerez" );
        nuevaTarea("inversiones de los acordes mayores" ,  "Martin2156" , "ej9.m4a" ,   "Avanzado"  , "AgustinPerez" );

        nuevaTarea("inversiones de los acordes mayores" ,      "Ana"    , "ej9.m4a" ,   "Avanzado"  ,    "LuciaR"    );
        nuevaTarea(            "Modulaciones"           ,      "Ana"    , "ej8.m4a" ,   "Avanzado"  ,    "LuciaR"    );
        
        nuevaTarea(            "Modulaciones"           ,     "Bruno"   , "ej8.m4a" ,   "Avanzado"  ,     "lele"     );

        //Validaciones de errores 

        nuevaTarea(  "Escalas modales relativas en A"   ,     "Saul"    , "ej2.m4a" ,   "Inicial"   ,    "LuciaR"    );   //No deberia salir(Ejercicio ya entregado)
        nuevaTarea(      "Notas fuertes y débiles"      ,     "Enzo"    , "ej5.m4a" ,  "Intermedio" ,    "LuciaR"    );   //No deberia salir(Ejercicio ya entregado)
        nuevaTarea("inversiones de los acordes mayores" ,     "Ana"     , "ej9.m4a" ,   "Avanzado"  ,    "LuciaR"    );   //No deberia salir(Ejercicio ya entregado)
    }
}

function precargaDevoluciones() {
    if (datosDevoluciones == "") {
        //Inicial

        ingresarDevoluciones(    "Escalas modales relativas en Eb" ,    "Renzo"   ,   "Muy buen Trabajo"  , "Realizada" ,  "Inicial"   , "AgustinPerez" ); 
        ingresarDevoluciones(    "Escalas modales relativas en A"  ,    "Renzo"   ,   "Muy buen Trabajo"  , "Realizada" ,  "Inicial"   , "AgustinPerez" );

        ingresarDevoluciones(    "Escalas modales relativas en C"  ,   "Fabian"   ,   "Muy buen Trabajo"  , "Realizada" ,  "Inicial"   ,     "lele"     );
        ingresarDevoluciones(    "Escalas modales paralelas en Bb" ,   "Fabian"   ,       "Pendiente"     , "Pendiente" ,  "Inicial"   ,     "lele"     );

        ingresarDevoluciones(    "Escalas modales relativas en A" ,     "Saul"    ,     "Debe Mejorar"    , "Realizada" ,  "Inicial"   ,    "LuciaR"    ); 

       
        //Intermedio
        ingresarDevoluciones(     "Notas fuertes y débiles"        ,    "Enzo"    ,        "Bien"         , "Realizada" , "Intermedio" ,    "LuciaR"    );
        ingresarDevoluciones(     "Adornos y notas de paso"        ,    "Enzo"    ,      "Pendiente"      , "Pendiente" , "Intermedio" ,    "LuciaR"    );

        ingresarDevoluciones(     "Adornos y notas de paso"        ,    "Maxi"    ,      "Pendiente"      , "Pendiente" , "Intermedio" , "AgustinPerez" ); // Al select para elegir devoluciones agregarle nombre de usuario
        ingresarDevoluciones(     "Tensiones en las voces"         ,    "Maxi"    ,      "Pendiente"      , "Pendiente" , "Intermedio" , "AgustinPerez" );

        ingresarDevoluciones(     "Adornos y notas de paso"        ,   "Augusto"  ,   "Muy buen Trabajo"  , "Realizada" , "Intermedio" ,     "lele"     );
        ingresarDevoluciones(     "Notas fuertes y débiles"        ,   "Augusto"  ,   "Muy buen Trabajo"  , "Realizada" , "Intermedio" ,     "lele"     );
        ingresarDevoluciones(     "Tensiones en las voces"         ,   "Augusto"  ,         "Bien"        , "Realizada" , "Intermedio" ,     "lele"     );

        //Avanzado
        ingresarDevoluciones(          "Modulaciones"              , "Martin2156" ,   "Muy buen Trabajo"  , "Realizada",   "Avanzado"  , "AgustinPerez" );
        ingresarDevoluciones("inversiones de los acordes mayores"  , "Martin2156" ,   "Debe Mejorar"      , "Realizada",   "Avanzado"  , "AgustinPerez" );

        ingresarDevoluciones(          "Modulaciones"              ,     "Ana"    ,     "Pendiente"       , "Pendiente",   "Avanzado"  ,    "LuciaR"    );
        ingresarDevoluciones("inversiones de los acordes mayores"  ,     "Ana"    ,     "Pendiente"       , "Pendiente",   "Avanzado"  ,    "LuciaR"    );

        ingresarDevoluciones(          "Modulaciones"              ,    "Bruno"   ,   "Muy buen Trabajo"  , "Realizada",   "Avanzado"  ,     "lele"     );
        
    }
}

function preCargajercicios() {
    if (datosDeEjercicios == "") { //TODO. Agregue los parametros audio y status de devolucion ("realizada o pendiente")
        
        //Inicial
        nuevoEjercicio(  "Escalas modales relativas en C"  ,                                      "Escribe las escalas modales relativas en tono de C mayor"                                             ,   "ej1.png"   ,  numeroEjercicio  ,    "LuciaR"    ,  "Inicial"   ); 
        nuevoEjercicio(  "Escalas modales relativas en C"  ,                                      "Escribe las escalas modales relativas en tono de C mayor"                                             ,   "ej1.png"   ,  numeroEjercicio  , "AgustinPerez" ,  "Inicial"   ); 
        nuevoEjercicio(  "Escalas modales relativas en C"  ,                                      "Escribe las escalas modales relativas en tono de C mayor"                                             ,   "ej1.png"   ,  numeroEjercicio  ,     "lele"     ,  "Inicial"   ); 

        nuevoEjercicio(  "Escalas modales relativas en Eb" ,                                      "Escribe las escalas modales relativas en tono de Eb mayor"                                            ,   "ej2.png"   ,  numeroEjercicio  ,    "LuciaR"    ,  "Inicial"   );
        nuevoEjercicio(  "Escalas modales relativas en Eb" ,                                      "Escribe las escalas modales relativas en tono de Eb mayor"                                            ,   "ej2.png"   ,  numeroEjercicio  , "AgustinPerez" ,  "Inicial"   );
        nuevoEjercicio(  "Escalas modales relativas en Eb" ,                                      "Escribe las escalas modales relativas en tono de Eb mayor"                                            ,   "ej2.png"   ,  numeroEjercicio  ,     "lele"     ,  "Inicial"   );

        nuevoEjercicio(  "Escalas modales relativas en A"  ,                                      "Escribe las escalas modales relativas en tono de A mayor"                                             ,   "ej3.png"   ,  numeroEjercicio   ,    "LuciaR"    , "Inicial"   );
        nuevoEjercicio(  "Escalas modales relativas en A"  ,                                      "Escribe las escalas modales relativas en tono de A mayor"                                             ,   "ej3.png"   ,  numeroEjercicio   , "AgustinPerez" , "Inicial"   );
        nuevoEjercicio(  "Escalas modales relativas en A"  ,                                      "Escribe las escalas modales relativas en tono de A mayor"                                             ,   "ej3.png"   ,  numeroEjercicio   ,     "lele"     , "Inicial"   );

        nuevoEjercicio(  "Escalas modales paralelas en Bb" ,                               "Repite el ejercicio anterior en tono de Bb.(No uses armadura de clave)."                                     ,   "ej4.png"   ,  numeroEjercicio  ,   "LuciaR"     ,  "Inicial"   );
        nuevoEjercicio(  "Escalas modales paralelas en Bb" ,                               "Repite el ejercicio anterior en tono de Bb.(No uses armadura de clave)."                                     ,   "ej4.png"   ,  numeroEjercicio  , "AgustinPerez" ,  "Inicial"   );
        nuevoEjercicio(  "Escalas modales paralelas en Bb" ,                               "Repite el ejercicio anterior en tono de Bb.(No uses armadura de clave)."                                     ,   "ej4.png"   ,  numeroEjercicio  ,     "lele"     ,  "Inicial"   );
      
        //Intermedio

        nuevoEjercicio(       "Notas fuertes y débiles"    ,                                  "Sobre la siguiente melodía indica las notas fuertes y las débiles:"                                       ,   "ej5.png"   ,  numeroEjercicio  ,   "LuciaR"     , "Intermedio" );
        nuevoEjercicio(       "Notas fuertes y débiles"    ,                                  "Sobre la siguiente melodía indica las notas fuertes y las débiles:"                                       ,   "ej5.png"   ,  numeroEjercicio  , "AgustinPerez" , "Intermedio" );
        nuevoEjercicio(       "Notas fuertes y débiles"    ,                                  "Sobre la siguiente melodía indica las notas fuertes y las débiles:"                                       ,   "ej5.png"   ,  numeroEjercicio  ,    "lele"      , "Intermedio" );
        
        nuevoEjercicio(          "Análisis melódico"       ,                                          "Sobre la melodía anterior haz un análisis melódico"                                               ,   "ej6.png"   ,  numeroEjercicio  ,    "LuciaR"    , "Intermedio" );
        nuevoEjercicio(          "Análisis melódico"       ,                                          "Sobre la melodía anterior haz un análisis melódico"                                               ,   "ej6.png"   ,  numeroEjercicio  , "AgustinPerez" , "Intermedio" );
        nuevoEjercicio(          "Análisis melódico"       ,                                          "Sobre la melodía anterior haz un análisis melódico"                                               ,   "ej6.png"   ,  numeroEjercicio  ,     "lele"     , "Intermedio" );

        nuevoEjercicio(       "Adornos y notas de paso"    ,        "Sobre la misma melodía de los ejercicios anteriores agrega adornos y notas de paso. Podrán ser secundarias o principales."          ,   "ej7.png"   ,  numeroEjercicio  ,    "LuciaR"    , "Intermedio" );
        nuevoEjercicio(       "Adornos y notas de paso"    ,        "Sobre la misma melodía de los ejercicios anteriores agrega adornos y notas de paso. Podrán ser secundarias o principales."          ,   "ej7.png"   ,  numeroEjercicio  , "AgustinPerez" , "Intermedio" );
        nuevoEjercicio(       "Adornos y notas de paso"    ,        "Sobre la misma melodía de los ejercicios anteriores agrega adornos y notas de paso. Podrán ser secundarias o principales."          ,   "ej7.png"   ,  numeroEjercicio  ,     "lele"     , "Intermedio" );

        nuevoEjercicio(       "Tensiones en las voces"     ,               "Repite el ejercicio anterior agregando tensiones a los acordes para minimizar el movimiento de las voces"                    ,   "ej8.png"   ,  numeroEjercicio  ,    "LuciaR"    , "Intermedio" );
        nuevoEjercicio(       "Tensiones en las voces"     ,               "Repite el ejercicio anterior agregando tensiones a los acordes para minimizar el movimiento de las voces"                    ,   "ej8.png"   ,  numeroEjercicio  , "AgustinPerez" , "Intermedio" );
        nuevoEjercicio(       "Tensiones en las voces"     ,               "Repite el ejercicio anterior agregando tensiones a los acordes para minimizar el movimiento de las voces"                    ,   "ej8.png"   ,  numeroEjercicio  ,     "lele"     , "Intermedio" );
        
        //Avanzado
        nuevoEjercicio(             "Modulaciones"         ,                            "sube o baja un tono toda la composición a partir de cierto punto de la obra"                                    ,   "ej9.png"   ,  numeroEjercicio  ,   "LuciaR"     ,  "Avanzado"  );
        nuevoEjercicio(             "Modulaciones"         ,                            "sube o baja un tono toda la composición a partir de cierto punto de la obra"                                    ,   "ej9.png"   ,  numeroEjercicio  , "AgustinPerez" ,  "Avanzado"  );
        nuevoEjercicio(             "Modulaciones"         ,                            "sube o baja un tono toda la composición a partir de cierto punto de la obra"                                    ,   "ej9.png"   ,  numeroEjercicio  ,    "lele"      ,  "Avanzado"  );

        nuevoEjercicio("inversiones de los acordes mayores",  "El ejercicio está hecho sobre los acordes La mayor y Re mayor tocados en la misma cuerda. Por tanto vas a tocar en el tono de La mayor."  ,   "ej10.png"  ,  numeroEjercicio  ,    "LuciaR"    ,  "Avanzado"  );
        nuevoEjercicio("inversiones de los acordes mayores",  "El ejercicio está hecho sobre los acordes La mayor y Re mayor tocados en la misma cuerda. Por tanto vas a tocar en el tono de La mayor."  ,   "ej10.png"  ,  numeroEjercicio  , "AgustinPerez" ,  "Avanzado"  );
        nuevoEjercicio("inversiones de los acordes mayores",  "El ejercicio está hecho sobre los acordes La mayor y Re mayor tocados en la misma cuerda. Por tanto vas a tocar en el tono de La mayor."  ,   "ej10.png"  ,  numeroEjercicio  ,    "lele"      ,  "Avanzado"  );

        //Errores De validacion Ejercicios

        nuevoEjercicio(    "Escalas modales paralelas"     ,  "Escribe las escalas modales paralelas en tono de C agrupándolas en mayores y menores.Destaca la nota que diferencia las escalas mayores entre sí y las menores (nota característica prinipal: NC)."                                      ,   "ej9.png"  ,   numeroEjercicio   ,  "AgustinPerez" ,  "Inicial"   ); //No deberia salir (maximo de caracteres permitidos entre titulo y descripcion 200)
        nuevoEjercicio(     "Conducción de las voces"      ,  "Sobre la misma progresión de acordes de los ejercicios anteriores conduce las voces de los acordes por continuidad armónica, manteníendolas en el mismo lugar o por mínimo movimiento.No tomes en cuenta el movimiento de los bajos"     ,   "ej8.png"  ,   numeroEjercicio   ,     "LuciaR"    , "Intermedio" ); // No deberia salir //No deberia salir (maximo de caracteres permitidos entre titulo y descripcion 200)
        nuevoEjercicio(          "Acorde Mayor"            ,  "En concreto vas a tocar los acordes mayor séptima usando dos figuras diferentes y que solo usan las cuatro cuerdas inferiores de la guitarra.La precisión usando la púa es lo que te va a ayudar a que no falles cuando estás tocando."  ,   "ej10.png"  ,   numeroEjercicio   ,      "lele"     ,  "Avanzado"  ); //No deberia salir //No deberia salir (maximo de caracteres permitidos entre titulo y descripcion 200)
        nuevoEjercicio(          "Modulaciones 1"            ,  "sube o baja un tono toda la composición a partir de cierto punto de la obra" ,   ""   ,  numeroEjercicio  , "AgustinPerez" ,  "Avanzado"  );//No deberia salir (No se ingreso imagen)
    }  
}

function preCargarUsuarios() { //Función donde se precargan los usuarios  
  
    if (datosdeUsuarios == "") {
        nuevoUsuario("Docente" ,  "AgustinPerez",  "Azul2432"   ,  "Agustín"  );
        nuevoUsuario("Docente" ,      "lele"    ,   "Ti2145"    ,  "Eugenio"  );
        nuevoUsuario("Docente" ,     "LuciaR"   ,   "Lu12345"   , "Lucia Rocha");
   

        //Inicial
        nuevoUsuario("Alumno"  ,     "Fabian"   ,  "Fabi4567"   ,  "Fabian Soldo"  ,     "lele"     ,["Inicial",1]);
        nuevoUsuario("Alumno"  ,      "Renzo"   , "Renzosilva1" ,  "Renzo Silva"   , "AgustinPerez" ,["Inicial",1]);
        nuevoUsuario("Alumno"  ,      "Saul"    ,   "Sa6789"    ,  "Saul Stoh"     ,    "LuciaR"    ,["Inicial",1]);

        //Intermedio
        nuevoUsuario("Alumno"  ,      "Enzo"    ,  "Enzo2112"  ,   "Enzo Perez"    ,    "LuciaR"    ,["Intermedio",2]);
        nuevoUsuario("Alumno"  ,      "Maxi"    ,  "Max1234"   ,  "Maximiliano Ra" , "AgustinPerez" ,["Intermedio",2]);
        nuevoUsuario("Alumno"  ,     "Augusto"  ,  "Asd1234"   ,   "Augusto Zen"   ,     "lele"     ,["Intermedio",2]);

        
        nuevoUsuario("Alumno"  ,   "Martin2156" ,  "Martin2156" ,  "Martin Canobio" , "AgustinPerez" ,["Avanzado",3]);
        nuevoUsuario("Alumno"  ,      "Ana"     ,    "Ana12"   ,     "Ana Stuar"   ,   "LuciaR"     ,["Avanzado",3]);
        nuevoUsuario("Alumno"  ,     "Bruno"    ,   "Bat2020"  ,     "Bruno Diaz"  ,     "lele"     ,["Avanzado",3]);

        //Errores de validaciones en registro
        nuevoUsuario("Alumno"  ,     "Sofia"    , "sofia2147" , "Sofia Castiglioni"   ,    "LuciaR"    ,  ["Intermedio",2]);    // No deberia funcionar (falta mayuscula en contraseña)
        nuevoUsuario("Alumno"  ,    "Fiorella"  , "Fiogon"    , "Fiorella Gonzales"   , "AgustinPerez" ,  ["Intermedio",2]);    // No deberia funcionar (falta numero en contraseña)
        nuevoUsuario("Alumno"  ,    "Sebastian" , "Sebastian2",         ""            ,     "lele"     ,  ["Avanzado",3]);      // No deberia funcionar (No ingreso nombre)   
        nuevoUsuario("Alumno"  ,    "Luciano"   ,      ""     ,   "Luciano Arismendi" , "AgustinPerez" ,  ["Inicial",1]);       // No deberia funcionar (No ingreso contraseña)  
        nuevoUsuario("Alumno"  ,       ""       ,  "Maxi2456" , "Maximiliano Mercurio",    "LuciaR"    ,  ["Intermedio",2]);    // No deberia funcionar (No ingreso nombre de usuario)  
        nuevoUsuario("Docente" ,   "FlorenciaR" ,   "T13256"  ,   "Florencia"        );                                         // No deberia funcionar (falta minuscula en contraseña)
        nuevoUsuario("Docente" ,    "Natalia"   ,    "Nati"   ,    "Natalia"         );                                         // No deberia funcionar (falta numero en contraseña)
        nuevoUsuario("Docente" ,     "Matias"   ,    "Ma1"    , "Matias Escolari"    );                                         // No deberia funcionar (Contraseña menor a 4 digitos)  
    }
}


function imagenesPerfilPrecargas() {

        if( imagenesPerfil=="") {
        nuevaImagen( "AgustinPerez", "robin.png");
        nuevaImagen(  "lele"  , "batman.png"   );
        nuevaImagen(  "LuciaR", "batichica.png"  );
    }
}

function selectAlumno() { //Select dinamico para registro de Alumno
    //let profesores = almacenarUsuariosElegidos("Docente"); //inicializar una variable donde almacenar los profesores solamente
    let mostrar = document.querySelector("#registroAlumno");
  console.log(datosdeUsuarios)
    let resultado = "";
        resultado += `<label id="labelSelectProfesor" for="asignarProfesor">Profesor:</label>`;
        resultado += `<select id="asignarProfesor" class="inputText">`;
        resultado += `<option value=""> Seleccionar profesor... </option>`;         

            for (let i = 0; i < datosdeUsuarios.length; i++) {   //Recorrer el array profesores para generar la cantidad de option que corresponda segun la cantidad de profesores                                               
                 if(datosdeUsuarios[i].tipoDeUsuario=="Docente"){
                resultado += `<option value=${datosdeUsuarios[i].nombreUsuario}> ${datosdeUsuarios[i].nombre} (${datosdeUsuarios[i].nombreUsuario}) </option>`;        
            }
        }

        resultado += `</select>`;
        mostrar.innerHTML = resultado;
}

function selectAsignacionAlumno() { //TODO asignacion de nivel dinamica
   // let alumnos = almacenarUsuariosElegidos("Alumno") //inicializar una variable donde almacenar los Alumnos solamente
    let mostrar = document.querySelector("#resultadoBusqueda");

    let resultado = "";
        resultado +=`<select id="elegirAlumno" class="inputText" onchange= "selectAsignacionDeNivel()";>`;
        resultado += `<option value=""> Seleccione el Alumno.. </option>`;

            for (let i = 0; i < datosdeUsuarios.length; i++) {                                      //Recorrer el array profesores para generar la cantidad de option que
                if( usuarioLogueado== datosdeUsuarios[i].profesorAsignado) {
                resultado += `<option value="${datosdeUsuarios[i].nombre}"> ${datosdeUsuarios[i].nombre} </option>`; //corresponda segun la cantidad de Alumnos       
                }
            }

        resultado += `</select>`;
        resultado += `<br><br>`;
        mostrar.innerHTML = resultado; 
}

function selectTareasPendientes() { //TODO. Select dinamico para TareasPendientes

    let tareasPendientes = almacenarTareasPendientes("Pendiente",usuarioLogueado);
    let mostrar = document.querySelector("#selectTareas");
    let resultado = "";
        resultado += `<from> Tareas Pendientes `;
        resultado += `<select id="tareaPendiente" class="inputText">`;
        resultado += `<option value=""> Seleccionar... </option>`


            if(tareasPendientes == "") {
                resultado = "No hay devoluciones pendientes por el momento";
                mostrar.innerHTML = resultado;
                document.querySelector("#textDevolucion").style.display="none";
                document.querySelector("#btndevolucionejercicio").style.display="none";
            } else {
                document.querySelector("#btndevolucionejercicio").style.display="block";
                document.querySelector("#textDevolucion").style.display="block";
        

                for (let i = 0; i < tareasPendientes.length; i++) {   //Recorrer el array profesores para generar la cantidad de option que corresponda segun la cantidad de profesores 
                                                           
                 resultado += `<option value="${tareasPendientes[i].id}"> ${tareasPendientes[i].titulo} (${tareasPendientes[i].nombreUsuarioAlumno}) </option>`;        
          
         
                }
                
                resultado += `</select>`;
                resultado += `</from>`;
                resultado += `<br><br>`;
                mostrar.innerHTML = resultado;
                
            }   
       
}

function selectMostrarNombreAlumnoEstadisticasProfesor(){
    
    let mostrar = document.querySelector("#mostrarAlumnoNivel");
    let resultado = "";
        resultado += `<select id="nivelAlumnoEstadistica" class="inputTextEj" onchange="totalEjPlanteadosYResueltos()" ;>`;
        resultado += `<option value=""> Seleccionar...</option>`;
        
            for (let e = 0; e < datosdeUsuarios.length; e++) { 

                if(datosdeUsuarios[e].tipoDeUsuario=="Alumno" && datosdeUsuarios[e].profesorAsignado == usuarioLogueado ) {                                           
                    resultado += `<option value="${datosdeUsuarios[e].nombreUsuario}"> ${datosdeUsuarios[e].nombreUsuario} </option>`;  
                                      

                }    
        }
        resultado += `</select>`;
        resultado += `<br><br>`;
        mostrar.innerHTML = resultado;
        document.querySelector("#selectAlumnoEstadistica").style.display="block";    
}


function selectAsignacionDeNivel() {
    let nombreAlumno = document.querySelector("#elegirAlumno").value;
    let resultado = "";
    resultado += `<select id="nivelAlumno" class="inputText">`;
    resultado += `<option value=""> Seleccionar...</option>`;
    
    for (let i = 0; i < datosdeUsuarios.length; i++) {
        if(nombreAlumno == datosdeUsuarios[i].nombre){ 
            if ( datosdeUsuarios[i].nivel[1]== 1) {
                resultado += `<option value="2">Intermedio</option>`
                resultado += `<option value="3">Avanzado</option>`; 
            } else if( datosdeUsuarios[i].nivel[1]== 2) {
                resultado += `<option value="3">Avanzado</option>`;            
            } else  if( datosdeUsuarios[i].nivel[1]== 3) {
                resultado = `<div id="maximo">El alumno ya ha alcanzado el nivel máximo</div>`;
            }
        }         
    }

    resultado += `</select>`;
    resultado += `<br><br>`;
    document.querySelector("#alumnoAsignado").innerHTML = resultado;
}