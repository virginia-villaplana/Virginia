/*
1.- Crea un fichero eventos.html e incluye JQuery -- HECHO
2.- Incluye un botón con el id miboton, haz que cuando se pulse el botón saque un mensaje por pantalla
3.- Incluye otro botón con el id otroboton, haz que cuando se pulse el botón coloque un borde de color rojo al botón
4.- Incluye otro botón con el id tercerboton, haz que cuando se pulse el botón coloque un fondo verde al botón
5.- Incluye un campo de texto con el id campo, haz que cuando adquiera el foco saque un mensaje por consola
6.- Haz que al perder el foco en el campo de texto, saque un mensaje por pantalla
7.- Incluye un formulario de login en el HTML, haz que no envíe el formulario si no se han rellenado los dos campos
8.- Coloca un enlace en el HTML a google, haz que cuando entre el ratón saque un mensaje por consola y cuando salga el ratón también
9.- Haz que cuando se salga del campo del nombre del formulario valide si está rellenado
*/

//2
function botonPulsado(){
    console.log ("Me han pulsado!");
}
function botonRojo(){
    $("#otroboton").css("border-color","red"); 
}
function botonVerde(){
    $("#tercerboton").css("background-color","green"); 
    //$(this).css("background-color","green"); -->Funciona con "this" porque el mismo objeto donde socede el evento es el que queremos cambiar. 
}
function campoEnFoco(){
    $("#campo").focusin(
    console.log("Campo en foco"));   
}
function campoSinFoco(){
    $("#campo").blur(
    console.log("Campo sin foco"));   
}

function sobreGoogle(){
    $("a").mouseover(
    console.log("Quieres ir a Google"));
}
function saleDeGoogle(){
    $("a").mouseout(
    console.log("No quieres ir a Google"));
}

function gestionaLogin(evento){
    if($("#usuario").val()!="" && $("#password").val()!=""){
       //caso de que el formulario valide. Los campos no pueden ser = a cadena vacía
    }else{
       //caso de no validación
         evento.preventDefault();
    }
}
function saleDeUsuario(){
    if($("#usuario").val()!=""){
        $("#usuario").css("border","1px solid green");
    }else{
        $("#usuario").css("border","1px solid red");
    }  
}

function init() {
    console.log ("DOM Cargado JQuery");
    $("#miboton").click(botonPulsado);
//3. 
    $("#otroboton").click(botonRojo);
//4.
    $("#tercerboton").click(botonVerde);
//5.
    $("#campo").focusin(campoEnFoco);
//6.
    $("#campo").blur(campoSinFoco);
    
    /*var campo=$("#campo");
        campo.focus(campoEnFoco);
        campo.blur(campoEnFoco);
    
    -->Aquí se podría crear una variable (RECOMENDABLE) "campo", porque con $("#campo") el algoritmo hace una búsqueda por todo el documento, y en cambio, con una variable va directo. Se ahorraría tiempo.*/
//7
    $("#miform").submit(gestionaLogin);
//8
    $("a").mouseover(sobreGoogle);
    $("a").mouseout(saleDeGoogle);
//9
    $("#usuario").blur(saleDeUsuario);
    
}
$("document").ready(init);