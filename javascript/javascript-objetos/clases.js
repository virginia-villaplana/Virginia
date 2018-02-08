/*
1.- Crea un fichero HTML que incluya un fichero JS externo
2.- Crea una clase que permita disponer de las características de una moto, la clase de llamará Moto.
3.- Di que la clase Moto tiene una característica llamada matricula
4.- Crea un objeto de la clase Moto llamado miburra
5.- Cambia la propiedad matrícula de miburra por el valor "SA1234H"
6.- Imprime por pantalla el valor de la matrícula de miburra
7.- Coloca dentro de la clase Moto otra propiedad llamada km
8.- Haz que cada vez que se cree un objeto de la clase Moto ese objeto tenga 0 km
9.- Demuéstralo creando otro objeto de la clase Moto e imprimiendo este valor por pantalla
10.- Crea los getter y setter de km y matricula para la clase Moto
11.- Utilízalos desde el objeto miburra
12.- Haz que el constructor de la clase Moto pueda disponer de dos parámetros para las dos propiedades de Moto: km y matricula
13.- Construye otro objeto de clase moto, llamando a este nuevo constructor con dos parámetro y comprueba que ha rellenado correctamente las propiedades de ese nuevo objeto con los parámetros del constructor
*/

/*CÓDIGO EN ES5*/
var Moto= function (matricula="",km=0){
    this.matricula=matricula;
     this.setMatricula=function(matricula){
        this.matricula=matricula;
    };
    this.getMatricula=function(){
        return this.matricula;
    };
    this.km=km;
    this.setKm=function(km){
        this.km=km;
    };
    this.getKm=function(){
        return this.km;
    };
};
    miburra=new Moto("");
    miburra.matricula="SA1234H";
    console.log (miburra.matricula);
    
    otraMoto=new Moto("");
    console.log (otraMoto.km);

    miburra.setKm("27");
     console.log(miburra.getKm());
    miburra.setMatricula("AH4560P");
    miburra.getMatricula();
     console.log(miburra.matricula);

    terceraMoto=new Moto();
    console.log(terceraMoto);




/*
14.- Crea una clase llamada Animal, que tenga una propiedad llamada edad, que sea inicializada a 0
15.- Crea un objeto de la clase Aminal, llamado animalico
16.- Imprime por pantalla el objeto animalico y la propiedad edad del objeto
17.- Cambia la edad de animalico a 3
18.- Imprime por pantalla la edad de animalico
19.-Crea una nueva clase Gato que herede de Animal
20.- El constructor de Animal le podré pasar la edad para rellenar la edad del Animal (reescribir el constructor)
21.- Crea un objeto llamado animalico2 que se construya en base a la clase Animal, pasa como parámetro al constructor de Animal el número 2
22.- Modificar el constructor de la clase Gato para que admita un parámetro que sea la edad del animal, dentro del constructor de Gato llamar la constructor de Animal para pasar la edad que nos pasan como parámetro al contructor de Gato
23.- Crear un objeto de la clase Gato, llamado gatete, pasando como parámetro la edad 1
24.- Incluir en la clase Gato un nuevo parámetro llamado nombre inicializarlo a ""
25.- Modificar el constructor de Gato para incluir un nuevo parámetro que sea el nombre del Gato
26.- Crear un nuevo objeto llamado gatete2 de la clase Gato, pasándole como parámetro 0 a la edad y nombre "Nyska"
27.- Imprime el objeto por pantalla, así como su edad y su nombre
*/

var Animal= function(edad=0){
    this.edad=edad; 
};

    animalico=new Animal();
    console.log(animalico);

animalico.edad=3;
console.log(animalico.edad);

var Gato=function(edad,nombre){
    Animal.call (this,edad,nombre);
    this.nombre=nombre;
};

animalico2=new Animal(2);
console.log(animalico2.edad);

gatete=new Gato(1);

gatete2=new Gato (0,"Nyska");
console.log(gatete2);
console.log(gatete2.edad);
console.log(gatete2.nombre);

