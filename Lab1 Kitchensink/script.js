//these are my global scope variables
let fullName = "Peter Sugg";
const NUM_OF_US_STATES = 50;
console.log(NUM_OF_US_STATES);
let sum = 5 + 4;
console.log(sum);
let favVeggies = ["Carrots", "Squash", "Potatoes"];
let nameAgeArray =[
    john = {
        name: "John Doe",
        age: 24
    },
    peter = {
        name: "Peter Sugg",
        age: 25
    },
    hayley = {
        name: "Hayley Sugg",
        age: 24
    },
    evan = {
        name: "Evan Williams",
        age: 19
    },
    bob = {
        name: "Bob Johnson",
        age: 16
    }
];
let lengthOfWord = getLength('Hello World');

// if statement
if (fullName.charCodeAt(0) === "L") {
    alert("Back of the line!");
} else {
    alert("Next!");
};

//these are my functions
function getLength(word) {
    return word.length;
};


function sayHello() {
    alert("Hello World!");
};

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    };
};

// these are my function calls
sayHello();
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

//this is a loop
for(x = 0;x != 3; x++) {
    console.log(favVeggies[x])
};


// this is an statement
if (lengthOfWord % 2 === 0) {
    console.log(lengthOfWord);
    console.log("The world is nice and even!");
} else {
    console.log(lenghtOfWord);
    console.log("The world is an odd place!");
};

// this is a loop
for(x = 0; x != 5; x++) {
    checkAge(nameAgeArray[x].name, nameAgeArray[x].age);
};