"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  function that takes an array of integers as input and returns the sum of all the numbers(run tsc task2.ts)
function sumOfArray(arr) {
    var sum = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        sum += num;
    }
    return sum;
}
var array = [10, 5, 4, 12, 50];
var result = sumOfArray(array);
console.log(result);
