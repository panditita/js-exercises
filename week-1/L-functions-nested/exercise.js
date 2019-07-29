var numberOfStudents = 15;
var numberOfMentors = 8;
var totalInt = numberOfMentors + numberOfStudents;

calculatePercentage = (toPercentage, total) => {
  return Math.round((toPercentage * 100) / total);
};

createMessage = (percentage, x) => {
  if (x === "mentors") {
    return "Percentage mentors: " + percentage + "%";
  } else {
    return "Percentage students: " + percentage + "%";
  }
};

console.log(
  createMessage(calculatePercentage(numberOfStudents, totalInt), "students")
);
console.log(
  createMessage(calculatePercentage(numberOfMentors, totalInt), "mentors")
);
