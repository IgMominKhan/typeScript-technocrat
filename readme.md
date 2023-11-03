# Be A TypeScript Technocrat:-

_**Contents**_

## What is TypeScript?

- **TypeScript is an open-source, strongly typed, high-lavel programming
  language.**
- **TypeScript is a superset of Javascript build by Mycrosoft.**
- **TypeScript code can be complied to lower version of Javascript.**

## What is the purpose of TypeScript?

- **TypeScript enables developers to reduce mistakes on their code.**
- **Becouse of strong data types, input of unwanted data types is not accepted**
- **Easy debugging of code in a short time.**
- **Easily Scale applications.**

## What's wrong with Javascript?

- **Javascript is a Dynamically Typed Language.**
- **Lack of Strong Typing.**
- **Suffers Type correction.**
- **Hard to find bugs.**
- **Show Errors only on runtime.**

## Can Browsers recognize TypeScript?

- **No, Browsers can't recognize TypeScript code. We must complie TypeScript to
  Javascript.**

## Benefits of TypeScript

- Supports all Javascript types

  - String,
  - Number,
  - Bollean,
  - Null,
  - Undefinded,
  - Object,
  - Symble,

- Comes with new type features
  - type,
  - interface,
  - Array,
  - Tuple,
  - Enum,
  - Union,
  - InterSection,
  - void,
  - any,
  - never,
- Type Safety
- Older Browsers supports
- Less bugs and Less Testing time.
- Increase Developer Productivity
- Best Intelligence support
- Own TypeScript Complier: `tsc` or `typescript complier`

## TypeScript Installation

```ts
npm install -g typescript
```

## TypeScript configs or `tsconfig.js` Command:

```ts
tsc --init
```

## TypeScript File Run:

1. compile once

```ts
tsc filename.ts
```

2. watch for file changes and compile on each changes

```ts
tsc -w filename.ts
```

## How Many Types of Type Annotation In TypeScript?

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

  **\*\*\* NOTE: When we declear a variables implicitly but not assing value `TypeScript` infers the `type` as `any`. It's not recommnaded. We can assign `any type of data` on this variable. \*\*\***
    
    - **Examples**
         ```ts 
        // inplicitly infers as any
        let name; 

        // we can assign any type of data to the variables like velow:
        name = "Ig Momin Khan";
        name = 3;
        name = false;
        ```
  ## What is Explicit Type in TypeScript?
  - Explicit Types are `types` when we manually provide type by using `TypeScript Syntex`
  - If you try to store others type of data on that variable `TypeScript` show `Error`. which helps developers to solve `development errors`.
  
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
