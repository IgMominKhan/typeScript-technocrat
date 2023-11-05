# Be A TypeScript Technocrat :-

 ### Table Of Contents

- [Introduction]()
  - [What is TypeScript?](#what-is-typescript)
  - [What is the purpose of TypeScript?](#what-is-the-purpose-of-typescript)
  - [What's wrong with Javascript?](#whats-wrong-with-javascript)
  - [Can Browsers recognize TypeScript?](#can-browsers-recognize-typescript)
  - [Benefits of TypeScript](#benefits-of-typescript)
  - [TypeScript Installation](#typescript-installation)
  - [Typescript Configuration](#typescript-configs-or-tsconfig.js-command)
  - [How To Run TypeScript File?](#typescript-file-run)
- [Basic Types of TypeScript](./module01/basicTypes.md#basic-types-of-typescript)
  - [How Many Types of Type Annotation In TypeScript?](./module01/basicTypes.md#how-many-types-of-type-annotation-in-typescript)
  - [What is Implicit Type in TypeScript?](./module01/basicTypes.md#what-is-implicit-type-in-typescript)
  - [What is Explicit Type in TypeScript?](./module01/basicTypes.md#what-is-explicit-type-in-typescript)
  -  **[Data Types](./module01/basicTypes.md#data-types-)**
        - [String](./module01/basicTypes.md#string-we-can-explecitly-define-a-variable-as-string) 
        - [Number](./module01/basicTypes.md#number-we-can-explecitly-define-variables-as-number) 
        - [Boolean](./module01/basicTypes.md#boolean-we-can-explecitly-define-variables-as-boolean) 
        - [Array](./module01/basicTypes.md#array-we-can-explecitly-define-variables-as-array-in-typescript) 
        - [Tuple](./module01/basicTypes.md#tuple-we-can-explecitly-define-variables-and-declear-the-number-of-elements-and-its-types-using-tuple)

## What is TypeScript?

- TypeScript is an open-source, strongly typed, high-lavel programming language.
- TypeScript is a superset of Javascript build by Mycrosoft.
- TypeScript code can be complied to lower version of Javascript.

## What is the purpose of TypeScript?

- TypeScript enables developers to reduce mistakes on their code.
- Becouse of strong data types, input of unwanted data types is not accepted.
- Easy debugging of code in a short time.
- Easily Scale applications.

## What's wrong with Javascript?

- Javascript is a Dynamically Typed Language.
- Lack of Strong Typing.
- Suffers Type correction.
- Hard to find bugs.
- Show Errors only on runtime.

## Can Browsers recognize TypeScript?

- No, Browsers can't recognize TypeScript code. We must complie TypeScript to
  Javascript.

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
