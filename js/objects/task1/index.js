/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

function addPropertyV2(obj, key, value) {
  // input: target, sourceObj ... sourceobjN,
  // output: newObj
  return Object.assign(obj, { [key]: value });

  // bad
  //Object.assign(obj, { [key]: value });
  //return obj;
}

function addPropertyV3(obj, key, value) {
   return { ...obj, [key]: value };
}

function addPropertyV4(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

// rest operator
function sum(...args) {
    console.log(args);
}

console.log(sum(1, 9, 0))
console.log(sum());

// 
const userObj = { name: 'Jane', balance: 100, city: 'Kyiv'};
const {name, ... obj} = userObj;

console.log(name);
console.log(obj);


// arr destruct
const arr = [1, 5, 10, -77];
const [num1, num2, ...newArr] = arr;
console.log(newArr)



// examples
const transaction = {
  value: 170,
};
addPropertyV1(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }


const population = {
    population: 43000000,
}

console.log(addPropertyV3(population, 'country', 'Ukraine'));


const obj1 = {};
console.log(addPropertyV3(obj1, 'name','vasya'));
console.log('after:', obj1)

const obj2 = {name: 'vasya'};
console.log(addPropertyV3(obj2, 'age', '17'));
console.log('after:', obj2);

const obj3 = { name: 'vasya' };
console.log(addPropertyV3(obj2, 'name', 'Ivan'));
console.log('after:', obj3);