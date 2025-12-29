// String
const myText: string = 'My Simple Text';
console.log(myText);

const myTextAgain: string = "My Simple Text";
console.log(myTextAgain);

const myName = "John Doe";
const greeting: string = `Welcome back ${myName}!`;
console.log(greeting);

// Number
const myAge: number = 31;
console.log(myAge);

const hexNumber: number = 0xf010d;
console.log(hexNumber);

const binaryNumber: number = 0b1011;
console.log(binaryNumber);

const octalNumber: number = 0o744;
console.log(octalNumber);

// Boolean
const isTaskDone: boolean = false;
console.log(isTaskDone);

const isGreaterThen: boolean = 10 > 5;
console.log(isGreaterThen);

// Array
const primeNumbers: number[] = [1, 3, 5, 7, 11];
console.log(primeNumbers);

const switchInstructions: Array<boolean> = [true, false, false, true];
console.log(switchInstructions);

// Tuple
let person: [string, number];
person = ['Heitor', 31];
console.log(`My name is ${person[0]} and I am ${person[1]} years old`);

// Enum
enum ErrorLevel {
  Info,
  Debug,
  Warning,
  Error,
  Critical,
}

console.log(ErrorLevel.Error); // 3
console.log(ErrorLevel[3]); // Error

enum Color {
  Red = '#FF0000',
  Blue = '#0000FF',
  Green = '#00FF00',
}

enum Languages {
  JavaScript = 1,
  PHP,
  Python,
  Java = 10,
  Ruby,
  Rust,
  TypeScript,
}

console.log(Color.Red) // '#FF0000'
console.log(Languages.TypeScript) // 13

// Any
let maybeIs: any = 4;
console.log(maybeIs, typeof maybeIs);

maybeIs = 'a string?';
console.log(maybeIs, typeof maybeIs);

maybeIs = true;
console.log(maybeIs, typeof maybeIs);

// Void
function logThis(str: string): void {
  console.log(str);
}

logThis('Hi there!');

// Objects
interface IPerson {
  name: string;
  age: number;
}
const personA: IPerson = {
  name: 'Heitor',
  age: 31,
};

console.log(personA);

function greetingUser(user: { name: string, lastName: string }) {
  console.log(`Hello, ${user.name} ${user.lastName}`);
}

greetingUser({ "lastName": "Doe", "name": "John" });

type Person = {
  name: string,
  age: number,
};

const personB: Person = {
  name: 'Heitor',
  age: 31,
};

console.log(`My name is ${personB.name}, I am ${personB.age} years old`);

// Functions
const sumOfValues: (a: number, b: number) => number = (a: number, b: number): number => a + b;
console.log(sumOfValues(4, 5));

const complexFunction: (a: number) => (b: number) => number = (a: number): (b: number) => number => (b: number): number => a + b;
console.log(complexFunction(5));

function foo(a: number, b: number): number { return a + b; };
let result = foo(5, 6);
console.log(result);

// Interface
function greetingStudent(student: { name: string }) {
  console.log(`Hello ${student.name}`);
}

let newStudent = { name: 'Heitor' };

greetingStudent(newStudent);

interface IStudent {
  name: string;
  course?: string;
  readonly university: string;
}

function greetingStudentB(student: IStudent) {
  console.log(`Hello ${student.name}`);

  if (student.course) {
    console.log(`Welcome to the ${student.course} semester`);
  }
}

let newStudentB = { name: 'Heitor', university: 'UDF', course: 'physics' };

greetingStudentB(newStudentB);

// Decorator
function classSeal(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@classSeal
class Animal {
  sound: string;
  constructor(sound: string) {
    this.sound = sound;
  }
  emitSound() {
    return "The animal says, " + this.sound;
  }
}

let animal = new Animal("bark");
console.log(animal.emitSound());
