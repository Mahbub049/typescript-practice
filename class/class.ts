class UserClass{
    // a class can have properites, methods, constructors, etc
    // properties
    userName:string;
    userAge:number;

    // constructor
    constructor(userName: string, age: number){
        this.userName = userName;
        this.userAge = age;
    }

    // methods
    display(): void{
        console.log(`Name: ${this.userName}, Age: ${this.userAge}`);
    }
}

// class object
let user01 = new UserClass("Mahbub Sarwar", 24);
user01.display();