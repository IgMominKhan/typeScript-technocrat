# Basic Types of TypeScript

### How Many Types of Type Annotation In TypeScript?

- There are two types of type Annotation in TypeScript

  1. Implicit Type Annotation.
  2. Explicit Type Annotation.

  ### What is Implicit Type in TypeScript?

  - Implicit Types are types that TypeScript infers based on the initial value
    of the variables.
  - If we declare and assign value in the same line `typescript` infers the
    correct type.

  **Examples :-**

  ```ts
  // implicitly infers as string
  const name = "Ig Momin Khan";

  // implicitly infers as number
  const age = 23;
  ```

  **\*\*\* NOTE: When we declear a variables implicitly but not assing value
  `TypeScript` infers the `type` as `any`. It's not recommnaded. We can assign
  `any type of data` on this variable. \*\*\***

  - **Examples**

    ```ts
    // inplicitly infers as any
    let name;

    // we can assign any type of data to the variables like velow:
    name = "Ig Momin Khan";
    name = 3;
    name = false;
    ```

  ### What is Explicit Type in TypeScript?

  - Explicit Types are `types` when we manually provide type by using
    `TypeScript Syntex`
  - If you try to store others type of data on that variable `TypeScript` show
    `Error`. which helps developers to solve `development errors`.

    **Explicit Type Syntax**

    ```ts
     const variableName : type = value;

     // or
     let variableName : type;
     age = value;

     Examples:-

     const name:string = "Ig Momin Khan";

     let age: number;
     age = 23;

     // if we try to assign string to number variables typescript shows error on the editor

     age = "twenty three"; // type string is not assignable to type number
    ```

# Data Types:-

- ### `String`: We can explecitly define a variable as `string`.

  - it allows us to define variable as `string`.
  - only `string` are allowed.

  **Examples**

  ```ts
  let whoAmI: string = "Ig Momin Khan";

  whoAmI = 3; // Type `number` is not assignable to type `string`
  whoAmI = undefined; // Type `undefinded` is not assignable to type `string`
  whoAmI = null; // Type `null` is not assignable to type `string`
  whoAmI = false; // Type `boolean` is not assignable to type `string`
  whoAmI = []; // Type `never` is not assignable to type `string`
  ```

- ### `Number`: We can `Explecitly` define variables as `number`

  - it allows us to define variable as `number`.
  - only `string` are allowed.

  **Examples**

  ```ts
  let age: number = 23;

  age = 3; // Type `number` is not assignable to type `number`
  age = undefined; // Type `undefinded` is not assignable to type `number`
  age = null; // Type `null` is not assignable to type `number`
  age = false; // Type `boolean` is not assignable to type `number`
  age = []; // Type `never` is not assignable to type `number`
  ```

- ### `Boolean`: We can `Explecitly` define variables as `boolean`

  - it allows us to define variable as `boolean`.
  - only `boolean` are allowed.

  **Examples**

  ```ts
  let age: boolean = 23;

  age = 3; // Type `number` is not assignable to type `boolean`
  age = undefined; // Type `undefinded` is not assignable to type `boolean`
  age = null; // Type `null` is not assignable to type `boolean`
  age = false; // Type `boolean` is not assignable to type `boolean`
  age = []; // Type `never` is not assignable to type `boolean`
  ```

- ### `Array`: We can `Explecitly` define variables as `Array` in TypeScript

  - it allows us to define variable as fixed typed `array`.
  - only selected types element are allowed as `array` element.
  - we can store `array` like, fixed `string`, `number`, `boolean` etc.

  **Examples**

  ```ts
  // array of string
  // only string are allowed as "array" element
  const friends: string[] = ["Momin", "Sohag", "Suhan"];

  friends.push(2); // Argument of type "number" is not assignable to parametter of type "string"
  friends.unshift(undefined); // Argument of type "undefined" is not assignable to parametter of type "string"
  friends.push(null); // Argument of type "null" is not assignable to parametter of type "string"
  friends.unshift(true); // Argument of type "boolean" is not assignable to parametter of type "string"

  // array of number
  // only number are allowed as "array" element
  const scores: number[] = [23, 32, 52, 23, 31];

  scores.push("two"); // Argument of type "string" is not assignable to parametter of type "number"
  scores.unshift(undefined); // Argument of type "undefined" is not assignable to parametter of type "number"
  scores.push(null); // Argument of type "null" is not assignable to parametter of type "number"
  scores.unshift(true); // Argument of type "boolean" is not assignable to parametter of type "number"

  // array of boolean
  // only boolean are allowed as "array" element
  const scores: boolean[] = [true, false, true, true, false];

  scores.push("two"); // Argument of type "string" is not assignable to parametter of type "boolean"
  scores.unshift(undefined); // Argument of type "undefined" is not assignable to parametter of type "boolean"
  scores.push(null); // Argument of type "null" is not assignable to parametter of type "boolean"
  scores.unshift(3); // Argument of type "number" is not assignable to parametter of type "boolean"
  ```

