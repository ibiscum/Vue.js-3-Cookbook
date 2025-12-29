var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
var Color;
(function (Color) {
    Color["Red"] = "#FF0000";
    Color["Blue"] = "#0000FF";
    Color["Green"] = "#00FF00";
})(Color || (Color = {}));
var Languages;
(function (Languages) {
    Languages[Languages["JavaScript"] = 1] = "JavaScript";
    Languages[Languages["PHP"] = 2] = "PHP";
    Languages[Languages["Python"] = 3] = "Python";
    Languages[Languages["Java"] = 10] = "Java";
    Languages[Languages["Ruby"] = 11] = "Ruby";
    Languages[Languages["Rust"] = 12] = "Rust";
    Languages[Languages["TypeScript"] = 13] = "TypeScript";
})(Languages || (Languages = {}));
console.log(Color.Red); // '#FF0000'
console.log(Languages.TypeScript); // 13
// Any
var maybeIs = 4;
console.log(maybeIs, typeof maybeIs);
maybeIs = 'a string?';
console.log(maybeIs, typeof maybeIs);
maybeIs = true;
console.log(maybeIs, typeof maybeIs);
// Void
function logThis(str) {
    console.log(str);
}
logThis('Hi there!');
var personA = {
    name: 'Heitor',
    age: 31,
};
console.log(personA);
function greetingUser(user) {
    console.log("Hello, ".concat(user.name, " ").concat(user.lastName));
}
greetingUser({ "lastName": "Doe", "name": "John" });
var personB = {
    name: 'Heitor',
    age: 31,
};
console.log("My name is ".concat(personB.name, ", I am ").concat(personB.age, " years old"));
// Functions
var sumOfValues = function (a, b) { return a + b; };
console.log(sumOfValues(4, 5));
var complexFunction = function (a) { return function (b) { return a + b; }; };
console.log(complexFunction(5));
function foo(a, b) { return a + b; }
;
var result = foo(5, 6);
console.log(result);
// Interface
function greetingStudent(student) {
    console.log("Hello ".concat(student.name));
}
var newStudent = { name: 'Heitor' };
greetingStudent(newStudent);
function greetingStudentB(student) {
    console.log("Hello ".concat(student.name));
    if (student.course) {
        console.log("Welcome to the ".concat(student.course, " semester"));
    }
}
var newStudentB = { name: 'Heitor', university: 'UDF', course: 'physics' };
greetingStudentB(newStudentB);
// Decorator
function classSeal(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var Animal = function () {
    var _classDecorators = [classSeal];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Animal = _classThis = /** @class */ (function () {
        function Animal_1(sound) {
            this.sound = sound;
        }
        Animal_1.prototype.emitSound = function () {
            return "The animal says, " + this.sound;
        };
        return Animal_1;
    }());
    __setFunctionName(_classThis, "Animal");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Animal = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Animal = _classThis;
}();
var animal = new Animal("bark");
console.log(animal.emitSound());
