//1. Type Identification
const num = 10;
const str = "Hello";
const bool = true;

console.log("Type of num:", typeof num);   // Result: Type of num: number
console.log("Type of str:", typeof str);   // Result: Type of str: string
console.log("Type of bool:", typeof bool); // Result: Type of bool: boolean

//2. Comparing Variable Types

const firstVar = 42;
const secondVar = "42";

console.log("Type of firstVar:", typeof firstVar);   // Result: Type of firstVar: number
console.log("Type of secondVar:", typeof secondVar); // Result: Type of secondVar: string

if (typeof firstVar === typeof secondVar) {
    console.log("firstVar and secondVar are the same type.");
} else {
    console.log("firstVar and secondVar are different types."); // Result: firstVar and secondVar are of different types.
}

//3. Undefined and Null Types
const noValue = undefined;
const emptyValue = null;

console.log("Type of noValue:", typeof noValue);   // Result: Type of noValue: undefined
console.log("Type of emptyValue:", typeof emptyValue); // Result: Type of emptyValue: object

//4. Debugging Variables
const numVariable = 25;
const strVariable = "Debugging";
const boolVariable = false;

console.log(`The value of numVariable is ${numVariable} and its type is ${typeof numVariable}.`);   // Result: The value of numVariable is 25 and its type is number.
console.log(`The value of numVariable is "${strVariable}" and its type is ${typeof strVariable}.`); // Result: The value of strVariable is "Debugging" and its type is string.
console.log(`The value of numVariable is ${boolVariable} and its type is ${typeof boolVariable}.`); // Result: The value of boolVariable is false and its type is boolean.