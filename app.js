var name = "Theodore";
const STATES = 50;
let sum = 5 + 4;      


if (charCodeAt(0) > 76) {
    alert("Back of the line!");
} else {
    alert("Next!");
}

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
        name: "Josh",
        age: 34
    },
    {
        name: "Primus",
        age: 34
    },
    {
        name: "Jason",
        age: 34
    },
    {
        name: "Eric",
        age: 32
    },
    {
        name: "Brian",
        age: 27
    }
];
for (let i=0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}
function getLength(string) {
    return string.length;
}
let length = getLength("Hello World");

if (length % 2 === 0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place!");
}