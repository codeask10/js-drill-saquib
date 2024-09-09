/*
    Complete the following functions.
    These functions only need to work with arrays.
    A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
    The idea here is to recreate the functions from scratch BUT if you'd like,
    feel free to Re-use any of your functions you build within your other functions.
    **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
    You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating

*/
function each(elements, cb) {
  // Do NOT use forEach to complete this function.
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each

  if (!Array.isArray(elements)) {
    return "Invalid Array Input!";
  }
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i, elements);
  }
}

function map(elements, cb) {
  // Do NOT use .map, to complete this function.
  // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  if (!Array.isArray) {
    return "Invalid Array";
  }

  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i, elements);
  }
  elements.length > 0 ? console.log(elements) : "";
}

export {each,map};