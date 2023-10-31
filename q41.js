"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicianNames = ["Harry Porter", "David Copperfield", "Ron Weasley"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// call function 
show_magicians(magicianNames);
