// THEROY

// Abstraction helps us to hide the implementation of something
// Class declared with abstract keyword
// Object can not be created from abstract class
// If a class extends abstract class; it must inherit all the abstract methods

abstract class Animal {
    abstract animalName: string;
    abstract makeSound(): void; //abstract method should have abstract keyword and don't have values
}

class Mammal extends Animal {
    animalName: string;
    animalSound: string;
    makeSound(): void {
        console.log(`The sound of ${this.animalName} is ${this.animalSound}`);
    }

    constructor(name: string, animalSound: string){
        super(); // calling constructor of parent class
        this.animalName = name;
        this.animalSound = animalSound;
    }
}

let cat = new Mammal("Cat", "Meow");
cat.makeSound(); // Output: The sound of Cat is Meow