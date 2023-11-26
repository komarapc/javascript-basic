type Person = {
  id: number;
  name: string;
  age: number;
  address?: string[];
  helloWorld?: () => void;
};

const person: Person = {
  id: 1,
  name: "Jack",
  age: 32,
  address: ["Tokyo", "Japan"],
};

enum GENDER {
  FEMALE,
  MALE,
} // 0, 1;

const person2: Person & { gender: GENDER } = {
  id: 1,
  name: "Jack",
  age: 32,
  gender: GENDER.FEMALE,
  helloWorld: () => console.log("hello world"),
};

person2.helloWorld?.();

const dataVoid = () => {
  console.log("hello");
};

dataVoid();

console.table(person2);

const anyVariable: any = {};

const { age, address } = person; // Destructuring
console.log(age, address);
console.log(person);

const dataArray: Person[] = [
  {
    id: 1,
    name: "Jack",
    age: 32,
    address: ["Tokyo", "Japan"],
  },
  {
    id: 3,
    name: "Melissa",
    age: 32,
    address: ["Tokyo", "Japan"],
  },
  {
    id: 2,
    name: "emelie",
    age: 30,
    address: ["Tokyo", "Japan"],
  },
];

const blackListPerson: Person[] = [
  {
    id: 1,
    name: "Jack",
    age: 32,
    address: ["Tokyo", "Japan"],
  },
];

console.table(dataArray);

dataArray.forEach((data) => {
  console.log(data.name);
});

for (const data of dataArray) {
  console.log(data.age);
}

const copy = dataArray.map((data, index: number) => ({
  ...data,
  id: index,
  dateOfBirth: new Date().getTime(),
}));

console.table(copy);

const filterAge = dataArray.filter((data) => data.id === 1);

console.log(filterAge);

const findId = dataArray.find((data) => data.id === 1);
console.log(findId);

// sorting data

const sortByAge = dataArray.sort((a, b) => {
  if (a.age > b.age) {
    return 1;
  }
  return -1;
});

console.table(sortByAge);

// sort by name
const sortByName = dataArray
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
  .map((data, index) => ({
    ...data,
    id: index,
    name: data.name.toUpperCase(),
  }));

console.table(sortByName);

const showUnBlackList = dataArray.filter((data) => {
  const isBlackList = blackListPerson.find((person) => person.id === data.id);
  return !isBlackList;
});

console.log({ showUnBlackList });

const cart = [1000, 4000, 5000];
const total = cart.reduce((prev, next) => prev + next, 0);
console.log({ total });

/**
summary of data types
- string
- number
- boolean
- object
- array
- enum
- any
- void
- null
- undefined
*/

/**
summary of array
- forEach
- map
- filter
- find
- sort
- reduce
*/

/**
summary of object
- destructuring
- spread operator
- optional chaining
- nullish coalescing
*/

// Path: learn2.ts
