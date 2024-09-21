let names: string[] = ["Mahbub", "Sarwar", "Shafi"];
// let names: string[] = [25, "Sarwar", "Shafi"]; Not accepted
console.log(names[0])

//Another way
let rolls: Array<number> = [10, 20, 30];
console.log(rolls)

//Multiple Types
let userId: (string|number)[] = ["Mahbub", 10, 20];
console.log(userId);