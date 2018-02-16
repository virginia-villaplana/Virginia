/*
1.- crea un html y asocia un fichero JS
2.- Descarga desde la URL: http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001 y colócalos en un variable llamada tiendas
3.- Presenta los resultados en la petición ajax por pantalla en un formato de listado, donde debe parecer exclusivamente el dato "agentfirstname" en cada elementos visual*/

var tiendas=[];
var criterio;

function limpiaResultados(){
    $("#resultados").html("");
} 

function peticionGet(){
    $.get("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001", function(datos){
        tiendas=datos;    
        console.log(tiendas);
        $.each(tiendas,function(i,dato){   
            $("#resultados").append("<li>"+dato.agentfirstname+"</li>");
           
     })
    })
    .done (function (){
        console.log("second success");
    })
    .fail(function(jqXHR,textStatus,errorThrown){
        console.log("error" + textStatus);
        console.log("incoming Text" + jqXHR.responseText);
        console.log("error " + errorThrown);
    })
    .always (function (){
        console.log("finished");
    })
};


/*5.- Incluye un campo de texto de formulario llamado id:"texto" y haz que cada vez que se pulse una tecla almacene el valor del campo en la variable criterio*/

function almacena(){
    criterio = $("#buscar").val().toLowerCase();
    console.log(criterio);
}

/*6.- Crea una función que sea capaz de filtrar los resultados de una búsqueda de tiendas mediante un texto. En los resultados que debe devolver la función sólo deberán estar aquellos que contengan dicho texto en el campo "agentfirstname"*/

function filtra (tiendas,criterio){
    var resultadosFiltrados=[];
    var pattern = new RegExp(criterio, "i");
    
    for(var item of tiendas){
        limpiaResultados();
        console.log(item.agentfirstname);
        if (pattern.test(item.agentfirstname!=undefined  && item.agentfirstname)){
            resultadosFiltrados.push(item.agentfirstname);
        }
    }
    return resultadosFiltrados;

   };


/*7.- Aplicar a que se presenten sólo los resultados que contengan el texto de la variable criterio, según vaya cambiándose (tecla a tecla)*/

function init(){
    console.log("Dom cargado");
    peticionGet();
   
     $("#buscar").keyup(function(){
         almacena();
         var filtrados=filtra(tiendas, criterio);
         console.log(filtrados);
        
      $("#resultados").html=("");
         for(var item of filtrados){
          $("#resultados").append("<li>"+item+"</li>");
       }
    });

   

}
$("document").ready(init);