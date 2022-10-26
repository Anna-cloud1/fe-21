console.log('Hello, JS!');

//func 1
function getSenseOfLife() {
  return 42;
}

//opinion 1
console.log('getSenseOfLife func:');
const res = getSenseOfLife();
console.log(res);

//opinion 2
console.log(getSenseOfLife());

// func 2
function getSquared(num) {
  return num * num;
}

//test data
console.log('getSquared func:');
console.log(getSquared(5));
console.log(getSquared(0));
console.log(getSquared(-7));
console.log(getSquared('t'));
console.log(getSquared(undefined));

//func 3

function sum(a, b) {
  return a + b;
}

//test data
console.log('sum func:');
console.log(sum(4, 9));
console.log(sum(55, 78));
console.log(sum(23, 1));

//func 4

function getMessage(age) {
  console.log('I am ' + age + ' years old');
}

//
getMessage(44);
function getMessage(age) {
  if (age < 0 || typeof age !== 'number') {
    return null;
  }

  console.log(`I am ${age} years old`);
}

console.log('getMessage func:');
console.log(getMessage(-9));
console.log(getMessage(11));
console.log(getMessage(undefined));
console.log(getMessage(null));

// func 5

const mult = (a, b) => a * b;

//test data
console.log('mult func:');
console.log(mult(11, 9));
console.log(mult(5, 4));
console.log(mult(3, 34));



// func 6

const getMagicNumber = () => 17;


//test
console.log('getMagicNumber func:');
console.log(getMagicNumber());