let name = "Theodore";
const STATES = 50;
let sum = 5 + 4;      

function sayHello() {
    alert("Hello World!");
}
sayHello();                

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
let charles = {
    name: "Charles",
    age: 21
};
let abby = {
    name: "Abby",
    age: 27
};
let james = {
    name: "James",
    age: 18
};
let john = {
    name: "John",
    age: 17
};
checkAge(charles.name, charles.age);
checkAge(abby.name, abby.age);
checkAge(james.name, james.age);
checkAge(john.name, john.age);

let veggies = ["okra", "broccoli", "corn"];

for (let i=0; i < veggies.length; i++) {
    console.log(veggies[i]);
    }


let friends = [
    {
        name: "Fred",
        age: 34
    },
    {
        name: "Shane",
        age: 34
    },
    {
        name: "Cash",
        age: 17
    },
    {
        name: "Grant",
        age: 32
    },
    {
        name: "Slick",
        age: 19
    }
];
for (let i=0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}
//create an object named pet with two properties, name and breed
let pet = {
        name: "Doja",
        breed: "Pitbull"
}
//display a console log displaying your pets name and breed
console.log(pet.name);
console.log(pet.breed);
function getLength(string) {
    return string.length;
}
let length = getLength("Hello World");

if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}