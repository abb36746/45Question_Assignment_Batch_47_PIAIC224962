// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the 
// original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order 
// has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to 
// show that its order has changed


// creat array to store travle location
let travle_country:string[]= ["Saudi Arabia","Turkiye","America","Japan","China"];

// print array in original order
console.log("Array in original order:  " ,travle_country);

// Print array in alphabetical order without modifying the actual list.
console.log("Array in alphabetical order:  ",[...travle_country].sort());

//Show that your array is still in its original order by printing it.
console.log("My array is still in its original order:  ", travle_country);

// array in reverse alphabetical order without changing the order of the 
// original list.
console.log("Array in reverse alphabetical order:  ",[...travle_country].sort().reverse());

//  Reverse the order of your list. Print the array to show that its order has changed.
console.log(`List has been reversed:  `,travle_country.reverse())

//  • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`List has been backed to its original order: `,travle_country.reverse());


//Sort your array so it’s stored in alphabetical order. Print the array to show that its order 
// has been changed.
console.log("Array has been changed in alphabetical order:  ",travle_country.sort());

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to 
// show that its order has changed
console.log("Array has been changed in to reverse alphabetical order:  ",travle_country.reverse());
