
//Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function getAllEmails(arr){
    let ans=[];
    for(const object in arr){
        ans.push(arr[object].email);
    }
    return ans;
}
//Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function getHobbyByAge(arr,age){
    for(const object in arr){
        if(arr[object].age===age){
            return arr[object].hobbies;
        }
    }
    return "Specific age not found";
}

//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

function getStudentName(arr,live){
    for(const object in arr){
        if(arr[object].isStudent===true && arr[object].country===live){
            return arr[object].name;
        }
    }
    return "Name not found";
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
function getNameAndCityByIndex(arr, index){
    let ans=[];
    if(index>arr.length){
        return "Out of bound";
    }
    for(let i =0;i<arr.length;i++){
        if(i===index){
            ans.push({"name":arr[i].name,"city":arr[i].city});
            return ans;
        }
    }
    return "Data not Found";
}

//    Implement a loop to access and print the ages of all individuals in the dataset.

function getAllAges(arr){
    try{
        if(arr.length===0){
            console.log("Empty array objects");
        }
        else{
            let allAges=[];
            for(const i in arr){
                allAges.push(arr[i].age);
            }
            console.log(allAges);
        }
    }
    catch(error){
        console.log(`Error: ${error}`);
    }
}

//   Create a function to retrieve and display the first hobby of each individual in the dataset.

function getFirstHobby(arr){
    try{
        if(arr.length===0){
            console.log("Empty array object");
        }
        let hobbies="";
        for(const i in arr){
            hobbies+=arr[i].hobbies[0]+ ", ";
        }
        console.log(hobbies.trim());
    }
    catch(error){
        console.log(`Error: ${error}`);
    }

}


//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

function getNameAndEmailByAge(arr,age){
    for(let i =0;i<arr.length;i++){
        if(arr[i].age===age){
            console.log(`Name: ${arr[i].name} and Email: ${arr[i].email}`);
            return;
        }
    }
    console.log(`Age:${age} is not found`);
}

//    Implement a loop to access and log the city and country of each individual in the dataset.

function getAllCityAndCountry(arr){
    if(!arr){
        console.log("Invalid Dataset");
    }
    else if(arr.length===0){
        console.log("Empty dataset");
    }
    else{
        let i =0;
        while(i<arr.length){
            console.log(`City: ${arr[i].city} and Country: ${arr[i].country}`);
            i++;
        }
    }      
}
export  { getAllEmails,getHobbyByAge,getStudentName,getNameAndCityByIndex,getAllAges,getFirstHobby, getNameAndEmailByAge,getAllCityAndCountry};


