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

