/* metodo mas usado*/
document.getElementById("demo").innerHTML = "Hello javaScript";
document.getElementById("demo").style.fontSize = "35px";

/* Saalidas de Datos*/
window.alert(5+2);
console.log(6+2);

/*Declaracion */
let a,b,c;
a=5;
b=6;
c = a + b;
window.alert(c);
document.getElementById("demo").innerHTML = c;


/* Variables*/
let p,q,r;
p=5;
q=7;
const m = 8;
r = p + q + m;
document.getElementById("demo1").innerHTML = r;


/* Tipos de Datos*/

let num = 24;//numero entero
let name = "Yenifer Lopez";//cadena
let km = 14.5;//decimal
let isColonbiano = true; // Valor Booleano 
let obj = {firstname:"yenifer",lastname:"lopez"};//Objeto

let y = 17 + "POO";
let unir = "17" + "POO";
Window.alert(y);
Window.alert(unir);

/*Defimcion de una funcion*/

function myfuction(){
    document.getElementById("demo2").innerHTML = "New paragraph";
}