const numbersList = [-4, 500, -1, 10, 11, 2];

// input: callback
// output: new arr

// input: el, index (optional)
// output: new el
// const mapRes = numbersList.map(el => {
//     return el * el;
// })

// console.log(mapRes)

// const mapRes = numbersList.map((el) => {
//   if (el > 0) {
//     return el * el;
//   }
//   return el > 0 ? el ** 2 : el;
// });

// console.log(mapRes);

// const mapRes = numbersList.map((el) => (el > 0 ? el ** 2 : el));

// console.log(mapRes);

// // find
// // input: callback
// // output: element | undefined

// // callback:
// // input: element
// // output: element

// const findRes = numbersList.find((el) => el > 100);

// console.log(findRes)

// forEach
// // input: callback
// // output: undefined

// // callback:
// // input: element
// // output: element
const numbersList1 = [-4, 500, -1, 2];
const forEachRes = numbersList1.forEach((el) => {
  if (el > 0) {
    console.log(el);
  }

  // в фор ич не работает ретерн
  return 'Error';
  // correct ternary
  //   console.log(el > 0 ? el : 'Error');
});

// tertnary
// condition ? A : B

// reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 536, 41];

// forEach
// // input: callback, accInitValue
// // output: undefined

// // callback:
// // input: element
// // output: element

// transactions.reduce((acc, el) => {
//   return acc + el;
// }, 0);

// console.log(transactions)

const transactions1 = [5, 0, 8, 10, -4, -50, 220, 1203, 536, 41];
const reduceRes = transactions1.reduce((acc, el) => {
    console.log('acc ' + acc);
    console.log('el ' + el);
  if (el < 0) {
    acc += el;
  }
  return acc;
}, 0);

console.log(reduceRes);
