// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1")
};

// what will the following lines print?
obj[key]; // the key is 'key'
obj.key; // the key is 1
obj["key"]; // this one prints nothing out.

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
let car = {
  color: "blue",
  fast: true,
  wheels: 4,
  collection: ["spoiler", "racing stripes", "chrome", "stereo"]
};
// Access a value in the "collection" property
console.log(car.collection[1]);
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
let favorites = {
  movie: "Good Will Hunting",
  number: 52,
  color: "orange"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// Use a template literal to print a sentence about your favorite things
console.log(
  `My favorite movie is ${favorites.movie}. In highschool, my jersey number was ${favorites.number}. In my opinion, the best color is ${favorites.color}!`
);

// Access the values "b", 4, and 6 from obj.list
console.log(obj.list[1]);
console.log(obj.list[4]);
console.log(obj.list[5]);
