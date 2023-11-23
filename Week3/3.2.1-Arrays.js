// create an Array using an Array literal

const Thanksgiving = ["turkey", "potatoes", "corn", "rolls", "pie"];

// access the 1st item in the Array
console.log(Thanksgiving[0]);
// access the last item in the Array
console.log(Thanksgiving[4]);
// print the length of the Array
console.log(Thanksgiving.length);
// use the length property to access the last item in the Array
console.log(Thanksgiving[Thanksgiving.length - 1]);
// with for...of, loop over the Array, modify the value and add to a different Array

const food = [];

for (let thanks of Thanksgiving) {
  let output = `delicious ${thanks}`;
  food.push(output);
}

console.log(food);

const checks = [5, 20, 35, 20, 25];
let annualSalary = 0;

for (let gross of checks) {
  let net = gross - 3;
  annualSalary += net;
};

console.log(annualSalary);
