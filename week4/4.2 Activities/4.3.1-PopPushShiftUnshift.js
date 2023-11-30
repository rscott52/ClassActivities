const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
const popReturn = nums.pop();
const popReturn2 = nums.pop();

console.log(popReturn);
console.log(popReturn2);

// remove each of the first two items with shift(), saving each item to a variable

const popShift = nums.shift();
const popShift2 = nums.shift();

console.log(popShift);
console.log(popShift2);

// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(popShift2);
nums.push(popShift);

nums.unshift(popReturn2);
nums.unshift(popReturn);

console.log(nums);
