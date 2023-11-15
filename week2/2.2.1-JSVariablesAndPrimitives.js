// create a constant variable (const)
const name = "Ryan";
// create a variable that can be reassigned (let)
let language = "Italian";
console.log(typeof language);
// create three variables and assign them values of different data types (=)
let age = 28;
const whatIf = true;
const fancyPants = "cat's pajamas";
// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof age);
console.log(typeof fancyPants);
// change the value referenced by a variable (dynamic typing)
language = 7;
// print the type of the variable you just changed (typeof)
console.log(typeof language);
// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?

// eslint-disable-next-line prettier/prettier
console.log("Hello, my name is " + name + ", and I am learning " + language + ". I have been practicing for only " + age + " weeks, so my status as a master is: " + whatIf + ".");
