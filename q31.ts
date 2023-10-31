export{}
// 31. No Users: Add an if test to Exercise 30 to make sure the list of users is not empty. 
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is 
// printed.

// non empty array 
let userName: string[]= ["admin", "Ali Abbas", "Muhammad Ahmad", "Ali Shan", "Muhammad Aslam"];

// functional case
function greetUser(username: string[]):void{
    if(username.length===0){
        console.log("we need to find some users!");
        return;
    }
   for (const usernames of username) {
    if(usernames.toLowerCase() === 'admin'){
        console.log(`Hello admin, would you like  to see a status report?`);
    }else{
        console.log(`Hello ${usernames}, thank you for logging in again.`);
    }
    } 
}

console.log(`For non empty username:\n`)
greetUser(userName);

// empty array case
userName=[];

console.log(`\n\n For empty username:\n`)
greetUser(userName);