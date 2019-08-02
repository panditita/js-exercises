/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations have been provided.
  Using .filter(), .map(), and any other array methods required, create:
  - a new array of stations with travel by river boat
  Note: only the names should be printed, not the means of transport.
*/

var stationTransportOptionsPairs = [
  ["Angel", ["tube", "bus"]],
  ["London Bridge", ["tube", "bus", "river boat"]],
  ["Tower bridge", ["tube", "bus"]],
  ["Greenwich", ["tube", "bus", "river boat"]]
];

// First map, loops into the object and creates individual arrays
var stationsWithRiverBoat = londonLocations.map(oneLocation => {
  var visitLocations = [];
  // Second map, loops into each element of each array
  oneLocation.map(withBoat => {
    // Then it compares each string agains 'boat' to find a match
    var location = [];
    if (withBoat.match("boat")) {
      // if the comparison is valid then it stores that value into location and location into Visit
      location.push(oneLocation[0]);
      visitLocations.push(location.concat());
    }
  });
  return visitLocations.filter(empty => {
    return empty != null;
  });
});

console.log(stationsWithRiverBoat);

// Expected output:
// ["London Bridge", "Greenwich"]
