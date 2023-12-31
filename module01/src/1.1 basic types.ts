// Types

// String
let myName: string = "Ig Momin Khan";

// myName = undefined; // Type "undefined" is not assignable to type "string"

// Number
let age: number = 23;

// age = null  // Type "null" is not assignable to type "number"

// Bollean
let isMarried: boolean = false;

// isMarried = "yes"   // Type "string" is not assignable to type "boolean"

// Undefined
let isEmployed: undefined = undefined;

// isEmployed = true    // Type "boolean" is not assignable to type "undefined"

// Null
let sallary: null = null;

// sallary = "5000 SAR" // type "5000 SAR" is not assignable to type null

// Array
const names: string[] = ["Momin", "Shuhag", "Suhan"]; // Array of String

// names.push(5) // Argument of type "number" is not assignable to parametter of type "string"

const scores: number[] = [20, 32, 23, 53, 22, 59]; // Array of Numbers

// scores.unshift('twelve') // Argument of type "string" is not assignable to parametter of type "number"

// Tuple
const nameAge: [string, number] = ["Ig Momin Khan", 23];

// nameAge[3] = 'Married' // Tuple type "[string, number]" of length "2" has no element at index "3"

// nameAge[2] = "Khan" // Tuple type "[string, number]" of length "2" has no element at index "2"

// Any
let anyting: any = "anyting";

anyting = 2; // no error, valid
anyting = false; // no error, valid
anyting = null; // no error, valid
anyting = undefined; // no error, valid
anyting = ["anyting", 2, false, null, undefined]; // no error, valid

// NOTE:- Aviod it. Becouse, Any type of data is valid for "any" type.

// Object types
const person: { name: string; age: number; isMarried: boolean } = {
  name: "Ig Momin Khan",
  age: 23,
  isMarried: false,
};

// person.isMarried = 'yes' // Type `string` is not assingable to type `boolean`
// person.age = "twenty three" // Type `string` is not assingable to type `number`
// person.isMarried = undefined // Type `undefined` is not assignable to type `boolean`
// person.name = null // Type `null` is not assignable to type `string`

// optional object property
const user: {
  firstName: string;
  middleName?: string; // middleName is optional
  lastName: string;
  isMarried: boolean;
} = {
  firstName: "Momin",
  lastName: "Khan",
  isMarried: false,
};

// Literal types and readonly property
const employe: {
  companyName: "Tech Solutions";
  readonly joinYear: number;
  experiance: number;
} = {
  companyName: "Tech Solutions",
  joinYear: 2021,
  experiance: 2,
};

// employe.companyName = "Web Solutions"; // Type `Web Solutions` is not assignable to type `Tech Solutions`
// employe.joinYear = 2020; // Can't assign to `joinYear` because it is a read-only property

// Type aliases

type Name = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

type Student = {
  name: Name; // name property used `Name` type alias to reduce code repetation
  birthDate: number;
  gender: string;
  contact?: number;
  isMarried: boolean;
};

const student1: Student = { // Student property used `Student` type alias to reduce code repetation
  name: {
    firstName: "Ig",
    middleName: "Momin",
    lastName: "Khan",
  },
  birthDate: 2000,
  gender: "male",
  isMarried: false,
};

const student2: Student = { // Student property used `Student` type alias to reduce code repetation
  name: {
    firstName: "Shuhag",
    lastName: "Khan",
  },
  birthDate: 2002,
  gender: "male",
  isMarried: false,
};

// Union types
type Age = number | undefined | null;

let myAge: Age = undefined; // Valid value
myAge = 23; // Valid value
myAge = null; // Valid value

// myAge = "twenty three"; // Type `twenty three` is not assigable to type "Age"

// Intersection type

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  salary: number;
};

type PersonAndEmployee = Person & Employee;

let employee: PersonAndEmployee = {
  name: "Ig Momin Khan",
  age: 23,
  employeeId: 5423423452362,
  salary: 5000,
};

// NODE:- employee object must satisfy both `Person` and `Employ` types as if `PersonAndEmployee` is the Intersection of `Person` and `Employee` types.
