"use strict";
// 20. Think of something you could store in a array. For example, you could make a list 
// of mountains, rivers, countries, cities, languages, or anything else you’d like. Write 
// a program that creates a list containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
// creat array to store cities name
let citiesName = ["Depalpur", "Okara", "Sahiwal", "Lahore", "Islamabad"];
for (const index in citiesName) {
    console.log(citiesName[index]);
}
;
