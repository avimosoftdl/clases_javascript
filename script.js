//tipos de variables

var isVerified = true;
console.log(isVerified);

var address = "Av. Juárez No. 101 L 317";
console.log(address);

var age = 26;
console.log(age);

var price = 10.60;
console.log(price);

var name;
console.log(name);

var nullValue = null;
console.log(nullValue);

// trabajo con operadores lógicos

// definimos las variables para trabajar con los operadores lógicos
var speed = 10.50;
var age = 10;
//comenzamos a trabajar con los operadores lógicos
console.log(typeof 1 == typeof 1);
// operador AND &&
console.log(speed > 11 && age < 11);
// operador OR ||
console.log(speed > 9 || age < 12);
// operador igualdad ==
console.log(speed == age);
// operador igualdad de valor y tipo ===
console.log(speed === age);
// operador diferente de en valor y tipo !==
console.log(speed !== age);
// operador para invertir valores
console.log(!speed);
console.log(!(age > 18)); //el resultado debe de ser true

// comenzamos a trabajar con operadores aritméticos
var n1 = 20;
var n2 = 10;
// operador suma +
console.log(n1 + n2);
// operador resta -
console.log(n1 - n2);
// operador multiplicación *
console.log(n1 * n2);
// operador división /
console.log(n1 / n2);
//mezclando todas las operaciones
console.log(n1 * (n2 - n1) /  n2); //precedencia de los signos es importante

// definir 4 variables: boolean, number, string y null
//con typeof mostrar el tipo de variable
//ejecutar typeof a una variable no definida
//declaramos las variables
var age = 26;
var value = true;
var email = "adrian@dwexpress.mx";
var nullValue = null;
var undefined;
//pedimos el tipo de valor para cada tipo de variable
console.log(typeof age);
console.log(typeof value);
console.log(typeof email);
console.log(typeof nullValue);
console.log(typeof undefined);

//manejo de conversiones implícitas
console.log(2 + "3");
//cambiando el string "3" a número entero
console.log(parseInt("3") + 2);
console.log(5 / 4);

//manejo de condicionales if, else, else if
var age = 18;
var gender = "female";
var isMom = false;
var legalAgeFemale = (age >= 18 && gender = 'female');

if (isMom){
    alert("Entra gratis por 10 de Mayo");
} else if (legalAgeFemale) {
    alert("Puedes entrar gratis");
} else {
    alert("Págale chavo");
}

//manejo de condicionales if, else, else if
var age = prompt("your age?");//prompt nos permite leer datos del usuario
var gender = "female";
var isMom = false;
var legalAgeFemale = (age >= 18 && gender == 'female');

if (isMom){
    alert("Entra gratis por 10 de Mayo");
} else if (legalAgeFemale) {
    alert("Puedes entrar gratis");
} else {
    alert("Págale chavo");
}

