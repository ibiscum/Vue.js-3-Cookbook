"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = exports.FoodChainType = void 0;
var FoodChainType;
(function (FoodChainType) {
    FoodChainType["Carnivorous"] = "carnivorous";
    FoodChainType["Herbivorous"] = "herbivorous";
    FoodChainType["Omnivorous"] = "omnivorous";
})(FoodChainType || (exports.FoodChainType = FoodChainType = {}));
var Animal = /** @class */ (function () {
    function Animal(params) {
        this.name = params.name;
        this.sound = params.sound || '';
        this.family = params.family;
        this.foodChainType = params.foodChainType;
    }
    Animal.prototype.whoAmI = function () {
        console.log("I am a ".concat(this.name, ", my family is ").concat(this.family, ". My diet is ").concat(this.foodChainType, "."));
        //   if (this.sound) {
        //     console.log([...Array(2).fill(this.sound)].join(', '));
        //   }
    };
    Animal.prototype.makeSound = function () {
        console.log(this.sound);
    };
    return Animal;
}());
exports.Animal = Animal;
