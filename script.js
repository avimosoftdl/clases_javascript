//declaración de objetos
var person = {
    fullName: "Juan Pérez",
    age: 55,
    sayHi: function(){
        alert("Hi!!");
    }
};

person.sayHi();

//usando el prefijo this
var person = {
    fullName: "Juan Pérez",
    age: 55,
    sayHi: function(){
        alert("Hi I'm " + this.fullName);
    }
};

person.sayHi();

//agregando más datos al objeto
var person = {
    fullName: "Juan Pérez",
    age: 55,
    sayHi: function(){
        alert("Hi I'm ");
    },
    introduceYourself: function(){
    alert(this.fullName + " and my age is: " + this.age + " years old");
    }
};

person.sayHi();
person.introduceYourself();

//creando objetos a partir de otros
var Person = function(fullName, age){
    this.fullName = fullName;
    this.age = age;
}

var person1 = new Person("Juan Ramírez", 15);
console.log(person1);

var person2 = new Person("Adrián Avilés", 26);
console.log(person2);

var person3 = new Person("Aurora Moreno", 25);
console.log(person3);

//el mismo ejemplo agregando la función sayHi
var Person = function(fullName, age){
    this.fullName = fullName;
    this.age = age;
    this.sayHi = function(){
        alert("Hi!! My names is: " + this.fullName + " and my age is: " + this.age + " years old.");
    }
}

var person1 = new Person("Juan Ramírez", 15);
console.log(person1);
person1.sayHi();

var person2 = new Person("Adrián Avilés", 26);
console.log(person2);
person2.sayHi();

var person3 = new Person("Aurora Moreno", 25);
console.log(person3);

//


























