// You have been given an array of percetages
// 1. Write a function that formats the numbers into a string with the percentage symbol appended e.g. "10%"
// 2. Declare a new array, `percentagesFormatted`, containing
//    - each item in `percentages` formatted by your function

percentagesFormatted = arr => {
  // const numbertoString = arr.map(String)
  const formatedNumber = [];
  arr.map(String).forEach(numberToString => {
    return formatedNumber.push(numberToString + "%");
  });
  return formatedNumber;
};

var percentages = [1, 23, 92, 18];

console.log(percentagesFormatted(percentages));

/*
  EXPECTED RESULT
  ---------------
  [1%, 23%, 92%, 18%]
*/
