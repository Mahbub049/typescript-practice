class User {
    userName: string;
    age: number;
  
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
  
    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    };
  }
  
  class Students extends User {
    studentId: number;
  
    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }
    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }
  }
  
  let student01 = new Students("keya", 31, 1302020015);
  student1.display();
  