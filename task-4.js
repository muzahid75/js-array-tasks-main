// Step 1: Create variables with array and non-array values
let fruits = ["apple", "banana", "cherry"]; // Array
let number = 42; // Non-array
let person = { name: "John Doe", age: 30 }; // Non-array
let hobbies = ["reading", "coding"]; // Array
let isStudent = true; // Non-array

// Step 2: Use isArray to check each variable
console.log(`fruits is an array: ${Array.isArray(fruits)}`);
console.log(`number is an array: ${Array.isArray(number)}`);
console.log(`person is an array: ${Array.isArray(person)}`);
console.log(`hobbies is an array: ${Array.isArray(hobbies)}`);
console.log(`isStudent is an array: ${Array.isArray(isStudent)}`);
