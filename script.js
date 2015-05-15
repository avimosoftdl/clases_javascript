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