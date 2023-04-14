//note: ts says all of this arrays are union data
//~string data
var stringArr = ['one', 'hey', 'John'];
//~string | number data
var guitars = ['Strat', 'Les Paul', 5150];
//~string | number | boolean data
var mixedData = ['EVH', 1984, true];
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
var test = [];
//note: it is also empty but only string are valid init
var bands = [];
//* Tuple
//note: in tuples we are specifying places for data types
var myTuple = ['john', 34, false];
var mixed = ['john', 1, false];
// myTuple[0] = 1 //note: invalid value
myTuple[1] = 1; //note: valid
//*Objects
var myObject;
//note: in js arrays are also typeof objects,
//note: if myObject variable will be resigned as array it would be valid
myObject = [];
var exampleObj = {
  prop1: 'john',
  prop2: true,
};
// exampleObj.prop1 = false //note: invalid value
exampleObj.prop1 = 'amanda'; //note: valid
//note: evh variables types is defined in Guitarist type object
var evh = {
  name: 'Edna',
  active: false,
  album: [1994, 1999, 'E4U'],
};
var jp = {
  name: 'John',
  active: true,
  album: ['I', 'II', 'V'],
};
//note: if we resign evh to jp it'll be valid, because both have same types
evh = jp;
var jz = {
  name: 'Jordan',
  age: 40,
};
var bg = {
  name: 'Baggie',
  active: true,
  age: 40,
};
//* specifying function argument types
var greetGuitarist = function (guitarist) {
  return 'Hello '.concat(guitarist.name, '!');
};
console.log(greetGuitarist(jp));
//*Enums
//~Unlike most TypeScript features, Enums are not a type-level adition
//~ but something added to the language and runtime
var Grade;
(function (Grade) {
  //note: enumerating will start from 1
  Grade[(Grade['U'] = 1)] = 'U';
  Grade[(Grade['D'] = 2)] = 'D';
  Grade[(Grade['C'] = 3)] = 'C';
  Grade[(Grade['B'] = 4)] = 'B';
  Grade[(Grade['A'] = 5)] = 'A';
})(Grade || (Grade = {}));
console.log(Grade.U);
