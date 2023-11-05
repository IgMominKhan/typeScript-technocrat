"use strict";
// Types
// String
let myName = "Ig Momin Khan";
// myName = undefined; // Type "undefined" is not assignable to type "string"
// Number
let age = 23;
// age = null  // Type "null" is not assignable to type "number"
// Bollean
let isMarried = false;
// isMarried = "yes"   // Type "string" is not assignable to type "boolean"
// Undefined
let isEmployed = undefined;
// isEmployed = true    // Type "boolean" is not assignable to type "undefined"
// Null
let sallary = null;
// sallary = "5000 SAR" // type "5000 SAR" is not assignable to type null
// Array
const names = ["Momin", "Shuhag", "Suhan"]; // Array of String
// names.push(5) // Argument of type "number" is not assignable to parametter of type "string"
const scores = [20, 32, 23, 53, 22, 59]; // Array of Numbers
// scores.unshift('twelve') // Argument of type "string" is not assignable to parametter of type "number"
// Tuple
const nameAge = ["Ig Momin Khan", 23];
// nameAge[3] = 'Married' // Tuple type "[string, number]" of length "2" has no element at index "3"
// nameAge[2] = "Khan" // Tuple type "[string, number]" of length "2" has no element at index "2"
// Any
let anyting = "anyting";
anyting = 2; // no error, valid
anyting = false; // no error, valid
anyting = null; // no error, valid
anyting = undefined; // no error, valid
anyting = ["anyting", 2, false, null, undefined]; // no error, valid
// NOTE:- Aviod it. Becouse, Any type of data is valid for "any" type.
// Object types
const person = {
    name: "Ig Momin Khan",
    age: 23,
    isMarried: false,
};
// person.isMarried = 'yes' // Type `string` is not assingable to type `boolean`
// person.age = "twenty three" // Type `string` is not assingable to type `number`
// person.isMarried = undefined // Type `undefined` is not assignable to type `boolean`
// person.name = null // Type `null` is not assignable to type `string`
// optional object property
const user = {
    firstName: "Momin",
    lastName: "Khan",
    isMarried: false,
};
// Literal types and readonly property
const employe = {
    companyName: "Tech Solutions",
    joinYear: 2021,
    experiance: 2,
};
const student1 = {
    name: {
        firstName: "Ig",
        middleName: "Momin",
        lastName: "Khan",
    },
    birthDate: 2000,
    gender: "male",
    isMarried: false,
};
const student2 = {
    name: {
        firstName: "Shuhag",
        lastName: "Khan",
    },
    birthDate: 2002,
    gender: "male",
    isMarried: false,
};
let myAge = undefined; // Valid value
myAge = 23; // Valid value
myAge = null; // Valid value
let employee = {
    name: "Ig Momin Khan",
    age: 23,
    employeeId: 5423423452362,
    salary: 5000,
};
// NODE:- employee object must satisfy both `Person` and `Employ` types as if `PersonAndEmployee` is the Intersection of `Person` and `Employee` types.
