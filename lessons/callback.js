console.log('\nCall back function: callback function is a function passed as an argument to another function it is executed after a certain task is completed')
console.log('Demo of call back function')
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
function done() {
    console.log("Completed");
}
greet("John", done);