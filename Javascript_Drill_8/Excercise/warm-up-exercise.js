/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" when the promise completes after 3 seconds

    HINT: Use setTimeout for the delay
*/


console.log("Program Started....");// Step 1: Print "Program started"

//Step 2: A new Promise is created that resolves after 3 seconds using setTimeout
const promise=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Program Complete") //Step 5: Resolve the promise after 3 seconds
    }, 3000);
})

console.log(promise);  // Step 3: Log the promise while it's pending

console.log("program in progress...."); // Step 4: Print "Program in progress..."

promise.then((message)=>{
    console.log(message);// Print "Program complete" when the promise resolves
});