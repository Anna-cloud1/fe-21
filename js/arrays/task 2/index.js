/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

// input: number, number, function
// output: undefined

function sum(from, to, resolver) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }
  resolver(sum)
}

// input: number
// output: undefined
function printResult(res) {
  console.log(res)
}


// test data
sum(10, 15, printResult)