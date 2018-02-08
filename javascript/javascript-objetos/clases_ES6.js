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

class Moto{
    constructor(matricula="8504MN",km=0){
        this.matricula=matricula;
        this.km=km;
    }
    getMatricula(){
        return this.matricula;
    }
    setMatricula(matricula){
        this.matricula=matricula;
    }
    setKm(km){
        this.km=km;
    }
    getKm(){
        return this.km;
    }
}

miburra=new Moto();

miburra.matricula="SA1234H";
console.log (miburra.matricula);

otraMoto=new Moto();
console.log (otraMoto.km);

miburra.setKm("27");
     console.log(miburra.getKm());
miburra.setMatricula("AH4560P");
     console.log(miburra.getMatricula());
terceraMoto=new Moto();
    console.log(terceraMoto);

/*------------------------------------------*/
class Animal{
    constructor(edad=0){
        this.edad=edad; 
    }
}

animalico=new Animal();
    console.log(animalico);
animalico.edad=3;
    console.log(animalico.edad);

class Gato extends Animal{
    constructor(edad=0, nombre=""){
        super(edad);
        this.nombre=nombre;
    }
}

animalico2=new Animal(2);
    console.log(animalico2.edad);

gatete=new Gato(1);

gatete2=new Gato (0,"Nyska");
console.log(gatete2);
console.log(gatete2.edad);
console.log(gatete2.nombre);


/*
1.- Crea un fichero HTML relacionado con un fichero JS
2.- Define una clase llamada Alumno que tenga las propiedades nombre, dni, tlf, email
3.- Crea un objeto de la clase Alumno
4.- Añade los getter y setter a las clase Alumno
5.- Haz que el constructor de la clase Alumno permita meter los 4 valores a las 4 propiedades del objeto, haz que estos parámetros sean opcionales
6.- Crea otro objeto de la clase Alumno pero utilizando el nuevo constructor de la clase, pasando los 4 parámetros
7.- Crea la clase Nota que tenga dos atributos: valor, asignatura
8.- Crea un objeto de la clase Nota
9.- Mete los getter y los setter de la clase Nota
10.- Modifica el constructor de la clase Nota para que admita 2 parámetros, uno para cada propiedad. Los parámetros deben poder ser opcionales. 
11.- Crea un objeto de la clase Nota pero pasando los dos parámetros en su creación
12.- Mete un nuevo atributo en la clase alumno llamado notas. Este atributo tiene que ser del tipo Array. En el constructor inicialízalo por defecto a []
13.- en el constructor añade un parámetro más que será el array de notas
14.- Crea un getter y un setter para notas
15.- Crea un método en Alumno que permita introducir una nueva nota (al final del array de notas)
16.- Crea un nuevo objeto Nota e introduce este nuevo objeto en un objeto de tipo Alumno mediante el método definido en el anterior ejercicio
17.- Crea un método que te haga la media de las notas de curso (todas las notas del array de notas)
18.- Haz un programa que sea capaz de decirte si el alumno ha aprobado o no el curso.
*/

class Nota{
    constructor(valor=0,asignatura=""){
        this.valor=valor;
        this.asignatura=asignatura;
    }
      setValor(valor){
        this.valor=valor;
      }
      getValor(){
        return this.valor;
      }
    
      setAsignatura(asignatura){
      this.asignatura = asignatura;
      }
      getAsignatura(){
      return this.asignatura;
      }
}

class Alumno{
    constructor(nombre="",dni="",tlf="",email="",notas=[]){
        this.nombre=nombre;
        this.dni=dni;
        this.tlf=tlf;
        this.email=email;
        this.notas=notas;
        this.notaMedia=0; /*HAY QUE METER AQUÍ LA PROPIEDAD NOTAMEDIA para que la contabilice luego!!!*/
    }
    setNombre(nombre){
     this.nombre = nombre;  
    }
    getNombre(){
     return this.nombre;
    }
    
    setDni(dni){
     this.dni = dni;
    }
    
    getDni(){
     return this.dni;
    }
    
    setTlf(tlf){
    this.tlf=tlf;
    }
    getTlf(){
    return this.tlf;
    }
    
    setEmail(email){
    this.email=email;
    }
    getEmail(){
    return this.email;
    }
    
    setNotas(notas){
    this.notas=notas;
    }
    getNotas(){
    return this.notas;
    }
    

    nuevaNota(valor){
        this.notas.push(valor);
    }
    
    calculoMedia(){
        var suma=0;
        for(var i in this.notas){
            var suma = suma + this.notas[i].valor;
        }
        this.notaMedia = suma/this.notas.length;
        return suma/this.notas.length;
      }

    
    cursoAprobado(){
        if (this.notaMedia < 5){
        console.log ("Curso no superado");
        }else if (this.notaMedia>=5){
        console.log ("Curso aprobado");
        }else{
        console.log ("Nota no válida")
       }
    }
 }

let alumno1=new Alumno();

let alumno2=new Alumno("Pepe","X15215271","91675345",'pepe@pepe.com');
 console.log(alumno2);

let nota1= new Nota(6,"Matemáticas");
 alumno2.nuevaNota(nota1);
 console.log(alumno2.notas);

let nota2= new Nota(5.5, "Lengua");
 alumno2.nuevaNota(nota2);

alumno2.calculoMedia();
console.log(alumno2.notaMedia);
console.log(alumno2.cursoAprobado());
