// Access Modifiers: Public, Private, protected, read-only
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
var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    ;
    return User;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Students.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age, ", id: ").concat(this.studentId));
    };
    Students.prototype.setStudentId = function (studentId) {
        this.studentId = studentId;
    };
    Students.prototype.getStudentId = function () {
        return this.studentId;
    };
    return Students;
}(User));
var student01 = new Students("keya", 31, 1302020015);
student01.setStudentId(210);
console.log("Private Data: " + student01.getStudentId()); //we can access and modify as these two are private
student01.display();
var User1 = new User("Mahbub", 49);
User1.userName = "Sarwar"; //This will show error for protected, private
console.log("Public Data: " + User1.userName); //we can access and modify as these two are public
