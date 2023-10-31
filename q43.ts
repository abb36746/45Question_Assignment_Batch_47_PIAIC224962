export{}
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function 
// make_great() with a copy of the array of magicians’ names. Because the original 
// array will be unchanged, return the new array and store it in a separate array. Call 
// show_magicians() with each array to show that you have one array of the original 
// names and one array with the Great added to each magician’s name.


let magicianNames: string[] = [ "Harry Porter","David Copperfield","Ron Weasley"];


function show_magicians(magicians: string[]): void {
    for(const magician of magicians) {
        console.log(magician)}
    };

    function make_great(magicians: string[]):string[]{
        const greatMagicians:string[] = magicians.map(magician=> `the great ${magician}`);
        return greatMagicians;
    }

    // modify the array to add the great to each magician's name
    const greatMagicianNames: string[] = make_great(magicianNames);

    // call the function to show the original magician's names

    console.log("Original Magicians: ")

    show_magicians(magicianNames);

    // call the function to show the great magicians names

    console.log("\nGreat Magicians:")

    show_magicians(greatMagicianNames);