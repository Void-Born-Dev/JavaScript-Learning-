// Data types in JS 
// There are two types of data types in JS:
// 1. Primitive data types
// 2. Non-primitive data types

// Primitive data types in JS are:
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt
// Non-primitive data types in JS are:
// 1. Object
// 2. Array
// 3. Function
// In JS, we can use typeof operator to check the data type of a variable

// typeof "Hello"      // "string"
// typeof 42           // "number"
// typeof true         // "boolean"
// typeof undefined    // "undefined"
// typeof 10n          // "bigint"
// typeof Symbol('id') // "symbol"

// typeof { a: 1 }     // "object"
// typeof [1, 2, 3]    // "object"


console.log(typeof "Hello")      // "string"
console.log(typeof 42)           // "number"
console.log(typeof true)         // "boolean"
console.log(typeof undefined)    // "undefined"
console.log(typeof 10n)          // "bigint"
console.log(typeof Symbol('id')) // "symbol"

console.log(typeof { a: 1 })     // "object"
console.log(typeof [1, 2, 3])    // "object"
console.log(typeof function(){}) // "function"
console.log(typeof null)         // "object"

// typeof function(){} // "function" (a special case for functions)
// typeof null         // "object" (this is a long-standing, well-known bug in JavaScript)