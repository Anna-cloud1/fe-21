const numbersList1 = [1, 2, 3, 4, 5];
console.log(numbersList1);

// (!)
// input: none
// output: number
console.log('ARR BEFORE POP ', numbersList1 )
const popRes = numbersList1.pop()
console.log(popRes)
console.log('ARR AFTER POP ', numbersList1);




// input: number (any type)
// output: number (new length)

const numbersList2 = [1, 2, 3, 4, 5];
console.log('ARR BEFORE PUSH ', numbersList2);
pushRes =  numbersList2.push(3);
console.log(pushRes);
console.log('ARR AFTER PUSH ', numbersList2);





// input: number (any type)
// output: number (new length)

const numbersList3 = [1, 2, 3, 4, 5];
console.log('ARR BEFORE UNSHIFT ', numbersList3);
unshiftRes =  numbersList3.unshift(45);
console.log(unshiftRes);
console.log('ARR AFTER UNSHIFT ', numbersList3);

