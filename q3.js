"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase
Object.defineProperty(exports, "__esModule", { value: true });
let personName1 = 'ali abbas';
// Lower case
console.log(personName1.toLowerCase());
// Upper case
console.log(personName1.toUpperCase());
// Title case
let words = personName1.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
