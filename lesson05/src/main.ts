type One = string;
type two = string | number;
type Three = 'hello';

//convert to more or less specific
let a: One = 'hello';
let b = a as string; //less specific
let c = a as Three; //more specific

let d = <One>'world';
let e = <string | number>'world';

const addOrConcat = (
  a: number,
  b: number,
  c: 'add' | 'concat'
): number | string => {
  if (c === 'add') return a + b;
  return '' + a + b;
};

let myVal: string = addOrConcat(2, 2, 'concat') as string;
let nextVal: number = addOrConcat(2, 2, 'add') as number;

// 10 as srting;
10 as unknown as string;

//The DOM
const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('#img') as HTMLImageElement;
//this way do not work in tsx file
const nextImg = <HTMLImageElement>document.getElementById('#img');

img.src;
myImg.src;
