/*function init(){
    console.log("Dom cargado");
    
}*/
function comenzar(event){
    console.log("comenzando");
    event.dataTransfer.setData("caja", event.target.id);
}

function sobrevolar(event){
    event.preventDefault();
}

function soltar(event){
    console.log("soltado");
    event.preventDefault()
    var data=event.dataTransfer.getData("caja");
    var eleccion=document.getElementById(data);
    var midiv=document.getElementById("contenedor");
    midiv.outerHTML+=idData.outerHTML;   
}

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
    var c3=document.getElementById("c3");

    c1.addEventListener("dragstart", comenzar);
    c2.addEventListener("dragstart", comenzar);
    c3.addEventListener("dragstart", comenzar);

    var contenedor=document.getElementById("contenedor");
    //c2.addEventListener("dragenter", entrar);
    contenedor.addEventListener("dragover", sobrevolar);
    //c2.addEventListener("dragleave", salir);
    contenedor.addEventListener("drop", soltar);
    
    
    
}

document.addEventListener ("DOMContentLoaded", init);
