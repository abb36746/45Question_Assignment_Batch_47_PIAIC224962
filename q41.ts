// 41. Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.


let magicianNames: string[] = [ "Harry Porter","David Copperfield","Ron Weasley"];


function show_magicians(magicians: string[]): void 
{
    for(const magician of magicians){
        console.log(magician);
    }
}


// call function 
show_magicians(magicianNames);