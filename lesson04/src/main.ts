//* Type Alieases
type stringOrNumber = string | number;
type stringOrNumberArr = (string | number)[];

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type UserId = stringOrNumber;

//* Literal types
//note: only John(value) is valid
let myName: 'John';

let userName: 'Dave' | 'John' | 'Amy';
userName = 'Amy';

//*Functions
const sum = (a: number, b: number): number => a + b;

const logMsg = (message: any) => console.log(message);
logMsg('hello');
logMsg(sum(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

//~function type blueprint
type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//   (a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
  return c * d;
};

//* optional parameters
//note: if you have oprional parameter in function it should be last one
const addAll = (a: number, b: number, c?: number): number => {
  //note: TypeGuard
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
};

//~default props
const sumAll = (a: number = 10, b: number, c: number = 20): number => {
  return a + b + c;
};
logMsg(sumAll(undefined, 6));

logMsg(addAll(1, 2, 3));
logMsg(addAll(3, 2));

//*Rest parameters
const total = (...nums: number[]): number => {
  return nums.reduce((a, b) => a + b);
};
logMsg(total(1, 2, 3, 4, 5, 6, 7));

//* Never type
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    //note: without break this function will return never type
    if (i === 10) break;
  }
};

const numberOrString = (value: number | string): string => {
  if (typeof value === 'string') return 'string';
  if (typeof value === 'number') return 'number';
  return 'Error: This should never happen';
};
