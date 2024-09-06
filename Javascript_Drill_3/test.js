import inventory from './car.js';
import { getCarById } from './solution.js';

//------------------------> ### Test Case ### <----------------------------------

// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
let id =33;
const car=getCarById(inventory,id)
if (typeof car === 'object' && car !== null) {
    const { car_make, car_model, car_year } = car;
    console.log(`Car ${id} is a model of  ${car_model} made by ${car_make} in  ${car_year}`);
} else {
    console.log(car); // Handle the error message returned
}
