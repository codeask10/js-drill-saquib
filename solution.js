
//Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function getAllEmails(arr){
    let ans=[];
    for(const object in arr){
        ans.push(arr[object].email);
    }
    return ans;
}
export default getAllEmails;


