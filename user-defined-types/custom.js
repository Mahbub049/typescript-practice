var Users = [];
var User1 = { userName: "Mahbub", userId: 101 };
var User2 = { userName: "Sarwar", userId: 101 };
var User3 = { userName: "Shafi", userId: 101 };
Users.push(User1, User2, User3);
var User4 = { userName: "Jannatul", userId: 102 };
Users.push(User4);
console.log(Users);
var getRequestType;
getRequestType = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
