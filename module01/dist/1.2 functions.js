"use strict";
// functions
// function parametters
function add(num1, num2) {
    return num1 * num2;
}
// using arrow function
const addTwoNum = (num1, num2) => num2 + num2;
add(2, 3); // 5
// add(2, 'three')  // Argument of type `string` is not assignable to parameter of type `number`
// add(null,undefined) // Argument of type `null` is not assignable to parameter of type `number`
// add(2) // exprected 2 arguments, but got 1
// add(2,3,4) // exprected 2 arguments, but got 3
// function return type
function concatinaton(p1, p2) {
    const n = parseInt(p1); //
    // return n+p2 // Type `number` is not assignable to type `string`
    // return p2 // Type `number` is not assignable to type string
    return p1 + p2; // Only string type data are returnable,
}
// using arrow function
const concate = (p1, p2) => {
    const n = parseInt(p1); //
    // return n+p2 // Type `number` is not assignable to type `string`
    // return p2 // Type `number` is not assignable to type string
    return p1 + p2; // Only string type data are returnable,
};
// methods
const numbers = [0, 1, 2, 3, 4, 5, 6];
// as if Array.map return an array, we can store the return value as array of numbers using `number[]`
const numbersSquares = numbers.map((num) => num * num);
