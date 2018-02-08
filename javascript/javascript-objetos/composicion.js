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

var Nota=function(valor=0,asignatura=""){
    this.valor=valor;
    this.asignatura=asignatura;
    
      this.setValor=function(valor){
      this.valor=valor;
      };
      this.getValor=function(){
      return this.valor;
      };
    
      this.setAsignatura=function(asignatura){
      this.asignatura = asignatura;
      };
      this.getAsignatura=function(){
      return this.asignatura;
      };
};

var Alumno=function(nombre="",dni="",tlf="",email="",notas=[]){
    this.nombre=nombre;
    this.dni=dni;
    this.tlf=tlf;
    this.email=email;
    this.notas=notas;
    this.notaMedia=0 /*HAY QUE METER AQUÍ LA PROPIEDAD NOTAMEDIA para que la contabilice luego!!!*/
    this.setNombre=function(nombre){
     this.nombre = nombre;
    };
    this.getNombre=function(){
     return this.nombre;
    };
    
     this.setDni=function(dni){
     this.dni = dni;
    };
     this.getDni=function(){
     return this.dni;
    };
    
    this.setTlf=function(tlf){
    this.tlf=tlf;
    };
    this.getTlf=function(){
    return this.tlf;
    };
    
    this.setEmail=function(email){
    this.email=email;
    };
    this.getEmail=function(){
    return this.email;
    };
    
    this.setNotas=function(notas){
    this.notas=notas;
    };
    this.getNotas=function(){
    return this.notas;
    };
    
    
    this.nuevaNota=function(valor){
        this.notas.push(valor);
    };
    
    this.calculoMedia=function(){
        var suma=0;
        for(var i in this.notas){
            var suma = suma + this.notas[i].valor;
        };
        this.notaMedia = suma/this.notas.length;
        return suma/this.notas.length;
        
    };
    
    
    this.cursoAprobado=function(){
        if (this.notaMedia < 5){
        console.log ("Curso no superado");
        }else if (this.notaMedia>=5){
        console.log ("Curso aprobado");
        }else{
        console.log ("Nota no válida")
       };
   };
};

var alumno1=new Alumno();

var alumno2=new Alumno("Pepe","X15215271","91675345",'pepe@pepe.com');
console.log(alumno2);

var nota1= new Nota(6,"Matemáticas");
alumno2.nuevaNota(nota1);
console.log(alumno2.notas);

var nota2= new Nota(5.5, "Lengua");
alumno2.nuevaNota(nota2);


alumno2.calculoMedia();
console.log(alumno2.notaMedia);
console.log(alumno2.cursoAprobado());




