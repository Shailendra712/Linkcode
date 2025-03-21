// Callback function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye, Shailendra!");
}

greet("Shailendra", sayBye);

// forEach
let names = ["Shailendra", "Rahul"];
names.forEach(function(name) {
    console.log("Hello, " + name);
});

// filter
let namess = ["Shailendra", "Amit", "Vikas", "Shailendra"];
let result = namess.filter(name => name === "Shailendra");
console.log(result); // ["Shailendra", "Shailendra"]

// map
let n = ["Shailendra", "Rohan"];
let greetings = n.map(name => "Hello, " + name);
console.log(greetings);
// ["Hello, Shailendra", "Hello, Rohan"]
