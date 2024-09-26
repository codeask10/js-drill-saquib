/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Step 1 complete" when the first promise fulfills
    6. Have the first promise return another new Promise that will
       fulfill after 3 seconds with the message: "Step 2 Complete"

    7. Print out the message from the second promise after it
       fulfills ("Step 2 Complete")

    HINT: Use setTimeout for the delay
*/

// Step 1: Print out "Program started" at the start of your code
console.log("Program started");

// Step 2: Create a Promise that resolves after 3 seconds
const firstPromise = new Promise((resolve) => {
   setTimeout(() => {
      resolve("Step 1 complete");
   }, 3000);
});

// Step 3: Log out the promise while it's pending
console.log(firstPromise); // This will show the promise in pending state

// Step 4: Print out "Program in progress..."
console.log("Program in progress...");

// Step 5: Print out "Step 1 complete" when the first promise fulfills
firstPromise
   .then((message) => {
      console.log(message);

      // Step 6: Return another new Promise that fulfills after 3 seconds
      return new Promise((resolve) => {
         setTimeout(() => {
            resolve("Step 2 complete");
         }, 3000);
      });
   })
   .then((message) => {
      console.log(message);
   });

