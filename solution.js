
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
    return "Specific age not found"
}
export  { getAllEmails,getHobbyByAge};


