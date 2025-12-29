export var FoodChainType;
(function (FoodChainType) {
    FoodChainType["Carnivorous"] = "carnivorous";
    FoodChainType["Herbivorous"] = "herbivorous";
    FoodChainType["Omnivorous"] = "omnivorous";
})(FoodChainType || (FoodChainType = {}));
export class Animal {
    name;
    sound;
    family;
    foodChainType;
    constructor(params) {
        this.name = params.name;
        this.sound = params.sound || '';
        this.family = params.family;
        this.foodChainType = params.foodChainType;
    }
    whoAmI() {
        console.log(`I am a ${this.name}, my family is ${this.family}. My diet is ${this.foodChainType}.`);
        //   if (this.sound) {
        //     console.log([...Array(2).fill(this.sound)].join(', '));
        //   }
    }
    makeSound() {
        console.log(this.sound);
    }
}
