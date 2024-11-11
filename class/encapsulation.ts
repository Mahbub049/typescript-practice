// Access Modifiers: Public, Private, protected, read-only

class User {
    public userName: string; //by default public
    // protected userName: string; //any other class can extend this
    // private userName: string; //only accessible in the class only
    public age: number;
  
    constructor(userName: string, age: number) {
      this.userName = userName;
      this.age = age;
    }
  
    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    };
  }
  

  class Students extends User {
    private studentId: number;
  
    constructor(userName: string, age: number, studentId: number) {
      super(userName, age);
      this.studentId = studentId;
    }

    display(): void {
      console.log(
        `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
      );
    }

    setStudentId(studentId:number):void {
      this.studentId = studentId;
    }

    getStudentId(): number {
      return this.studentId;
    }
  }
  
  let student01 = new Students("keya", 31, 1302020015);
  student01.setStudentId(210);
  console.log("Private Data: "+student01.getStudentId()) //we can access and modify as these two are private
  student01.display();
  
  let User1 = new User("Mahbub", 49);
  User1.userName = "Sarwar";  //This will show error for protected, private
  console.log("Public Data: "+User1.userName) //we can access and modify as these two are public