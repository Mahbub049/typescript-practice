// enum - store constants, duplicate values not allowed
// enum: numeric, string, heterogenous

// numeric
enum UserReq {
    readData = 1,
    deleteData = 3,
    saveData
}

console.log(UserReq);

// string enum
enum ReqType {
    readData = "Name",
    deleteData = "Hero",
    setData = "Try",
}

console.log(ReqType);
console.log(ReqType.setData);
console.log(ReqType["setData"]);

// heterogenous enum
enum ReqType3 {
    readData = "Name",
    deleteData = "Hero",
    setData = 3,
}
console.log(ReqType3);