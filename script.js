//manejando un poco los arrays con JavaScript

var myArray = ["Hola", "cómo estás?", 100, 4, true, "adiós"];

alert("El valor del índice 0 es: " + myArray[0] + " y el valor del índice 1 es: " + myArray[1] + " y el valor del índice 2 es: " + myArray[2]);

alert("La longitud del array myArray es: " + myArray.length);

var index = myArray.indexOf(100);

alert("El número de índice del valor 100 es: " + index);

//recorriendo un arreglo con for
var names = ["Adrián", "Armando", "Aurora"];
var counter = 0;

for(var i = 0; i < names.length; i++){
    console.log(names[i]);
    }

//recorriendo un arreglo con while
var names = ["Adrián", "Armando", "Aurora"];
var counter = 0;

while (counter < names.length){
    console.log(names[counter]);
    counter++;
}

//utilizando otros accessors
var firstNames = ["Adrián", "Armando", "Aurora"];
var lastNames = ["Avilés", "Arreguín", "Moreno"];

firstNames.shift();
console.log(firstNames);

firstNames.unshift("Gina");
console.log(firstNames);

firstNames.sort();
console.log(firstNames);

console.log(firstNames.concat(lastNames));

console.log(firstNames.join(", "));

//ejemplo utilizando .map
var firstNames = ["Adrián", "Armando", "Aurora"];
var lastNames = ["Avilés", "Arreguín", "Moreno"];

var fullName = firstNames.map(function(firstNames){ return firstNames + " Avilés" });

console.log(fullName);

//ejemplo usando .filter
var ages = [10, 15, 21, 10, 18, 45, 54];
var grownUps = ages.filter(function(age){
    return age >= 18;
});

console.log(grownUps);

//ejemplo de anidación con .filter y . map
var ages = [10, 15, 21, 10, 18, 45, 54];
var grownUps = ages.filter(function(age){
    return age >= 18;
}).map(function(age){
    return age + 1;
})

console.log(grownUps);

//usando hash (arreglos pero sus índices tienen nombre)
var person = [{name: "Adrián", age: 26, petName: ["Bruno", "Maruca"]} , 
              {name: "Aurora", age: 25, petName: ["Romi", "Canela"]} , 
              {name: "Francis", age: 31, petName: []}];

var noPets = person.filter(function(person){
    return person.petName.length == 0;
}).map(function(person){
    return person.name;
})

console.log(noPets);

//el mismo ejemplo sumando las edades de las personas que no tienen mascotas
var person = [{name: "Adrián", age: 26, petName: ["Bruno", "Maruca"]} , 
              {name: "Aurora", age: 25, petName: ["Romi", "Canela"]} , 
              {name: "Francis", age: 31, petName: []}];

var noPets = person.filter(function(person){
    return person.petName.length === 0;
}).map(function(person){
    return person.age;
}).reduce(function(prevValue, currValue){
    return prevValue.age + currValue.age;
});

console.log(noPets);

//agregando dificultad al programa
var person = [{name: "Adrián", age: 26, petName: ["Bruno", "Maruca"]} , 
              {name: "Aurora", age: 25, petName: ["Romi", "Canela"]} , 
              {name: "Francis", age: 31, petName: []}];

function getNoPetPeople(people){
    return person.filter(function(person){
        return person.petName.length === 0;
    });
}

function getNoPeopleAgeSum(people){
    return getNoPetPeople(person).map(function(person){
        return person.age;
    }).reduce(function(prev, curr){
        return prev + curr;
    });
}

var noPetPerson = getNoPetPeople(person);
console.log(noPetPerson);
console.log(getNoPeopleAgeSum(person));

//

































