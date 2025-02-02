/*
  SALES TAX
  =========
  A business requires a program that calculates how much sales tax to charge
  Sales tax is 20% of the price of the product
*/

function calculateSalesTax(saleAmount, taxRate) {
  var taxRate = 20;
  return (saleAmount * taxRate) / 100;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var salesTax = calculateSalesTax(price);

console.log("Product: " + product);
console.log("Price: £" + price);
console.log("Sales tax: £" + salesTax);
console.log("Total: £" + (price + salesTax));
