// WE CAN DECLARE OBJECT IN TWO WAY
// 1. let user1: { userName: string, userId: number };
// 2. BELOW
let user1: object;
user1 = { userName: "Mahbub", userId: 101 };
console.log(user1);

let users: object[] = [];
// users = [{name: "Mahbub", roll: 49}];
let user2: object = { userName: "Mahbub", userId: 101 };
users.push(user2);
console.log(users)