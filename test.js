import arrayOfObjects from './person.js'
import {getAllEmails,getHobbyByAge, getStudentName} from "./solution.js";


//   Test cases
console.log(getAllEmails(arrayOfObjects));  //['alice@example.com', 'bob@example.com', 'charlie@example.com', 'david@example.com', 'eve@example.com', 'frank@example.com', 'grace@example.com', 'hannah@example.com', 'ivy@example.com', 'jack@example.com']
console.log(getAllEmails([])); // []

console.log(getHobbyByAge(arrayOfObjects,25));   // ['playing guitar', 'hiking']
console.log(getHobbyByAge(arrayOfObjects,100));  //Specific age not found

console.log(getStudentName(arrayOfObjects,"Australia")); // Hannah
console.log(getStudentName(arrayOfObjects,"Canada")); //Name not found
console.log(getStudentName()); //Name not found




