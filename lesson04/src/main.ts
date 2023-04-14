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
const sum = (a: number, b: number) => a + b;

const logMsg = (message: any) => console.log(message);
logMsg('hello');
logMsg(false);
logMsg(5);
