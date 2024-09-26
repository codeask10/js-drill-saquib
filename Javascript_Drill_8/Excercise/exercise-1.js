/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/

console.log("Program Started...."); // Step 1: Print "Program started"

// Step 2: Create a promise that resolves after 3 seconds and logs "Program Complete"
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Program Complete");
    }, 3000);
});

// Step 3: Log out the promise while it's pending
console.log(promise);  // This will show the promise in pending state

// Step 4: Print "program in progress...."
console.log("Program in progress....");

// Step 5: Print out "Program Complete" when the promise fulfills
promise
    .then((message) => {
        console.log(message); // Will log "Program Complete" after 3 seconds
    })
    .catch((error) => {
        console.log(error);
    });
