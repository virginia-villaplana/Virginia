/*
1.- Crea un html con un archivo externo JS asociado para resolver estos ejercicios. HECHO
2.- Crea un objeto Javascript que se llame cliente, dentro del objeto coloca las siguientes propiedades: nombre del cliente, direccion_fisica, email ,tlf y persona_contacto. Al crear el objeto colócale valores a cada propiedad. HECHO
3.- Crea otro objeto con el nombre segundoCliente con las mismas propiedades pero con distintos valores. HECHO
4.- Imprime por pantalla el nombre del primer objeto HECHO
5.- Imprime por pantalla el email del segundo objeto HECHO
6.- Cambia el nombre del primero objeto por el valor "Maderas Peralta" HECHO
7.- Imprime el valor del nombre del primer objeto HECHO
8.- Cambia el email del segundo objeto por el valor "info@micasuci.com" HECHO
9.- Imprime el email por pantalla del segundo objeto HECHO
10.- Añade al primer objeto un método (función) llamado toString, dicho método no recibe parámetros de entrada y devuelve una cadena de caracteres con los datos de las propiedades de ese objeto, indicando el nombre del objeto, el nombre de cada propiedad y el valor asociado a cada propiedad HECHO
11.- Imprime por pantalla el valor devuelto por el método toString del primer objeto HECHO
12.- Añade un método toString similar en el segundo objeto HECHO
13.- Imprime por pantalla el valor devuelvo por el método toString del segundo objeto HECHO
14.- Añade un método setter y otro getter al primer objeto por cada propiedad definida en él, sin contar los métodos. HECHO
15.- Utiliza todos los métodos definidos en el primer objeto dentro de tu código JS HECHO
16.- Introduce una nueva propiedad en el objeto cliente (1º) llamada facturacion, su valor inicial será un array de 2 posiciones con dos elementos de tipo numérico 4 y 25
HECHO
17.- Imprime por pantalla el valor de la primera posición del array almacenado en la propiedad facturacion del primer objeto HECHO
18.- Haz un método dentro del primer objeto llamado addFactura, al que se le pase como parámetro un número, que almacene ese valor como una nueva posición al final del array de facturacion del primer objeto HECHO
19.- Al imprimir por pantalla el número de elementos de array facturacion debería indicar que tiene 3 elementos HECHO
20.- Crea un nuevo método en el primer objeto que sea capaz de devolver el total de facturación de ese objeto, total de los valores almacenados en el array facturacion del primero objeto.El método se llamara totalFacturacion "HECHO" 
21.- Imprime por pantalla el valor devuelto por la llamada al método totalFactuacion del primer objeto "HECHO"
22.- Coloca en el primer objeto una nueva propiedad llamada direccionFiscal, el valor de esta propiedad será un objeto, las propiedades de este nuevo objeto serán, calle, ciudad, piso, puerta y CP. HECHO
23.- Imprime por pantalla el valor de la ciudad de la dirección fiscal del primer objeto - HECHO
24.- Cambia el CP de la dirección fiscal del primer objeto e imprime por pantalla dicho valor. - HECHO
*/

/*function init (){
    console.log ("Dom cargado");
    }
document.addEventListener("DOMContentLoaded", init);*/

    
    var cliente={
        nombre:"Samuel Fernández",
        direccion_fisica:"Paseo del Carraperal, 2",
        email:"Samuelf@gmail.com",
        tlf:"685432123",
        persona_contacto:"Pedro Sánchez",
        facturacion:[4,25],
        direccionFiscal:{
            calle: "Avenida de Salamanca",
            ciudad: "Leganés",
            piso: "2º",
            puerta: "B",
            CP:"28911",
        },
        
        toString:function(){
             return "cliente[nombre:"+this.nombre+",direccion fisica:"+this.direccion_fisica+",email:"+this.email+",tlf:"+this.tlf+",persona contacto:"+this.persona_contacto+"]";
            },
        setNombre:function(nombre){
        this.nombre=nombre;
        },
        setDireccion_fisica:function(direccion){
        this.direccion_fisica=direccion;
        },
        setEmail:function(email){
        this.email=email;
        },
        setTlf:function(tlf){
        this.tlf=tlf;
        },
        setPersona_contacto:function(contacto){
        this.persona_contacto=contacto;
        },
        setDireccionFiscal:function(fiscal){
        this.direccionFiscal=fiscal;
        },
        getNombre:function(){
        return this.nombre;
        },        
        getDireccion_fisica:function(){
        return this.direccion_fisica;
        },
        getEmail:function(){
        return this.email;
        },
        getTlf:function(){
        return this.tlf;
        },
        getPersona_contacto:function(){
        return this.persona_contacto;
        },
        
        addFactura:function(x){
            this.facturacion.push(x);
        },
        
        totalFacturacion:function(){
            var acum=0;
            for(var i in this.facturacion){
                var acum= acum + this.facturacion[i];
            };   
            return acum;
        },
    };
    
     var segundoCliente={
        nombre:"Elisa Sanz",
        direccion_fisica:"Calle Paz, 8",
        email:"Elisalg@gmail.com",
        tlf:"620967855",
        persona_contacto:"Elisa Sanz",
        toString:function(){
             return "cliente[nombre:"+this.nombre+",direccion fisica:"+this.direccion_fisica+",email:"+this.email+",tlf:"+this.tlf+",persona de contacto:"+this.persona_contacto+"]";
            }, 
    };
     
     console.log(cliente.nombre);
     console.log(segundoCliente.email);
    
    cliente.nombre="Maderas Peralta";
     console.log(cliente.nombre);
    segundoCliente.email="info@micasuci.com";
    console.log(segundoCliente.email);
    console.log(cliente.toString());
    console.log(segundoCliente.toString());
    console.log(cliente.nombre);
     

    cliente.setNombre("Pepe Pérez");
    console.log(cliente.nombre);
    cliente.setDireccion_fisica("Plaza del Sol, 2");
    console.log(cliente.direccion_fisica);
    cliente.setEmail("abc@gmail.com");
    console.log(cliente.email);
    cliente.setTlf("657839748");
    console.log(cliente.tlf);
    cliente.setPersona_contacto("María Jiménez");
    console.log(cliente.persona_contacto);
    cliente.getNombre();
    console.log(cliente.nombre);
    cliente.getDireccion_fisica();
    console.log(cliente.direccion_fisica);
    cliente.getEmail();
    console.log(cliente.email);
    cliente.getTlf();
    console.log(cliente.tlf);
    cliente.getPersona_contacto();
    console.log(cliente.persona_contacto);

    console.log(cliente.facturacion[0]);
    
    cliente.addFactura(90);
    console.log(cliente.facturacion);
    
   
    console.log(cliente.totalFacturacion());
    
    console.log(cliente.direccionFiscal.ciudad);

    cliente.setDireccionFiscal("29072"); /*MEJOR MODIFICARLO CON . porque se hace más rápido*/ 
    console.log(cliente.direccionFiscal);

    
    
    
