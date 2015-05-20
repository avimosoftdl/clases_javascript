//realizando una función que devuelva true o false
function equalNumbers(n1 ,n2){
    return n1 === n2;
}

console.log(equalNumbers(10, 10));

//agregando 1 a la edad de x persona - variables globales y como modificarlas
var firstName = "Adela";
var age = 65;
var person = {name: "Pedro", age: 60};

var myFunc = function(firstName){
    firstName = "Juan";
};
              
var agePlusOne = function(person){
    person.age = person.age + 1;             
};             

console.log(firstName);
myFunc(firstName);
console.log(firstName);
agePlusOne(person);
console.log(person.age);

//mas ejemplos
var firstName = "Adela";
var age = 65;
var person = {name: "Pedro", age: 60};
var myArr = [1, 2];

var myFunc = function(firstName){
    firstName = "Juan";
};
              
var agePlusOne = function(person){
    person.age = person.age + 1;             
};

var addAnElement = function(myArr){
    myArr.push(10);
};

console.log(firstName);
myFunc(firstName);
console.log(firstName);
agePlusOne(person);
console.log(person.age);
addAnElement(myArr);
console.log(myArr);

//....
function helloWorld(outPutter){
    outPutter("Hola Mundo!");
}

helloWorld(alert);

//....
function helloWorld(outPutter){
    outPutter("Hola Mundo!");
}

function consoleOutput(myString){
    console.log(myString);
};

helloWorld(alert);
helloWorld(consoleOutput);

//....


































