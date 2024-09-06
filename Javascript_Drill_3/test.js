import inventory from './car.js';
import { getCarById, getLastCarDetails} from './solution.js';

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





