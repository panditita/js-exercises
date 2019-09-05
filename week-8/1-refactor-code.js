// Refactor the following code using the good coding practices discussed
//
// Add comments where you believe the code could be improved
//
// Make sure to consider if it has/is
// - Good naming
// - Good commenting
// - Clear logic
// - Concise
// - Good formatting
// - DRY
// - Single responsibility
// - Avoiding unnecessary specific number

function myFunction(salary, taxCode, incomeTax1, incomeTax2, ownsCar) {
  var totalIncomeTax = incomeTax1 + incomeTax2;
  var studentLoan = (salary - 17775) * 0.09;
  //var nationalInsurance = null;

  if (taxCode === "1150L") {
    nationalInsurance = salary * 0.1;
  } else if (taxCode === "ST") {
    nationalInsurance = salary * 0.05;
  } else {
    nationalInsurance = salary * 0.08;
  }

  var deductions = [nationalInsurance, totalIncomeTax, studentLoan];

  const salaryAfterDeductions = deductions.forEach(deduction => {
    if (nationalInsurance > 0) {
      return salary - deduction;
    } else if (totalIncomeTax > 0) {
      return salary - deduction;
    } else if (studentLoan > 0) {
      return salary - deduction;
    } else {
      return salary;
    }
  });

  if (salaryAfterDeductions > 0) {
    return salaryAfterDeductions;
  }
  salary;

  console.log(salaryAfterDeductions);

  return (
    "Your gross income is �" +
    salary.toString() +
    " and your net income is �" +
    salaryAfterDeductions.toString() +
    "."
  );
}

console.log(myFunction(28000, "1150L", 1000, 580, false));
