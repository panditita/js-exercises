/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

// Write your code here

whatDanielDoes = (name, danielsRole) => {
  if (danielsRole === "mentor") {
    console.log("Hi, I'm " + name + ", I'm a mentor.");
  } else {
    console.log("Hi, I'm " + name + ", I'm a student.");
  }
};

whatDanielDoes(name, danielsRole);

/* 
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
module.exports = {
  danielsRole
};

/*
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
