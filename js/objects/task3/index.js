// input: object
// output: array

// algo
// 1 create res array
// 2 get key/values (..entries)
// 3 add new id key to value
// 4 push to the array (map)
// 5 sort obj by ages (sort)

// solution 1

// const getCustomersList = (obj) => {
//   const resArr = [];
//   const entries = Object.entries(obj);
//   console.log(entries);

//   for (let index = 0; index < entries.length; index += 1) {

//     const entry = entries[index];
//     const key = entry[0];
//     const value = entry[1];

//     const resObj = { ...value, id: key };
//     resArr.push(resObj);

//     console.log(resArr);
//   }
// };

// solution 2

// const getCustomersList = (obj) => {
//   const resArr = [];
//   const entries = Object.entries(obj);
//   console.log(entries);

//   for (let index = 0; index < entries.length; index += 1) {
//   resArr.push({ ...entries[index][1], id: entries[index][0] });
//   }
//     resArr.sort((a, b) => a.age - b.age);
//     return resArr;
// };

// solution 3

const getCustomersList = (obj) =>
  Object.entries(obj)
    .map(([key, value]) => ({ ...value, id: key }))
    .sort((a, b) => a.age - b.age);

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 20,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 17,
  },
  'customer-id-4': {
    name: 'John',
    age: '22',
  },
};

console.log(getCustomersList(customers));
