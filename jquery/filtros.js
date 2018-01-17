/*
1. Crea un fichero filtros.html e incluye Jquery -- HECHO
2. Incluye 3 listados desordenado de 10 elementos de texto cada uno -- HECHO
3. Haz que el tercer elemento del primer listado tenga el fondo amarillo
4. Haz que el cuarto elemento del primer listado tenga el fondo amarillo, pero seleccionando primero el tercer elemento
5. Haz que el primer ul tenga un id pero entrando desde el tercer elemento
6. Haz que en el segundo listado todos los elementos tengan un fondo rojo pero entrando desde el primer elemento
*/

function init () {
    console.log ("DOM Cargado JQuery");
    
    
   //3. 
    $("#listado1 li:nth-child(3)").css ("background-color","yellow");
      //sin identificativo, en lugar de ("#listado1....), podría ponerse ("ul:first....) 
        //Es más correcto usar eq(2) que nth-child(3) porque estamos en filtros. 
   //4. 
    $("#listado1 li").eq(2).next().css("background-color","yellow");
   //5.
     $("#listado1 li:nth-child(3)").parent().attr("id","nuevoID");
        //$("#ul:first li).eq(2).parent().attr("id","nuevoID");
    
   //6.
    $("#listado2 li:eq(1)").siblings().css("background-color","red");
    $("#listado2 li:eq(1)").css("background-color","red");
    //$("body ul:nth-child(2) --si tuviera un header, sería el child(3)-- li:first").parent().children().css("background-color","red"); 
        //--> Con parent va hacia arriba, y luego selecciona todos sus hijos. De lo contrario, no se seleccionaría a sí mismo si partimos de él y seleccionamos siblings.
    
    
}
$ ("document").ready(init);