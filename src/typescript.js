var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var addElement = function (arr, value) {
    var newArr = __spreadArray([value], arr, true);
    return newArr;
};
var someArr = [1, 2, "3", true];
var twoArr = addElement(someArr, "sda");
