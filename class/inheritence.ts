// PARENT CLASS
class UserInfo{
    userName:string;
    userAge:number;

    constructor(userName: string, age: number){
        this.userName = userName;
        this.userAge = age;
    }

    display(): void{
        console.log(`Name: ${this.userName}, Age: ${this.userAge}`);
    }
}

// CHILD CLASS (INHERITS FROM PARENT)
class Student extends UserInfo{
    // NEW PROPERTY FOR CHILD CLASS
    studentId: number;

    // CONSTRUCTOR INHERITS FROM PARENT
    constructor(userName: string, age: number, studentId: number){
        super(userName, age);
        this.studentId = studentId;
    }

    // OVERRIDING THE display() METHOD
    display(): void{
        console.log(`Name: ${this.userName}, Age: ${this.userAge}, StudentID: ${this.studentId}`);
    }
}

let userNo1 = new UserInfo("Mahbub Sarwar", 24);
let student1 = new Student("Mahbub Sarwar", 24, 102);
userNo1.display();
student1.display();