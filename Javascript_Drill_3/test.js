import inventory from './car.js';
import { getCarById, getLastCarDetails,getSortedCarModelsAlphabetically,getCarYears, getCarsBefore2000 } from './solution.js';

//------------------------> ### Test Case ### <----------------------------------

// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
let _id =33;
const car=getCarById(inventory,_id)
if (typeof car === 'object' && car !== null) {
    const { car_make, car_model, car_year } = car;
    console.log(`Car ${_id} is a model of  ${car_model} made by ${car_make} in  ${car_year}`);
} else {
    console.log(car); // Handle the error message returned
}

// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:

const  lastCar= getLastCarDetails();
if (typeof lastCar === 'object' && lastCar !== null) {
    const {id, car_make, car_model, car_year } = lastCar;
    console.log(`Last car id is ${id}, model of: ${car_model}, made by: ${car_make} in  ${car_year}`);
} else {
    console.log(lastCar); // Handle the error message returned
}

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

getSortedCarModelsAlphabetically(inventory);

// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
const carYear=getCarYears(inventory);
if (typeof carYear === 'array' && carYear !== null) {
    console.log(carYear)
} else {
    console.log(carYear); // Handle the error message returned
}

// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.
const carBefore2000= getCarsBefore2000(inventory)
if (typeof carBefore2000 === 'array' && carBefore2000 !== null) {
    console.log(carBefore2000)
} else {
    console.log(carBefore2000); // Handle the error message returned
}

