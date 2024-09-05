import users from './user.js';
import {getAllUserInterestedInVideoGames} from './solution.js';

const dummyObject={
    "John": {
        age: 24,
        desgination: "Senior Golang Developer",
        qualification: "Masters",
        nationality: "Greenland"
    },
    "Ron": {
        age: 19,
        desgination: "Intern - Golang",
        interests: ["Video Games"],
        qualification: "Bachelor",
        nationality: "UK"
    }
}

// ----------------------> Test Case <--------------------------------------------- 

//    Q1 Find all users who are interested in playing video games.

console.log(getAllUserInterestedInVideoGames(users));  //['John', 'Ron']
console.log(getAllUserInterestedInVideoGames(undefined));  //Invalid User Object
console.log(getAllUserInterestedInVideoGames(dummyObject)); // Empty user Object
console.log(getAllUserInterestedInVideoGames(25)); // Not Found