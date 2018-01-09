//Ejercicio 1: array de meses
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
for( i in meses){
    console.log(meses[i]);
}
    

//Ejercicio 2
var valores = [true, 5, false, "hola", "adios", 2];
console.log(valores[1]);
console.log(valores[5]);
console.log(valores[3]);
console.log(valores[4]);
//suma de los números
var sum=valores[1]+valores[5];
console.log(sum);
//-versión corta de la suma
console.log(valores[1]+valores[5]);

//comparación
if (valores [1]>valores [5])
    console.log("5 es mayor que 2");

//Ejercicio 3
var diez= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
indice=0;
while (indice<10){
    console.log(diez[indice]);
    indice++;
}

var indice=0;
do{
    console.log(diez[indice]);
    indice++;
}while (indice<10);

for (var indice=0;indice<10;indice++){
    console.log(diez[indice]);
}

for (indice in diez){
    console.log(diez[indice]);
}

//otro camino más rápido: él solo crea el array

var veinte=[];
for(var i=0 ; i<20;i++){
    veinte.push(1);
}
console.log(veinte);


//3.1

var veinte= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "once", "doce", "trece", "catorce", "quince", "dieciseis", "diecisiete", "dieciocho", "diecinueve", "veinte"]
indice=0;
while (indice<20){
    console.log(veinte[indice]);
    indice++;
}

var indice=0;
do{
    console.log(veinte[indice]);
    indice++;
}while (indice<20);

for (var indice=0;indice<20;indice++){
    console.log(veinte[indice]);
}

for (indice in veinte){
    console.log(veinte[indice]);
}

//3.2

var num_errores=1;
switch (num_errores){
    case (1):
        console.log ("No lo has hecho mal");
        break;
    case (2):
        console.log ("Puede pasar...");
        break;
    case ("black"):
        console.log ("Diez consejeros de Bankia");
        break;
    default:
        console.log ("¡¡SUSPENDIDO!!")
} 

//3.3

for (var indice=0;indice<10;indice+=2){
    console.log(diez[indice]);
}

//EJERCICIOS JAVASCRIPT 2

//*1 Crear array de 200 posiciones
var array200=[]
for (var i=0; i<200; i++){
    array200.push (1);
}
//*2 Imprimirlos por pantalla
console.log (array200);

//*3 Cambiar 4, 7 y 18 - String
array200[4]= "Hola";
console.log (array200[4]);
array200[7]= "Amigo";
console.log (array200[7]);
array200[18]= "Adiós";
console.log (array200[18]);

//*4 Valor booleano en 9, 34 y 45
array200[9]=true;
console.log (array200[9]);
array200[34]=false;
console.log (array200[34]);
array200[45]=true;
console.log (array200[45]);

//*5 Array de 30
var array30=[]
for (var i=0; i<30; i++){
    array30.push (1);
}

//*6 Todos los bucles

//--WHILE
i=0;
while (i<30){
    console.log(array30[i]);
    i++;
}

//--DO WHILE
var i=0;
do{
    console.log(array30[i]);
    i++;
}while (i<30);

//--FOR
for (var i=0;i<30;i++){
    console.log(array30[i]);
}

//--FOR IN
for (i in array30){
    console.log(array30[i]);
}

//*7 variable booleana "tengoCarnet"
var tengoCarnet=false;

//*8 Condicional
if(tengoCarnet){
    console.log ("¡Puedes conducir!");
//extra
}else if (!tengoCarnet){
   console.log ("Pues te vas en bici");
}


//*9 variable nota
var nota=9;
//*10 codificación de la nota
if (nota < 5){
    console.log ("Suspenso");
}else if (nota>=5 && nota<7){
    console.log ("Aprobado");
}else if (nota>=7 && nota<9){
    console.log ("Notable");
}else if (nota>=9 && nota<=10){
    console.log ("Sobresaliente");
}else{
    console.log ("Nota no válida")
}

