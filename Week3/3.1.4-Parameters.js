// Named Parameters
// write a function that takes two named parameters:

function functionWithTwoParams(num1, num2) {
  console.log(num1, num2); // console.log prints the parameters
  return num1 + num2; // to return the parameters added together, you have to invoke the function within a console.log
}

// print each named parameter,
// then return the parameters added together

// invoke the function and pass in two numbers
console.log(functionWithTwoParams(1, 2));
// invoke the function and pass in more than two numbers
console.log(functionWithTwoParams(1, 2, 3));
// invoke the function and pass in only one number
console.log(functionWithTwoParams(1));
// change the function to set default values for the parameters

function functionWithTwoDefaultParams(num1 = 4, num2 = 5) {
  console.log(num1, num2);
  return num1 + num2;
}

// again, invoke the function and pass in only one number
console.log("Without arguments: " + functionWithTwoDefaultParams());
console.log("With arguments: " + functionWithTwoDefaultParams(1, 2));

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParam(num1, num2, ...num3) {
  console.log(num1, num2);
  console.log(num3);
  return num1 + num2;
}
// again, invoke the function and pass in more than two numbers
functionWithRestParam(1, 2, 3, 4, 5);
