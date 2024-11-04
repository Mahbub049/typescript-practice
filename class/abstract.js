// THEROY
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
// Abstraction helps us to hide the implementation of something
// Class declared with abstract keyword
// Object can not be created from abstract class
// If a class extends abstract class; it must inherit all the abstract methods
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name, animalSound) {
        var _this = _super.call(this) || this; // calling constructor of parent class
        _this.animalName = name;
        _this.animalSound = animalSound;
        return _this;
    }
    Mammal.prototype.makeSound = function () {
        console.log("The sound of ".concat(this.animalName, " is ").concat(this.animalSound));
    };
    return Mammal;
}(Animal));
var cat = new Mammal("Cat", "Meow");
cat.makeSound(); // Output: The sound of Cat is Meow
