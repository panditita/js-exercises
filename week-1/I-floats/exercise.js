var numberOfStudents = 15;
var numberOfMentors = 8;
var totalInt = numberOfMentors + numberOfStudents;
var mentorsPercentage;
var studentsPercentage;

calculatePercentage = (toPercentage, total) => {
  return Math.round((toPercentage * 100) / total);
};

console.log(
  "Percentage Mentors: " + calculatePercentage(numberOfStudents, totalInt) + "%"
);
console.log(
  "Percentage Students: " + calculatePercentage(numberOfMentors, totalInt) + "%"
);
