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

var stationsWithRiverBoat = stationTransportOptionsPairs
  .filter(oneLocation => {
    return oneLocation[1].includes("river boat");
  })
  .map(place => place[0]);

console.log(stationsWithRiverBoat);

// Expected output:
// ["London Bridge", "Greenwich"]
