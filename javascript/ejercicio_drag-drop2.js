/*
1.- Crea un fichero html con un js asociado
2.- En el html mete un listado desordenado con 3 elementos dentro llamado origen
3.- En el html mete un listado desordenado vacío llamado destino
4.- Haz que cualquier elemento del listado de origen se pueda arrastrar al destino
5.- Haz que cuando se pase un elemento al destino se elimine (no sólo visualmente) del origen
*/


function empezando(event){
    console.log("empezando");
    event.dataTransfer.setData("text", event.target.id);
    var datos= event.target.innerHTML;
    console.log(datos);
};

function sobrevolar(event){
    event.preventDefault();
};

  
function soltar(event){
    console.log("soltado");
    event.preventDefault();
    var data=event.dataTransfer.getData("text");
    var eleccion=document.getElementById(data);
    console.log(data);
    var midiv=document.getElementById("destino");
    midiv.innerHTML+=eleccion.outerHTML;
    var origen=document.getElementById("origen");
    var eliminado=origen.removeChild(eleccion);
   
};



function init (){
   console.log ("Dom cargado");


    var origen=document.getElementById("origen");
    var destino=document.getElementById("destino");
    
    origen.addEventListener("dragstart", empezando);  
    destino.addEventListener("dragover", sobrevolar);
    destino.addEventListener("drop", soltar);
    
    
};

document.addEventListener ("DOMContentLoaded", init);