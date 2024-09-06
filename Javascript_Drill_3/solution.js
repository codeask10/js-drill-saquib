
// ==== Solution #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:

function getCarById(inventories, id) {
    if (!inventories) {
        return "Invalid Inventory dataset";
    }
    if (inventories.length === 0) {
        return "Empty Inventory";
    }
    if (!Number.isInteger(id)) {
        return "Invalid Id";
    }
    let arr = [];
    let flag = false;
    for (const inventory in inventories) {
        if (inventories[inventory].hasOwnProperty("id")) {
            flag = true;
            if (inventories[inventory].id === id) {
                return inventories[inventory];
            }
        }
        else {
            return "No id property present!";
        }
    }
    return "Not Found";
}

// ==== Solution #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:

function getLastCarDetails(inventories) {
    if (!inventories) return "Invalid Datasets";
    let index = inventories.length - 1;
    return inventories[index];
}

// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
function getSortedCarModelsAlphabetically(inventories) {
    let arr = [];
    for (const i in inventories) {
        if (arr.indexOf(inventories[i].car_model) === -1) {
            arr.push(inventories[i].car_model);
        }
    }
    const sorted = arr.sort((a, b) => {
        return a.localeCompare(b, undefined, {
          numeric: true,
          sensitivity: 'base'
        })
      });
    console.log(sorted);
}

export { getCarById, getLastCarDetails, getSortedCarModelsAlphabetically };