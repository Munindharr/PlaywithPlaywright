var firstName = "John";
var lastName = "Doe";
const age = 30;

console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Age: " + age);

//const age = 31; // This will cause an error because 'age' is a constant and cannot be reassigned.

//Concatenation example
var fullName = firstName + " " + lastName;
console.log("Full Name: " + fullName);  

//concatenation using template literals
var fullNameTemplate = `${firstName} ${lastName}`;
console.log(`Full Name using template literals: ${fullNameTemplate}`);

// Objects
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["reading", "traveling", "swimming"]
};
console.log("Details of Person: " + person.firstName + " " + person.lastName + ", Age: " + person.age);

// Arrays
var fruits = ["Apple", "Banana", "Cherry"];
console.log("Fruits: " + fruits[0] + ", " + fruits[1] + ", " + fruits[2]);
console.log("Fruits: " + fruits.join(", "));

//relational operators
var x = 10;
var y = 20; 
console.log("Is x equal to y? " + (x == y)); // false
console.log("Is x not equal to y? " + (x != y));
console.log("Is x greater than y? " + (x > y));
console.log("Is x less than y? " + (x < y));    
console.log("Is x greater than or equal to y? " + (x >= y));
console.log("Is x less than or equal to y? " + (x <= y));

//Logical operators
var a = true;
var b = false;      
console.log("a AND b: " + (a && b)); // false
console.log("a OR b: " + (a || b)); // true
console.log("NOT a: " + (!a)); // false 

//conditional statements
if (age < 18) {
    console.log("You are a minor.");    
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
}   
else {
    console.log("You are a senior citizen.");
}

//while loop example
console.log("While loop example:");
var j = 0;      
while (j < 5) {
    console.log("Iteration: " + j);
    j++;
}

//loops - simple for loop example
console.log("For loop example:");   
for (var i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

//for loop with array example
console.log("For loop with array example:");
var colors = ["Red", "Green", "Blue"];  
for (color of colors) {
    console.log("Color: " + color);
}   

//for loop with break and continue example
console.log("For loop with break and continue example:");   
for (var k = 0; k < 10; k++) {
    if (k === 5) {
        console.log("Breaking the loop at k = " + k);
        break; // Exit the loop when k is 5
    }
    if (k % 2 === 0) {
        console.log("Skipping even number: " + k);
        continue; // Skip the rest of the loop for even numbers
    }   
    console.log("Current value of k: " + k);
}

//ES6 syntax of for each loop
console.log("ES6 forEach loop example:");
var numbers = [1, 2, 3, 4, 5];  
numbers.forEach((num) => {
    console.log("Number: " + num);
});

//declative function example
function greet(name) {
    return "Hello, " + name + "!";
}
greet("Alice"); // Call the function and log the result
console.log(greet("Brian"));

//ES6 arrow function example
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};
console.log(greetArrow("Charlie"));

//functin with single parameter
function square(num) {
    return num * num;
}   
console.log(square(5));

//function with multiple parameters
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));