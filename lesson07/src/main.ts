// interface TransactionObj {
//   //note: index signature
//   readonly [index: string]: number;
// }
interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  Dave: 50, //note: dave is not required but others are
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Books']);

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);

const todaysNet = (transacitons: TransactionObj): number => {
  let total = 0;
  for (const transaciton in transacitons) {
    total += transacitons[transaciton];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40

console.log(todaysTransactions['Dave']);
//////////////////////////////////////////////////////////////

interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'John',
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});