- ### `Tuple`: We can `Explecitly` define variables and declear the number of elements and it's types using `tuple`

  - it allows us to define a list of elements in a specific order, types and
    fixed size.

  **Examples**

  ```ts
  let person: [string, number, boolean] = ["Ig Momin Khan", 23, false];

  person[1] = "twenty three"; // Type `string` is not assignable to type `number`
  person[2] = undefined; // Type `undefinded` is not assignable to type `boolean`
  person[3]; // Tuple type [string, number, boolean] of lenght "3" has no element at index "3"
  ```

## `Object` Types:-

- TypeScript has `explecit Anounymous` ways to define `object types`.

  - #### Anounymous Object Type:

    - Anounymous `object types` are defined `inline` when declearing a
      `variable` or `function` parametters.

    **Syntex:**

    ```ts
    const variableName: {
      propertyName: type;
    } = {
      propertyName: value,
    };
    ```

    **Examples:**

    ```ts
    const person: { name: string; age: number; isMarried: boolean } = {
      name: "Ig Momin Khan",
      age: 23,
      isMarried: false,
    };

    person.name = 23; // Type `number` is not assignable to type `string`
    person.age = undefined; // Type `undefinded` is not assignable to type `number`
    person.isMarried = "yes"; // Type `string` is not assignable to type `boolean`
    ```

  - #### Optional object property

    TypeScript allowed us to define object property as `optional`

    **Examples:**

    ```ts
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
    ```

  - #### Literal types and readonly property
    Literal types works like constant value of the `object` property. Where
    `readonly` property is readonly available for next usages.

  **Examples:**

  ```ts
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
  ```

## Function `parameter` and `return` type

Function `parameter` and `return` type works like normal variable type likes
below examples

**Examples:**

```ts
function add(num1: number, num2: number) {
  return num1 * num2;
}

// using arrow function
const addTwoNum = (num1: number, num2: number): number => num2 + num2;

add(2, 3); // 5
// add(2, 'three')  // Argument of type `string` is not assignable to parametter of type `number`
// add(null,undefined) // Argument of type `null` is not assignable to parametter of type `number`
// add(2) // exprected 2 arguments, but got 1
// add(2,3,4) // exprected 2 arguments, but got 3

// function return type
function concatinaton(p1: string, p2: number): string {
  const n = parseInt(p1); //
  // return n+p2 // Type `number` is not assignable to type `string`
  // return p2 // Type `number` is not assignable to type string
  return p1 + p2; // Only string type data are returnable,
}

// using arrow function
const concate = (p1: string, p2: string): string => {
  const n = parseInt(p1); //
  // return n+p2 // Type `number` is not assignable to type `string`
  // return p2 // Type `number` is not assignable to type string
  return p1 + p2; // Only string type data are returnable,

  // methods

  const numbers: number[] = [0, 1, 2, 3, 4, 5, 6];

  // as if Array.map return an array, we can store the return value as array of numbers using `number[]`
  const numbersSquares: number[] = numbers.map(
    (num: number): number => num * num,
  );
};
```

# Type alias :-

Type alias enable us to reuse type several times. type alilas works like variables.

**Examples:**

```ts
type Name = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

type Student = {
  name: Name; // name property used `Name` type alias to reduce code repetation
  age: number;
  gender: string;
  isMarried: boolean;
  contact?: number;
};

const student1: Student = { // Student property used `Student` type alias to reduce code repetation
  name: "Ig Momin Khan",
  age: 23,
  gender: "male",
  isMarried: false,
};

const student2: Student = {
  name: "Suhag",
};
```



