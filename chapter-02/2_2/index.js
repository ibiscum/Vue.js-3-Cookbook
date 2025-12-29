// String
var myText = 'My Simple Text';
console.log(myText);
var myTextAgain = "My Simple Text";
console.log(myTextAgain);
var myName = "John Doe";
var greeting = "Welcome back ".concat(myName, "!");
console.log(greeting);
// Number
var myAge = 31;
console.log(myAge);
var hexNumber = 0xf010d;
console.log(hexNumber);
var binaryNumber = 11;
console.log(binaryNumber);
var octalNumber = 484;
console.log(octalNumber);
// Boolean
var isTaskDone = false;
console.log(isTaskDone);
var isGreaterThen = 10 > 5;
console.log(isGreaterThen);
// Array
var primeNumbers = [1, 3, 5, 7, 11];
console.log(primeNumbers);
var switchInstructions = [true, false, false, true];
console.log(switchInstructions);
// Tuple
var person;
person = ['Heitor', 31];
console.log("My name is ".concat(person[0], " and I am ").concat(person[1], " years old"));
// Enum
var ErrorLevel;
(function (ErrorLevel) {
    ErrorLevel[ErrorLevel["Info"] = 0] = "Info";
    ErrorLevel[ErrorLevel["Debug"] = 1] = "Debug";
    ErrorLevel[ErrorLevel["Warning"] = 2] = "Warning";
    ErrorLevel[ErrorLevel["Error"] = 3] = "Error";
    ErrorLevel[ErrorLevel["Critical"] = 4] = "Critical";
})(ErrorLevel || (ErrorLevel = {}));
console.log(ErrorLevel.Error); // 3
console.log(ErrorLevel[3]); // Error
