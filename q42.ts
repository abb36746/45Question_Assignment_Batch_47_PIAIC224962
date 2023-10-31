export{}
// 42. Great Magicians: Start with a copy of your program from Exercise 41. Write a 
// function called make_great() that modifies the array of magicians by adding the 
// phrase the Great to each magician’s name. Call show_magicians() to see that the 
// list has actually been modified.

let magicianNames: string[] = [ "Harry Porter","David Copperfield","Ron Weasley"];

function show_magicians(magicians: string[]): void {
    for(const magician of magicians) {
        console.log(magician)}
    };


    function make_great(magicians: string[]):string[]{
        const greatMagicians:string[] = magicians.map(magician=> `the great ${magician}`);
        return greatMagicians
    }

    // modify the array 
    const greatMagiciansNames:string[] = make_great( magicianNames);

    // call the function to show the original names
    console.log("Original Magicians:");
    show_magicians(magicianNames);

    // call the function to show the great magicians
    console.log("\nGreat Magicians:");
show_magicians(greatMagiciansNames);