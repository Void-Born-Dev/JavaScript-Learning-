// Type Conversion 
// Type Conversion is the process of converting a value from one data type to another. In JavaScript, there are two types of type conversion: implicit and explicit.

// Implicit Type Conversion (Type Coercion)
// In JavaScript, implicit type conversion is the automatic conversion of a value from one data type to another. This happens when we perform operations on values of different data types. For example, when we add a number and a string, JavaScript will convert the number to a string and concatenate the two values.

// Example of implicit type conversion
console.log(5 + "5") // o/p : 55 (number 5 is converted to string "5" and concatenated with string "5")

// Explicit Type Conversion

// In JavaScript, explicit type conversion is the manual conversion of a value from one data type to another. This can be done using built-in functions like Number(), String(), Boolean(), etc.

// Example of explicit type conversion
console.log(Number("5")) // o/p : 5 (string "5" is converted to number 5)
console.log(String(5))   // o/p : "5" (number 5 is converted to string "5")
console.log(Boolean(5))  // o/p : true (number 5 is converted to boolean true)