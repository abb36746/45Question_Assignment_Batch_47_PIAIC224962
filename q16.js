"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 16. More Guests: You just found a bigger dinner table, so now more space is 
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your 
// program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest 
// to the end of your list. • Print a new set of invitation messages, one for each person in 
// your list.
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
