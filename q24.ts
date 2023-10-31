// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 
// 10. If you want to try more comparisons, write more tests. Have at least one True 
// and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater 
// than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array


// • Tests for equality and inequality with strings
let str1:string= "Wellcome";
let str2:string= "wellcome";
console.log(str1 !== str2) ; // true
console.log(str1===str2) ; // false

// • Tests using the lower case function
let str3:string= "GoodBye";    
let str4:string= "goodbye";
console.log(str3.toLocaleLowerCase()===str4); //true

// • Numerical tests involving equality and inequality, greater than and less than, greater 
// than or equal to, and less than or equal to
const num1:number=6
const num2:number=4
console.log(num1===num2); // false
console.log(num1!==num2); // true
console.log(num1>num2);   // true
console.log(num1<num2);   // false
console.log(num1>=num2);  // true
console.log(num1<=num2);  // false


// • Tests using "and" and "or" operators
const a: number= 5;
const b: number= 7;
const c: number= 8;
console.log(a<b&&b<c); // true , both conditions should be true
console.log(a>b||b<c); // true , at least one condition should be true
console.log(a>b&&b>c); // false , both conditions should be false
console.log(a>b||b>c); // false , both conditions should be false


// • Test whether an item is in a array
let game:string[]= ["Football", "Cricket", "Hockey"];
console.log(game.includes("Hockey")); // true
console.log(game.includes("Running")); // false


// • Test whether an item is not in a array
let day:string[]= ["Monday", "Sunday", "Tuseday"];
console.log(!(day.includes("Friday"))); // true
console.log(!(day.includes("Tuseday"))); // false

