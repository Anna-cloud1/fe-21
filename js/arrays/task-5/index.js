// // input: arr, callback;
// // output: arr;

// // callback
// // input: el, index, arr
// // output: bool;

// // algo:
// // 0. create result arr
// // 1. iterate arr - loop
// // 2. call callback for each el
// // 3. if callback true => push el
// // 4. after iteration return res arr;

// const filterArrayElements = (arr, callback) => {
//   const resultArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     const el = arr[index];
//     if (callback(el, index, arr)) {
//       resultArr.push(el);
//     }
//   }
//   return resultArr;
// };

// // testData

// const arr = [1, 222, 5, 10, 77];

// const func = (el, index, arr) => index > 2 && el > 5;

// console.log(filterArrayElements(arr, func));

// console.log(
//   filterArrayElements(['Andrew', 'Ivan', 'Jack', 'Jane', 'Mortal'], (el) =>
//     el.toLowerCase().includes('an')
//   )
// );

// input: arr, callback;
// output: arr;

// callback
// input: el, index, arr
// output: bool;

// algo:
// 0. create result arr
// 1. iterate arr - loop
// 2. call callback for each el
// 3. push el to arr
// 4. after iteration return res arr;

const mapArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];
    resultArr.push(callback(el, index, arr));
  }
  return resultArr;
};

// testData

const arr = [1, 222, 5, 10, 77];

const func = (el, index) => index > 2 && el > 5;

console.log(mapArrayElements(arr, func));

console.log(
  mapArrayElements(['Andrew', 'Ivan', 'Jack', 'Jane', 'Mortal'], (el) =>
    el.toLowerCase().includes('an')
  )
);
