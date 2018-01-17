//EJERCICIOS 16/01/18

function init () {
    console.log ("DOM Cargado JQuery");

//1. Crea un fichero dom.html e incluye Jquery
//2. Incluye un párrafo en el html, y luego modifica el contenido del párrafo desde Jquery.
    
    $("#parrafo1").html("Esto es un párrafo modificado");    
//3. Inserta otro párrafo al final del body con Jquery ---Añadimos una clase al párrafo tres para poder manipularlo posteriormente.
    $("#parrafo1").after("<p class='p3'>Otro párrafo</p>");
    //OTRA OPCION:  $("body").append("<p class='p3'>Otro párrafo</p>");
    
//4. Inserta un párrafo entre los dos párrafos anteriores y colócale un texto con Jquery
    $("#parrafo1").after("<p>Párrafo intermedio</p>");
    //$("p:last").before("<p class='p2'>Éste sería el hermano mediano</p>");
    
//5. Modifica el color de fondo del último párrafo del HTML con Jquery
    $(".p3").css("background-color","lightblue");
    //$("p:last").css("background-color","lightblue");
    
//6. Añade un id al último párrafo desde Jquery
    $(".p3").attr("id","azul");
        var valor=$(".p3").attr("id");
        console.log(valor);

//7. Quita el id al último párrafo desde Jquery
    $(".p3").removeAttr("id");
    var contenido=$(".p3").attr("id");
    console.log(contenido);
    

//8. Asigna la clase rojo al último párrafo
    $(".p3").addClass("rojo");

//9. Imprime por consola las clases que tiene asignadas el último párrafo
     var contenido=$(".p3").attr("class");
    console.log(contenido);
    
//10. Coloca un formulario de login en el HTML (HECHO)

//11. Asigna un id al campo nombre (mejor al email)
    $("#email").attr("id","input1");
//12. imprime por consola el valor del campo nombre
    var campoEmail=$("#input1").val();
    console.log(campoEmail);
    
    //ó MEJORRR!!!!! console.log($("#input1").val());


}
$("document").ready(init);