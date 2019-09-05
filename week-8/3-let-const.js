// Refactor this code to make appropriate use of `let` and `const`

function getCircleArea(radius) {
  const pi = Math.PI;
  let rSquared = Math.pow(radius, 2);

  return pi * rSquared;
}

function getCircleAreas(radiusArr) {
  let areasArr = [];

  for (let i = 0; i < radiusArr.length; i++) {
    const circleArea = getCircleArea(radiusArr[i]);
    areasArr.push(circleArea);
  }

  return areasArr;
}
