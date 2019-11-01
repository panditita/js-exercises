mapArray = (array, func) => {
  let results = [];

  array.forEach(element => {
    results.push(func(element));
  });

  return results;
};

let input = [1, 2, 3, 4, 5, 6];

function isOdd(value) {
  return value % 2 === 1;
}

console.log(mapArray(input, isOdd));
console.log(input);
//expectedOutput
//input = [ 1, 2, 3, 4, 5, 6 ]
//results = [true, false, true, false, true, false ]
