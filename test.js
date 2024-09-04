import arrayOfObjects from './person.js'
import {getAllEmails,getHobbyByAge} from "./solution.js";


//   Test cases
console.log(getAllEmails(arrayOfObjects));
console.log(getAllEmails([]));

console.log(getHobbyByAge(arrayOfObjects,25));
console.log(getHobbyByAge(arrayOfObjects,100));



