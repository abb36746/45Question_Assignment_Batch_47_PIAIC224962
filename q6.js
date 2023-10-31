"use strict";
// 6. Stripping Names: Store a person’s name, and include some whitespace characters 
// at the beginning and end of the name. Make sure you use each character 
// combination, "\t" and "\n", at least once. Print the name once, so the whitespace 
// around the name is displayed. Then print the name after striping the white 
// spaces
Object.defineProperty(exports, "__esModule", { value: true });
let personName2 = "\t      Ali Abbas      \n";
console.log("Name with whitespace :", personName2);
let stripName = personName2.trim();
console.log("Name without whitespace :", stripName);
