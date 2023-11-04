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
