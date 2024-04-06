// Function that returns the first two drivers from an array
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);

}
// Testing the returnFirstTwoDrivers function
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

// Function that returns the last two drivers from an array
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
// Test the returnLastTwoDrivers function
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

// Array containing the returnFirstTwoDrivers and returnLastTwoDrivers functions
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers]


// Function that creates a fare multiplier function
    function createFareMultiplier(integer) {
        return function(fare) {
        return fare * integer;
    };
}
// Test the createFareMultiplier function
    console.log(createFareMultiplier(4))

    // Function that doubles the fare
    const fareDoubler = function createFareMultiplier(fare){
        return fare * 2
    }
    createFareMultiplier(100)

// Function that triples the fare
const fareTripler =function(fare){
    return fare * 3
}
createFareMultiplier(100)

// Function that applies a selectFunction to an array of drivers
function selectDifferentDrivers(drivers, selectFunction){
    return selectFunction(drivers);
}