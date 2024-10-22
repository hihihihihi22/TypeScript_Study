var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//변수명:type 으로 type 을 설정할 수 있다.
var num;
num = 10;
console.log("num:" + num);
var obj = { num: 1, name: "kim" };
var result = __assign(__assign({}, obj), { addr: "노량진" });
