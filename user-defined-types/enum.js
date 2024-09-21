// enum - store constants, duplicate values not allowed
// enum: numeric, string, heterogenous
// numeric
var UserReq;
(function (UserReq) {
    UserReq[UserReq["readData"] = 1] = "readData";
    UserReq[UserReq["deleteData"] = 3] = "deleteData";
    UserReq[UserReq["saveData"] = 4] = "saveData";
})(UserReq || (UserReq = {}));
console.log(UserReq);
// string enum
var ReqType;
(function (ReqType) {
    ReqType["readData"] = "Name";
    ReqType["deleteData"] = "Hero";
    ReqType["setData"] = "Try";
})(ReqType || (ReqType = {}));
console.log(ReqType);
console.log(ReqType.setData);
console.log(ReqType["setData"]);
// heterogenous enum
var ReqType3;
(function (ReqType3) {
    ReqType3["readData"] = "Name";
    ReqType3["deleteData"] = "Hero";
    ReqType3[ReqType3["setData"] = 3] = "setData";
})(ReqType3 || (ReqType3 = {}));
console.log(ReqType3);
