"use strict";
//* Literal types
//note: only John(value) is valid
let myName;
let userName;
userName = 'Amy';
//*Functions
const sum = (a, b) => a + b;
const logMsg = (message) => console.log(message);
logMsg('hello');
logMsg(sum(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
//* optional parameters
//note: if you have oprional parameter in function it should be last one
const addAll = (a, b, c) => {
    //note: TypeGuard
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//~default props
const sumAll = (a = 10, b, c = 20) => {
    return a + b + c;
};
logMsg(sumAll(undefined, 6));
logMsg(addAll(1, 2, 3));
logMsg(addAll(3, 2));
//*Rest parameters
const total = (...nums) => {
    return nums.reduce((a, b) => a + b);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7));
//* Never type
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        //note: without break this function will return never type
        if (i === 10)
            break;
    }
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return 'Error: This should never happen';
};
