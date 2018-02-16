/*
A partir de la página web proporcionada, completar el código JavaScript para que:
1.- Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
2.- Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
*/

    function ocultar(event){
        var texto=this.parentNode.children[0];
        texto.classList.toggle("oculta");
        if (texto.className == "oculta") {
            this.innerHTML = "Texto Oculto"
        } else {
            this.innerHTML = "Ocultar contenidos"
        }
    }
    /*function ocultar(event, parrafo){
    console.log("ocultando")
    event.preventDefault;
    var enlaces= document.getElementById("enlace1")
    var p1= document.getElementById("parrafo1")
    p1.classList.toggle("oculta")
         if (p1.class="oculta"){
           enlaces.innerHTML="Mostrar Contenidos"
        } 
}

function ocultar2(event){
    console.log("ocultando")
    event.preventDefault;
    document.getElementById("parrafo2").classList.toggle("oculta");
   
}
function ocultar3(event){
    console.log("ocultando")
    event.preventDefault;
    document.getElementById("parrafo3").classList.toggle("oculta");
   
}



   function ocultar(event){
    console.log("ocultando")
    event.preventDefault;
    document.getElementById("parrafo1").classList.toggle("oculta");
}

*/

function init(){
   console.log("Dom cargado");
    

    var enlaces= document.querySelectorAll(".enlaces");
     for (var item of enlaces){
        item.addEventListener("click",ocultar);
       };
    
    /*document.getElementById("enlace1").addEventListener("click",ocultar1)
    document.getElementById("enlace2").addEventListener("click",ocultar2)
    document.getElementById("enlace3").addEventListener("click",ocultar3)
    */
    
}
document.addEventListener("DOMContentLoaded",init);



/*
3.- Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
4.- Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado
*/
