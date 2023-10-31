"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
// time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying 
// that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them 
// know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re 
// still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to 
// make sure you actually have an empty list at the end of your program
let guestName = [
    "Ali Abbas",
    "Ali Ahmad",
    "Ali Raza",
    "Ali Shan"
];
// informing peoples we found a big table
// by using for of loop
for (let gest of guestName) {
    console.log(`Hello, ${gest} we found a bigger dinner table.`);
}
// add new guest starting of the array
guestName.unshift("Ali Hamza");
// add one guest at middle of array
let middleindex = Math.floor(guestName.length / 2);
guestName.splice(middleindex, 0, "Danish Ali");
// add a guest at the end of array
guestName.push("Qurban Ali");
// print a new set of invitation messages, one for each person 
console.log(`   *New invitation message `);
for (let message of guestName) {
    console.log(`My dear ${message}, you are inviting to dinner pleas joning us tomorrow at 5:00 . `);
}
;
// exercise 17 start form here
console.log(`  ** I can invite only two people for dinner.`);
// remove guest untill only two guest are remaining
while (guestName.length > 2) {
    let guest_remove = guestName.pop();
    console.log(`  Sorry ${guest_remove} I can't invite you for dinner.`);
}
;
// print message to remaining people
for (let guest of guestName) {
    console.log(`Hello ${guest} you are still invited for dinner.`);
}
;
// remove last two guest name
guestName.pop();
guestName.pop();
// make sure you have empty list
console.log(`I have empty array at the end`, guestName);
