function ocultar(event){
    event.preventDefault();
    var texto=$(this).prev("p")
    texto.toggleClass("oculta");
        if (texto.hasClass("oculta")){
            $(this).text('Mostrar contenidos')
        } else {
            $(this).html('Ocultar contenidos')
        }
  }

  


function init (){
    console.log ("DOM Cargado JQuery");
    
    $("a").click(ocultar);
      
}

$("document").ready(init);
