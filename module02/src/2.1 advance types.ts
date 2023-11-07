(() => { // Type assertion / type narrowing
  function EitherNumberOrString(a: unknown): number | string | undefined {
    if (typeof a === "string") {
      return a;
    } else if (typeof a === "number") {
      return a;
    } else {
      return;
    }
  }

  // const v1:undefined = EitherNumberOrString(null) // Type `string | number | undefined` is not assignable to type `undefined`
  const v2: undefined = EitherNumberOrString(null) as undefined; // valid, type assertion force typescript to infer type as `undefined`

  // const v3: number = EitherNumberOrString(23); // Type `string | number | undefined` is not assignable to type `number`
  const v4: number = EitherNumberOrString(20) as number; // valid, type assertion force typescript to infer type as `number`

  // const v5:string = EitherNumberOrString("string") // Type `string | number | void` is not assignable to type string
  const v6: string = EitherNumberOrString("string") as string; // valid, type assertion force typescript to infer type as `string`

  // Interface
  interface Pet {
    name: string;
    age: number;
    class: string;
  }

  const pet1: Pet = {
    name: "mew",
    age: 2,
    class: "cat",
  };

  const pet2: Pet = {
    name: "mew2",
    age: 2.2,
    class: "cat",
  };

  const pet3: Pet = {
    name: "doggy",
    age: 3,
    class: "dog",
  };

  // defining array with Interface
  const pets: Pet[] = [pet1, pet2, pet3, {
    name: "hamba",
    age: 4,
    class: "cow",
  }];

  // extends interface
  interface Ass extends Pet {
    work: string;
    netValue: number;
  }

  const myNewAss: Ass = {
    name: "assssy",
    age: 5,
    class: "ass",
    work: "carring goods",
    netValue: 1200,
  };

  // NOTE:- myNewAss object must satisfy both `Pet` and `Ass` types as if `Ass` extends types of `Pet`.
  // NOTE:- `Interface` and `type alias` can extends each other, But in this case type alias must be an object type

  // Generics

  type generalArray<T> = Array<T>;

  const arrOfNums: generalArray<number> = [0, 1, 2, 3, 4, 5];

  const arrOfStr: generalArray<string> = ["a", "b", "c", "d"];

  const arrOfBool: generalArray<boolean> = [true, false, false, true, true];

  const arrOfObj: generalArray<{ name: string; age: number }> = [
    {
      name: "Ig Momin Khan",
      age: 23,
    },
    {
      name: "Md Suhag Khan",
      age: 20,
    },
  ];

  // generic tuple

  type ThreeTypeTuple<T, S, A> = [T, S, A];

  const me: ThreeTypeTuple<string, number, boolean> = [
    "Ig Momin Khan",
    23,
    false,
  ];

  const myBrother: ThreeTypeTuple<string, number, boolean> = [
    "Md Shuhag Khan",
    20,
    false,
  ];

  // generic with interface

  interface GeneralObj<T> {
    name: string;
    age: T;
    isMarried: boolean;
  }

  const man: GeneralObj<number> = {
    name: "Ig Momin Khan",
    age: 23,
    isMarried: false,
  };

  const woman: GeneralObj<undefined> = {
    name: "nameOfWoman",
    age: undefined,
    isMarried: false,
  };

  const men: generalArray<GeneralObj<number>> = [
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

  // generic with function

  interface OurStudent {
    ID: number;
    name: string;
    email: string;
    courses: string[];
  }

  function addCourseToStudent<T>(student: T) {
    const course = "NLWD";
    return { ...student, course };
  }

  const myStudentInfo = addCourseToStudent<OurStudent>({
    ID: 4343341,
    name: "Ig Momin Khan",
    email: "mominkhan8991@gmail.com",
    courses: ["Complete Web Dev", "Redux", "JBS"],
  });

  // generic function with constraints

  function addL2CourseToStudent<
    T extends OurStudent,
  >(student: T) {
    const newCourse = "NLWD";
    return { ...student, courses: [...student.courses, newCourse] };
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

  function getValue<T>(obj: T, key: keyof T) {
    return obj[key];
  }

  const myInfo: { name: string; age: number; isMarried: boolean } = {
    name: "Ig Momin Khan",
    age: 23,
    isMarried: false,
  };

  const myName = getValue(myInfo, "isMarried");

  // console.log(myName);

  // NOTE:- Nested Generics are allowed, Be careful to use them.

  // Promise

  async function getData(): Promise<unknown> {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );

    const data: unknown = await response.json();
    return data;
  }

  console.log(getData());

  // Conditional types

  interface Vehicle {
    bike: string;
    car: object;
    ship: number;
    plane: object;
  }

  type CheckVehicle<T> = T extends keyof Vehicle ? true : false; //Based on the Type `T` `CheckVehicle` Type will be return `True` or `false`

  type HasPlane = CheckVehicle<"plane">; // HasPlane = true
  type HasHelicopter = CheckVehicle<"helicopter">; // HasHelicopter = false
})();
