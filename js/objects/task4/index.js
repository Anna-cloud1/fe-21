'use strict';
// input: object
// output: boolean

// algo
// 1 сравниваем ключи объектов (с помощью Object.keys который преобразовывает ключи в массив) если не равны возвращаем фолз;
// 2 итерируем по массиву 
// 3 if содержание  не равно возвращаем фолз
// /**
//  * @param {object} firstObj
//  * @param {object} secondObj
//  * @return {boolean}
//  */
// function compareObjects(firstObj, secondObj) {
//   const firstKey = Object.keys(firstObj);
//   const secondKey = Object.keys(secondObj);

//   if (firstKey.length !== secondKey.length) {
//     return false;
//   }
//   for (let index = 0; index < firstKey.length; index += 1) {
//     const prop = firstKey[index];

//     if (secondObj[prop] !== firstObj[prop]) {
//       return false;
//     }
//   }

//   return true;
// }

// algo
// 1 сравниваем ключи объектов (с помощью Object.keys который преобразовывает ключи в массив) если не равны возвращаем фолз;
// 2 сравниваем ключи и значения

function compareObjects(firstObj, secondObj) {
  const firstKey = Object.keys(firstObj);
  const secondKey = Object.keys(secondObj);

if (firstKey.length !== secondKey.length) {
    return false;
  }
return firstKey.every((el) => firstObj[el] === secondObj[el]);
}


// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true

// const property = Object.values(obj1);
// console.log(property);
