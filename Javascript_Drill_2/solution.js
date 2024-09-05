//   Find all users who are interested in playing video games.

function getAllUserInterestedInVideoGames(users) {
    if (!users) {
        return "Invalid User Object";
    }
    if(users.length===0){
        return "Empty Users";
    }
    let ans = [];
    let flag =false;
    for (const obj in users) {
        if (users[obj].hasOwnProperty("interests")) {
            for (let i = 0; i < users[obj].interests.length; i++) {
                flag=true;
                if (users[obj].interests[i].toLowerCase().includes("video game")) {
                    ans.push(obj);
                }
            }
        }
    }
    if(flag===false)return "No property called Interest in user object";
    return ans.length !== 0 ? ans : "Not Found";
}

export { getAllUserInterestedInVideoGames };
