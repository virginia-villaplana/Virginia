




var lista_articulos=[];
function peticionAjax(){
    $.get("http://www.mocky.io/v2/5a54ae822d00005f235b1cd2",function(  datos){
          lista_articulos=datos;
          console.log(lista_articulos);
          })
        .done(function(){
            console.log("second success");
        })
        .fail(function(){
            console.log("error");
        })
        .always(function(){
            console.log("finished");
        });
};


var texto_a_buscar;
function almacenaValor(){
    texto_a_buscar= $("#busqueda").val();
    console.log (this);
}


$("#busqueda").keypress(almacenaValor);


function filtrarArticulos(){
    for(var i in lista_articulos){
        if(texto_a_buscar==lista_articulos[i].titulo||lista_articulos[i].autor);
    }
};


function filtraResultados(){
    $("#sugerencias").append("<li>Se ha encontrado el libro:"+lista_articulos[item].titulo+",del autor:"+lista_articulos[item].autor+".")
}


var i=item;
var lista_articulos=[];