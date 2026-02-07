"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_js_1 = require("./animal.js");
console.log(animal_js_1.FoodChainType.Carnivorous);
console.log(animal_js_1.FoodChainType.Herbivorous);
console.log(animal_js_1.FoodChainType.Omnivorous);
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this, {
            name: 'Dog',
            sound: 'Wof!',
            family: 'Canidae',
            foodChainType: animal_js_1.FoodChainType.Carnivorous,
        }) || this;
    }
    return Dog;
}(animal_js_1.Animal));
var dog = new Dog();
console.log(dog);
console.log(dog.whoAmI());
console.log(dog.makeSound());
