"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => {
    function EitherNumberOrString(a) {
        if (typeof a === "string") {
            return a;
        }
        else if (typeof a === "number") {
            return a;
        }
        else {
            return;
        }
    }
    // const v1:undefined = EitherNumberOrString(null) // Type `string | number | undefined` is not assignable to type `undefined`
    const v2 = EitherNumberOrString(null); // valid, type assertion force typescript to infer type as `undefined`
    // const v3: number = EitherNumberOrString(23); // Type `string | number | undefined` is not assignable to type `number`
    const v4 = EitherNumberOrString(20); // valid, type assertion force typescript to infer type as `number`
    // const v5:string = EitherNumberOrString("string") // Type `string | number | void` is not assignable to type string
    const v6 = EitherNumberOrString("string"); // valid, type assertion force typescript to infer type as `string`
    const pet1 = {
        name: "mew",
        age: 2,
        class: "cat",
    };
    const pet2 = {
        name: "mew2",
        age: 2.2,
        class: "cat",
    };
    const pet3 = {
        name: "doggy",
        age: 3,
        class: "dog",
    };
    // defining array with Interface
    const pets = [pet1, pet2, pet3, {
            name: "hamba",
            age: 4,
            class: "cow",
        }];
    const myNewAss = {
        name: "assssy",
        age: 5,
        class: "ass",
        work: "carring goods",
        netValue: 1200,
    };
    const arrOfNums = [0, 1, 2, 3, 4, 5];
    const arrOfStr = ["a", "b", "c", "d"];
    const arrOfBool = [true, false, false, true, true];
    const arrOfObj = [
        {
            name: "Ig Momin Khan",
            age: 23,
        },
        {
            name: "Md Suhag Khan",
            age: 20,
        },
    ];
    const me = [
        "Ig Momin Khan",
        23,
        false,
    ];
    const myBrother = [
        "Md Shuhag Khan",
        20,
        false,
    ];
    const man = {
        name: "Ig Momin Khan",
        age: 23,
        isMarried: false,
    };
    const woman = {
        name: "nameOfWoman",
        age: undefined,
        isMarried: false,
    };
    const men = [
        man,
        {
            name: "Md Shuhag Khan",
            age: 20,
            isMarried: false,
        },
        {
            name: "Md Suhan",
            age: 8,
            isMarried: false,
        },
    ];
    function addCourseToStudent(student) {
        const course = "NLWD";
        return Object.assign(Object.assign({}, student), { course });
    }
    const myStudentInfo = addCourseToStudent({
        ID: 4343341,
        name: "Ig Momin Khan",
        email: "mominkhan8991@gmail.com",
        courses: ["Complete Web Dev", "Redux", "JBS"],
    });
    // generic function with constraints
    function addL2CourseToStudent(student) {
        const newCourse = "NLWD";
        return Object.assign(Object.assign({}, student), { courses: [...student.courses, newCourse] });
    }
    //
    const myStudentInfoWithL2 = addL2CourseToStudent({
        ID: 23421431,
        name: "Ig Momin Khan",
        email: "mominkhan8991@gmail.com",
        courses: ["Complete Web Dev", "Redux", "JBS"],
        IsBlackBeltHolder: true,
        strength: "Heavey",
    });
    // console.log(myStudentInfo, myStudentInfoWithL2) careful;
    // Constant with key-of operator
    function getValue(obj, key) {
        return obj[key];
    }
    const myInfo = {
        name: "Ig Momin Khan",
        age: 23,
        isMarried: false,
    };
    const myName = getValue(myInfo, "isMarried");
    // console.log(myName);
    // NOTE:- Nested Generics are allowed, Be careful to use them.
    // Promise
    function getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch("https://jsonplaceholder.typicode.com/todos/1");
            const data = yield response.json();
            return data;
        });
    }
    console.log(getData());
})();
