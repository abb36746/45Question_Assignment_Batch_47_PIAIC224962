"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the 
// appropriate color alien.
//version 1
let alien_color = "green";
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points");
}
else {
    console.log("No earned any points.");
}
//version 2
alien_color = "yellow";
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points");
}
else {
    console.log("No earned any points.");
}
//version 3
alien_color = "red";
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points");
}
else {
    console.log("No earned any points.");
}
