// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

//algo
// 1 iterate 1 .. num
// 2 check if number is prime
// 2. 1  iterate 1 .. number
// 2. 2 if number % index === 0 => count += 1
// 2. 3 if counter >= 2 => is not prime
// 3 if prime => console

/**
 * @param {number} num
 * @return {undefined}
 */


// problems 
// 1 loop inside loop
// 2
function getPrimes(num) {
    console.log('NUM ', num);
  for (let number = 2; number <= num; number +=1) {
    console.log('CHECKING IF NUMBER IS PRIME ' + number)
    let counter = 0;

    for (let index = 1; index < number; index +=1) {
        console.log('STEP ' + index)
        if (number % index === 0) {
            console.log('COUNTER FOUND ' + index)
            counter += 1
        }
    }

     console.log('FOR NUMBER  ' + number + 'COUNTER FOUND ' + counter);
    if (counter <= 2) {
console.log(number)
    }
  }
}


// refactored 
// input: number
// output:boolean

function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}


function getPrimes (num) {
  for (let number = 2; number <= num; number += 1) {
    if (isPrime(number)) {
      console.log(number)
    }
  }
}



// test
//

//алгоритм
// 1 итерируемся по массиву 
// 2 смотрим каждый шаг в консоли
 // 3 проверяем каждое число на то простое ли оно 
 //4 выводим в консоль подходящие числа

// function getPrimes(num) {
//   console.log('NUM ', num);

//   for (let number = 2; number <= num; number++) {
//     console.log('CHECKING IF NUMBER IS PRIME ' + number);

//     for (let index = 2; index <= number; index++) {
//      console.log('STEP ' + index);

//       if (number % index === 0 && index < number) {
//         break;
//       } 
//        if (index === number) {
//         console.log(number);
//       }
//     }
//   }
// }

// getPrimes(17);
