function init () {
    console.log ("DOM Cargado JQuery");
    $ ("p").css ("background-color","yellow");
    $ (".parrafo1").css ("background-color","pink");
    $ ("#p2").css("background-color","lightblue");
    $ ("a[href='http://www.google.es']").css ("background-color","lightgreen");
    $ ("ul li:first").css("background-color","red");
    $ ("#listado li:last").css("background-color","cyan");
    $ ("#listado li:nth-last-child(5)").css("background-color","yellow");
    $ ("input").css ("background-color","lightblue");
    
    
}
$ ("document").ready(init);