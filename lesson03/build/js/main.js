"use strict";
//note: ts says all of this arrays are union data
//~string data
let stringArr = ['one', 'hey', 'John'];
//~string | number data
let guitars = ['Strat', 'Les Paul', 5150];
//~string | number | boolean data
let mixedData = ['EVH', 1984, true];
//note: in string array we cant resign it element into another type
//stringArr[0] = 42; //~invalid
stringArr[0] = 'new value'; //~valid
//note: also if value is not string type we cant push into array
// stringArr.push(42) //~invalid
stringArr.push('two'); //~valid
//note: guitars array is union typed its type is string and number
//note: so we can resign its string value to number value
//note: also we can push number or string in this array
//note: only numbers and string are valid
//note: same ptinciples works on mixedData array
guitars[0] = 52; //~valid
// guitars[0] = false; //~invalid
guitars.push(52); //~valid
// guitars.push(false) //~invalid
//note: empty array has any type
let test = [];
//note: it is also empty but only string are valid init
let bands = [];
//* Tuple
//note: in tuples we are specifying places for data types
let myTuple = ['john', 34, false];
