
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

export  { getAllEmails,getHobbyByAge,getStudentName};


