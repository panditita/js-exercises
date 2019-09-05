// Turn getFlightDetails() into an async function and use the .then(..) method to implement the following functions in order
// - getFlightDetails()
// - selectFlight(..)
// - bookFlight(..)
//
// Hint: use the `async` keyword to create an async function

async function getFlightDetails() {
  let response = "LDN -> JPN";
  await new Promise(resolve => setTimeout(resolve, 300));
  return console.log(response);
}

function selectFlight(flight) {
  return console.log(`Flight ${flight} selected`);
}

function bookFlight(flight) {
  return console.log(`Flight ${flight} booked`);
}

getFlightDetails()
  .then(selectFlight("flight"))
  .then(bookFlight("flight"))
  .catch(error => console.log(`Something went wrong ${error}`));
