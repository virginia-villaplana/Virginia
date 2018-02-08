/*
1.- Crea un fichero HTML con un fichero JS asociado
2.- Crea un div contenedor que tenag 3 divs dentro
3.- Pinta los 3 divs para que quepan los tes a la vez a la misma altura y tengan fondo rojo
4.- El primer div será arratrable, comprueba que se puede arrastrar
5.- asigna el evento dragstart al primer div, asócialo con una función llamada empezando
6.- dentro de la función empezando recuerda mandar un dato con el índice "iden" y con el valor del identificativo del primer div (setData)
7.- Haz que cuando se haya entrado en el segundo div saque un mensaje por consola (arrastrando)
8.- Haz que cuando se haya salido del segundo div saque un mensaje por consola
9.- Haz que cuando se pasee sobre el tercer div anule el comportamiento por defecto (arrastrando)
10.- Haz cuando se suelte el arrastrable (drop) en el tercer párrafo, anula el comportamiento por defecto y saca un mensaje por pantalla
11.- En la función anterior saca por pantalla el identificativo del div que se haya mandado en el dragstart
*/


function init(){
    console.log("Dom cargado");
    
};
function empezando(event){
    console.log("empezando");
    event.dataTransfer.setData("iden", event.target.id);
    var datos= event.target.innerHTML;
    console.log(datos);
};
function entrando(event){
    console.log("arrastrando");
};

function sobrevolar(event){
    event.preventDefault();
};

function soltar(event){
    console.log("soltado");
    event.preventDefault()
    var data=event.dataTransfer.getData("iden");
    console.log(data);
    var eleccion=document.getElementById(data);
    var midiv=document.getElementById("contenedor");
    var caja2=document.getElementById("c2");
    midiv.innerHTML=eleccion.innerHTML;
    eleccion.style.display="none";
    caja2.style.marginLeft="30%";
    
    //console.log(eleccion.innerHTML);
};

/*function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}*/

function init (){
    console.log ("Dom cargado");

   /* MÉTODO CORTO - DA ERROR!
   var cajasOrigen=document.querySelectorAll("#origen");
    for (var item of cajasOrigen){
        item.addEventListener("dragstart", comenzar);
        }
    */
    
    
/* MÉTODO LARGO*/

    var c1=document.getElementById("c1");
    var c2=document.getElementById("c2");
    var contenedor=document.getElementById("contenedor");
    
    c1.addEventListener("dragstart", empezando);  
    c2.addEventListener("dragenter", entrando);
    contenedor.addEventListener("dragover", sobrevolar);
    //c2.addEventListener("dragleave", salir);
    contenedor.addEventListener("drop", soltar);
    
    
};

document.addEventListener ("DOMContentLoaded", init);