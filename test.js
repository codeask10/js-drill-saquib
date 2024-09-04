import arrayOfObjects from './person.js'
import {getAllEmails,getHobbyByAge, getStudentName, getNameAndCityByIndex, getAllAges,getFirstHobby} from "./solution.js";


//   Test cases
console.log(getAllEmails(arrayOfObjects));  //['alice@example.com', 'bob@example.com', 'charlie@example.com', 'david@example.com', 'eve@example.com', 'frank@example.com', 'grace@example.com', 'hannah@example.com', 'ivy@example.com', 'jack@example.com']
console.log(getAllEmails([])); // []

console.log(getHobbyByAge(arrayOfObjects,25));   // ['playing guitar', 'hiking']
console.log(getHobbyByAge(arrayOfObjects,100));  //Specific age not found

console.log(getStudentName(arrayOfObjects,"Australia")); // Hannah
console.log(getStudentName(arrayOfObjects,"Canada")); //Name not found
console.log(getStudentName()); //Name not found


console.log(getNameAndCityByIndex(arrayOfObjects,3));  // [ { name: 'David', city: 'Berlin' } ]
console.log(getNameAndCityByIndex(arrayOfObjects,5));  // [ { name: 'Frank', city: 'Los Angeles' } ]
console.log(getNameAndCityByIndex([],4));    //Out of bound
console.log(getNameAndCityByIndex([],0));     //Data not Found


getAllAges(arrayOfObjects);  // [30, 25, 35, 28, 32, 33, 29, 31, 27, 34]
getAllAges([]);  // Empty array objects
getAllAges();  // Error: TypeError: Cannot read properties of undefined (reading 'length')


getFirstHobby(arrayOfObjects);  //reading, playing guitar, cooking, photography, yoga, playing basketball, painting, writing, playing piano, playing cricket,
getFirstHobby([]);      //Empty array object
getFirstHobby();    //Error: TypeError: Cannot read properties of undefined (reading 'length')