
// ==== Solution #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:

function getCarById(inventories,id){
    if(!inventories){
        return "Invalid Inventory dataset";
    }
    if(inventories.length===0){
        return "Empty Inventory";
    }
    if(!Number.isInteger(id)){
        return "Invalid Id";
    }
    let arr=[];
    let flag =false;
    for(const inventory in inventories){
        if(inventories[inventory].hasOwnProperty("id")){
            flag=true;
            if(inventories[inventory].id===id){
                return inventories[inventory];
            }
        }
        else{
            return "No id property present!";
        }
    }
    return "Not Found";
}

export {getCarById};