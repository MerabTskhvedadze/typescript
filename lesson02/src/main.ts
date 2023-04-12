let username: string;
let age: number;
let isDying: boolean;

//note: album can be any type
let album: any;

//note: postId can only be string or number, this is called union type
let postId: string | number;

username = 'jemali';
age = 99;
isDying = true;
album = false;

postId = 'two';
postId = 2;

//note: if types don't need to be couersed into
//note: another type for sum it is valid ts
const sumNums = (a: number, b: number) => {
  return a + b;
};
const strSumToNum = (a: string, b: number) => {
  return a + b;
};

//note: booleans true and false is referred to with a zero for false
//note: and one for true but you might wanna handle it with number
//note: or the words true and false as boolean
let isActive: number | boolean;

//note: union type can be more than two, it is not limited
let zipCode: string | number | boolean;

let re: RegExp = /\w+/g;
