//*EJERCICIO 1 - Crea una función llamada calculaTotallinea a la cual se le pasen dos parámetros llamados importe y unidades, deberá devolver el total de multiplicar ambas cantidades.

function calculaTotalLinea (importe, unidades){
    return importe*unidades;
}

//*EJERCICIO 2 - Llama a la función calculaTotallínea pasándole como parámetros 2 y 5 y almacena el resultado en una variable llamada linea1.

var linea1= calculaTotalLinea(2,5);
console.log(linea1);

//*EJERCICIO 3.	Llama a la función calculaTotallínea pasándole como parámetros 4 y 7 y almacena el resultado en una variable llamada linea2.

var linea2= calculaTotalLinea(4,7);
console.log(linea2);

//*EJERCICIO 4.	Declara una variable de tipo array llamada líneas

var lineas=[];
console.log(lineas);

//*EJERCICIO 5.	Mete las dos variables línea1 y linea2 en el array líneas

lineas [0]=linea1;
lineas.push(linea2);
//*otra forma lineas=[linea1,linea2];

//*EJERCICIO 6- Crea una función llamada calculaBaseImponible que sea capaz de sumar todos los números almacenados en un array y devolver el resultado
function calculaBaseImponible (lineas){
    var acum= 0;
    //recorrer el array e ir sumando los números de manera acumulativa. Sería mejor usar un For In, porque está específicamente diseñado àra recorrer arrays. Sería }for (i in lineas){.
    for (var i=0; i< lineas.length; i++){
        console.log("posicion: "+lineas[i])
        //hay que sumar los diferentes valores de i en cada vuelta
        acum+=lineas[i];
        console.log("Suma: "+acum);
    }
    return acum;
}

//*EJERCICIO 7 -Llama a la función calculaBaseImponible pasándole como parámetro el array lineas, almacena el resultado en una variable llamada baseImponible
var baseImponible= calculaBaseImponible(lineas);
console.log(baseImponible);

//*EJERCICIO 8 -Crea una función calculaIVA que calcule el IVA de la factura, para ello le meteremos dos parámetros: el primero será la base imponible y el segundo el % de IVA a calcular, devolverá el resultado de la fórmula: r=b*X%IVA donde X es el segundo parámetro, b es la base imponible y r es el resultado de la cuenta. Ejemplo si la base imponible es 100 y el IVA es del 21% el resultado deberá ser 21

function calculaIVA (base, iva){
    return base*iva/100;
}

//*EJERCICIO 9 -Llama a la función calculaIVA pasándole como parámetro la variable baseImponible y 21 como % de IVA, almacena el resultado en una variable llamada totalFactura

var totalFacturaIVA= calculaIVA (baseImponible,21);
console.log("TotalFacturaIVA: "+totalFacturaIVA);

//*EJERCICIO 10 -Crea una función calculaIRPF que calcule la retención de IRPF, se le pasarán dos parámetros, el primero es la baseImponible y el segundo es el % de retención, devolverá el resultado de la siguiente fórmula: -r=b*X%IRFP r es el resultado final, X es el % de IRPF y b es la base imponible. Por ejemplo si la base imponible es 100 y el % de IRPF es el 15 el resultado será -15

function calculaIRPF (base,ret){
    return -1*(base*ret/100);
}

//*EJERCICIO 11 -Llama a la función calculaIRPF pasándole como parámetros la variable baseImponible y 15 como % de IRPF almacena el valor en la variable retencion. Para calcular el precio total de la factura a pagar es necesario realizar la siguiente cuenta: totalFactura=baseimponible+IVA-IRPF. Ejemplo baseImponible  100, IVA 21% e IRPF 15% = 100+21-15=106. Para ello crearemos una función llamada calculaTotalFactura a la que se le pasan los tres parámetros, base imponible, la cantidad de IVA y la cantidad de retención. Devolverá el valor del total a pagar de la factura

var retencion=calculaIRPF (baseImponible, 15);
console.log("TotalRetencionIRPF: "+retencion);

function calculaTotalFactura (base, iva, ret){
    return base+iva+ret;
}

//*EJERCICIO 12 - Llama a la función calculaTotalFactura pasándole las variables baseImponible, totalIVA y totalIRFP, almacena el valor que devuelve la función en una variable llamada totalARecibir

/* 

var totalIVA= totalFactura;
var totalIRPF=retencion;
*/
    
var totalARecibir= calculaTotalFactura(baseImponible, totalFacturaIVA, retencion);
console.log("Total a recibir: "+totalARecibir);





