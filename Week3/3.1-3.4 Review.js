//3.1 - 3.4 Review
// Create a function with 3 parameters.
// Create a variable OUTSIDE of the scope of the function, but do not assign it a value.
//Those parameters should be utilized in a string, and the string itself should be assigned to the variable that was created.
// Return the variable.
// Invoke the function and pass in 3 arguments.
//Print the variable.

// User provides their name.
// On the web page, display their name and the weather. The weather will be temp and condition.

let greeting;

function weatherGreeting(name, temp, condition) {
  greeting = `Hello ${name}, it is currently ${temp} degrees and is ${condition}.`; // in order to use this string, we have to save its value. This is done by reassigning it to greeting.
  return greeting; // this allows the string saved to greeting to be accessible on the global scope. It reassigns the value of greeting to the new value.
}

console.log("Before invocation" + greeting);

weatherGreeting("Ryan", 44, "clear skies");

console.log("After invocation" + greeting);
