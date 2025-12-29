import { Animal, FoodChainType } from "./animal.js";
console.log(FoodChainType.Carnivorous);
console.log(FoodChainType.Herbivorous);
console.log(FoodChainType.Omnivorous);
class Dog extends Animal {
    constructor() {
        super({
            name: 'Dog',
            sound: 'Wof!',
            family: 'Canidae',
            foodChainType: FoodChainType.Carnivorous,
        });
    }
}
let dog = new Dog();
console.log(dog);
console.log(dog.whoAmI());
console.log(dog.makeSound());
