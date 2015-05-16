//adivinando el password usando do while
var password = "password";
var userPassword ="";

do {
    userPassword = prompt("Dime el password");
} while(userPassword != password);

alert("Estás logueado");

//adivinando el password usando while
var password = "password";
var userPassword ="";

while(userPassword != password){
    userPassword = prompt("Adivina el password");
};

alert("Bienvenido!");

//uso de "for"
//for (var i=0; i<10; i++){sentence}
//preguntando el password, pero con un límite de 10 veces fallidas
var password = "password";
var userPassword = "";

for (var i = 0; i < 10; i++){
    userPassword = prompt("Intento número " + (i+1) + " Cuál es el password?");
    if (userPassword == password){
    alert("Estás logueado");
        break
    } else{
    alert("Inténtalo de nuevo");
    }
}

//ingresar un número, y después sumar todos los números hasta el número asignado
var upTo = prompt("Hasta qué número quieres sumar?");
var sum = 0;

for (var i = 1; i <= upTo; i++){
     sum = sum + i;
     }

alert(sum);

//










