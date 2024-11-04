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
// PARENT CLASS
var UserInfo = /** @class */ (function () {
    function UserInfo(userName, age) {
        this.userName = userName;
        this.userAge = age;
    }
    UserInfo.prototype.display = function () {
        console.log("Name: ".concat(this.userName, ", Age: ").concat(this.userAge));
    };
    return UserInfo;
}());
// CHILD CLASS (INHERITS FROM PARENT)
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // CONSTRUCTOR INHERITS FROM PARENT
    function Student(userName, age, studentId) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    // OVERRIDING THE display() METHOD
    Student.prototype.display = function () {
        console.log("Name: ".concat(this.userName, ", Age: ").concat(this.userAge, ", StudentID: ").concat(this.studentId));
    };
    return Student;
}(UserInfo));
var userNo1 = new UserInfo("Mahbub Sarwar", 24);
var student1 = new Student("Mahbub Sarwar", 24, 102);
userNo1.display();
student1.display();
