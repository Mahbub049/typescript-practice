let Users: User[] = [];
let User1 = { userName: "Mahbub", userId: 101 };
let User2= { userName: "Sarwar", userId: 101 };
let User3= { userName: "Shafi", userId: 101 };
Users.push(User1, User2, User3);

// Custom Type
type User = {userName: string, userId: number};

let User4 : User = {userName: "Jannatul", userId: 102};
Users.push(User4);
console.log(Users);

// Setting Values
type requestType = "GET" | "POST";
let getRequestType : requestType;
getRequestType = "GET";

function requestHandler(requestType: requestType){
console.log(requestType);
}

requestHandler("GET");