var UserClass = /** @class */ (function () {
    // constructor
    function UserClass(userName, age) {
        this.userName = userName;
        this.userAge = age;
    }
    // methods
    UserClass.prototype.display = function () {
        console.log("Name: ".concat(this.userName, ", Age: ").concat(this.userAge));
    };
    return UserClass;
}());
// class object
var user01 = new UserClass("Mahbub Sarwar", 24);
user01.display();
