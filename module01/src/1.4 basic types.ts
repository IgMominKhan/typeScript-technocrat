// Data Types

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
    const nameAge:[string,number] = ["Ig Momin Khan",23]

    // nameAge[3] = 'Married' // Tuple type "[string, number]" of length "2" has no element at index "3"

    // nameAge[2] = "Khan" // Tuple type "[string, number]" of length "2" has no element at index "2"
    
    // Any
    let anyting:any = "anyting";
    
    anyting = 2; // no error, valid
    anyting = false; // no error, valid
    anyting = null; // no error, valid
    anyting = undefined; // no error, valid
    anyting = ["anyting",2,false,null,undefined] // no error, valid

    // NOTE:- Aviod it. Becouse, Any type of data is valid for "any" type.


    
