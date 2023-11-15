// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let name = "Ryan";
let age = 28;
let gamer = true;
let programmer;
let favoriteSport = null;

// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof name,
  typeof age,
  typeof gamer,
  typeof programmer,
  typeof favoriteSport
);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let statement = `I am ${age} and I cannot wait to become a ${programmer}!`;
console.log(statement);
// reassign the value of the variable that references "null"
favoriteSport = "basketball";
// print the value and its type
console.log(favoriteSport, typeof favoriteSport);
// print a variable that causes a ReferenceError
let favoriteColor = "Orange"; //this was added after the last requirement
console.log(favoriteColor);
// alter the previous line to no longer cause a ReferenceError
//let favoriteColor = "Orange";
