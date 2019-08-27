/*
  Using the .map() method, return a new array with `numbers` multiplied by 100
  Write multiple solutions using different syntax (as shown in the README)
*/

// Complete this function -->
var numbers = [1, 2, 3];
var numbers2 = [10, 20, 30, 50, 60, 70, 80, 90, 100];

multiplyBy100 = number =>
  number.map(number => {
    return number * 100;
  });

console.log(multiplyBy100(numbers));

console.log(multiplyBy100(numbers2));

// DEBUG
// Debug your function by
// - calling it with some sample input
// - logging the output to the console

module.exports = { multiplyBy100 };
