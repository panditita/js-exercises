findInArray = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      return array[i];
    }
  }
};

let input = [11, 12, 13, 14, 15, 16];
function isOdd(value) {
  return value % 2 === 1;
}

console.log(findInArray(input, isOdd));

//expectedOutput
//input = [ 1, 2, 3, 4, 5, 6 ]
//results = [1]
