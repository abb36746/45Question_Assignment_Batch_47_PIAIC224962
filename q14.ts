// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would 
// you invite? Make a list that includes at least three people you’d like to invite to 
// dinner. Then use your list to print a message to each person, inviting them to 
// dinner
let guestName: Array<string> = [
 "Ali Abbas",
 "Ali Ahmad",
 "Ali Muhammad",
 "Ali Shan"
];
// by using for loop
for(let ind =0;ind<guestName.length;ind++){
    console.log(`My dear ${guestName[ind]}, you are inviting to dinner pleas joning us tomorrow at 5:00 . `)
};