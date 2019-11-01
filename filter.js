filterArray = (array, func) => {
  let result = [];

  array.forEach(element => {
    if (func(element)) {
      result.push(element);
    }
  });
  return result;
};

let input = [1, 2, 3, 4, 5, 6];
function isOdd(value) {
  return value % 2 === 1;
}

//expected value
// [1,3,5]
console.log(filterArray(input, isOdd));
