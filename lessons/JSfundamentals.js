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
// demo for in
const employee = {
    name: "Munindhar",
    age: 35,
    role: "QA Engineer"
};

for (let key in employee) {
    console.log(key);
    console.log(employee[key]);
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
console.log('declative function example')
function greet(name) {
    return "Hello, " + name + "!";
}
greet("Alice"); // Call the function and log the result
console.log(greet("Brian"));

//ES6 arrow function example
console.log('ES6 arrow function example')
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};
console.log(greetArrow("Charlie"))

//functin with single parameter
console.log('functin with single parameter')
function square(num) {
    return num * num;
}   
console.log(square(5));

//function with multiple parameters
console.log('function with multiple parameters')
function add(a, b) {
    return a + b;
}
console.log(add(10, 20))

// demo of strict equality and loose equality
var a = 10
var b = '10'
console.log(a==b)
console.log(a===b)
/*
Feature	            for...in	    for...of	forEach()
Mainly used for	    Objects	        Arrays	    Arrays
Returns	            Keys/indexes	Values	    Values
Break supported	    Yes	            Yes	        No
Continue supported	Yes	            Yes         No */


// Program to find duplicate characters in the string
console.log("\nProgram to find duplicate characters in the string")
const str3 = "abcdd";
const map = {};

for (let char of str3) {
    map[char] = (map[char] || 0) + 1;
}
console.log(map);
// Print duplicates
for (let key in map) {
    if (map[key] > 1) {
        console.log(key);// Program to find duplicate characters in the string
console.log("\nProgram to find duplicate characters in the string")
const str3 = "abcdd";
const map = {};

for (let char of str3) {
    map[char] = (map[char] || 0) + 1;
}
console.log(map);
// Print duplicates
for (let key in map) {
    if (map[key] > 1) {
        console.log(key);
    }
}

    }
}
// demo of split function
console.log('Demo of split function')
const str = "Hello World";
const res = str.split(" ");
console.log(res);

// demo of reverse function
console.log('Demo of reverse function')
const numbs = [10, 20, 30, 40, 50];
const rev = numbs.reverse();
console.log(rev);

//demo of join function
console.log('Demo of join function')
const date = ["19", "11", "2026"];
const result = date.join("-");
console.log(result);


// Using all in one
console.log('Using all in one')
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log(reverse("interview"));

//push() – add element at end
console.log('Demo of Push() function')
let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // [1,2,3,4]

//pop() – remove element at end
console.log('Demo of Pop() function')
let arr2 = [1, 2, 3];
arr2.pop();
console.log(arr2); // [1,2]

//shift() – remove first element
console.log('Demo of shift() function')
let arr3 = [1, 2, 3];
arr3.shift();
console.log(arr3); // [2,3]


//unshift() – add first element
console.log('Demo of Unshift() function')
let arr4 = [1, 2, 3];
arr4.unshift(0);
console.log(arr4); // [0,1,2,3]

//map() - Creates a new array by transforming elements
console.log('Demo of Map() function')
let arr6 = [1, 2, 3];
let rest = arr6.map(x => x * 2);
console.log(rest); // [2,4,6]


//filter() - Returns elements that match a condition
console.log('Demo filter() function')
let arr5 = [1, 2, 3, 4];
let resut = arr5.filter(x => x % 2 === 0);
console.log(resut); // [2,4]


//reduce()– Reduces array to single value
console.log('Demo of reduce() function')
let arr7 = [1, 2, 3, 4];
let sum = arr7.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10


// Demo of Promise
console.log('Promise represents future completion of an async operation.')
console.log('\nWhat is Promise:  is a type of function in java  script, that should return you the result with in a defined timeout. so promise has 2 different outcomes i.e .\nresolved: when a promise is resolved, it means that promise gave you the result of the execution within the time out which defined.\nrejected: if promise is rejected, it means the result was not successful and promise was not able to give you the result of the executed within the timeout.')
console.log('\nDemo of async, which always returns the Promise async functions always return a Promise, even if we return a normal value.')
async function test() {
  return "Hello";
}
console.log(test()); 

console.log('\n')
console.log(' Demo of async, which always returns the Promise but .then() resolves the Promise returned by async function.')
async function test() {
  return "Hello";
}
test().then(data => console.log(data));


// Using Promise
console.log("\n Program using Promise - Promises run in microtask queue - Promise represents future completion of an async operation.")
console.log("Start");
Promise.resolve().then(() => {
    console.log("Promise !");
});
console.log("End");

console.log('\nCall back function: callback function is a function passed as an argument to another function it is executed after a certain task is completed')
console.log('Demo of call back function')
function greeting(name, callback) {
    console.log("Hello " + name);
    callback();
}
function done() {
    console.log("Completed");
}
greeting("John", done);

/*
test() Function
import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
   await page.goto('https://example.com');
   await expect(page).toHaveTitle(/Example/);
});
In the above code:
async ({ page }) => {
   await page.goto('https://example.com');
}
is a callback function passed to test().
The Playwright test runner calls this function when it executes the test.

*/
console.log('Demo of Closure: Closure allows a function to access variables from its outer scope.')
function outer(){
    let count = 0;
    return function()
    {
        count++;
        console.log(count);
    }
}
const counter = outer();
counter();
counter();