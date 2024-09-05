//   Find all users who are interested in playing video games.

function getAllUserInterestedInVideoGames(users) {
    if (!users) {
        return "Invalid User Object";
    }
    if (users.length === 0) {
        return "Empty Users";
    }
    let ans = [];
    let flag = false;
    for (const obj in users) {
        if (users[obj].hasOwnProperty("interests")) {
            for (let i = 0; i < users[obj].interests.length; i++) {
                flag = true;
                if (users[obj].interests[i].toLowerCase().includes("video game")) {
                    ans.push(obj);
                }
            }
        }
    }
    if (flag === false) return "No property called Interest in user object";
    return ans.length !== 0 ? ans : "Not Found";
}


//  Q2 Find all users staying in Germany.

function getAllUserStayingInGermany(users, country) {
    if (!users) {
        return "Invalid User Object";
    }
    if (users.length === 0) {
        return "Empty Users";
    }
    let ans = [];
    let flag = false;
    for (const obj in users) {
        if (users[obj].hasOwnProperty("nationality")) {
            flag = true;
            if (users[obj].nationality === country) {
                ans.push(obj);
            }
        }
    }
    if (flag === false) return "No property called Interest in user object";
    return ans.length !== 0 ? ans : "Not Found";
}

//  Q3 Find all users with masters Degree.
function getAllUsersInDegree(users, qualification) {
    if (!users) {
        return "Invalid User Object";
    }
    if (users.length === 0) {
        return "Empty Users";
    }
    let ans = [];
    let flag = false;
    for (const obj in users) {
        if (users[obj].hasOwnProperty("qualification")) {
            flag = true;
            if (users[obj].qualification.toLowerCase() === qualification.toLowerCase()) {
                ans.push(obj);
            }
        }
    }
    if (flag === false) return "No property called nationality in user object";
    return ans.length !== 0 ? ans : "Not Found";
}

//Q4    Group users based on their Programming language mentioned in their designation.

function getProgrammingBasedGroupUser(users) {
    let ans = {};
    for (const user1 in users) {
        let subject1 = users[user1].desgination.replace(/Senior|Junior|Intern|Developer|-/g, "").trim();
        console.log(subject1);
        for (const user2 in users) {
            let subject2 = users[user1].desgination.replace(/Senior|Junior|Intern|Developer|-/g, "").trim();
            if (subject1 === subject2) {
                if (!ans.hasOwnProperty(subject1)) {
                    ans[subject1] = new Array(user1);
                } else {
                    if (ans[subject1].indexOf(user1) === -1) {
                        ans[subject1].push(user1);
                    }
                }
            }

        }
    }
    return ans;
}

export { getAllUserInterestedInVideoGames, getAllUserStayingInGermany,getAllUsersInDegree,getProgrammingBasedGroupUser};
