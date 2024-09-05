import users from './user.js';
import {getAllUserInterestedInVideoGames, getAllUserStayingInGermany,getAllUsersInDegree,getProgrammingBasedGroupUser} from './solution.js';

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

//  Q1 Find all users who are interested in playing video games.

console.log(getAllUserInterestedInVideoGames(users));  //['John', 'Ron']
console.log(getAllUserInterestedInVideoGames(undefined));  //Invalid User Object
console.log(getAllUserInterestedInVideoGames(dummyObject)); // Empty user Object
console.log(getAllUserInterestedInVideoGames(25)); // Not Found

//  Q2 Find all users staying in Germany.

console.log(getAllUserStayingInGermany(users, "Germany")); //['Wanda', 'Pike']
console.log(getAllUserStayingInGermany(users, "UK")); //  ['Ron']
console.log(getAllUserStayingInGermany(users, "dasfermany"));  // Not Found
console.log(getAllUserStayingInGermany(users,123));  //Not Found
console.log(getAllUserStayingInGermany());  //Invalid User Object

//Q3     Find all users with masters Degree.

console.log(getAllUsersInDegree(users,"Masters")); // ['John', 'Rob']
console.log(getAllUsersInDegree(users,"kldfdaf")); // Not Found

//  Q4 Group users based on their Programming language mentioned in their designation.

console.log(getProgrammingBasedGroupUser(users)); //{Golang: [ 'John', 'Ron' ],Javascript: [ 'Wanda', 'Rob' ], Python:['Pike' ]}
