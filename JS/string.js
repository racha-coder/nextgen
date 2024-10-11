//! Strings Functions in ES6


let collegeName = "Chaitanya Deemed to be University";

console.log(collegeName);
console.log('Length of string: ' + collegeName.length);

console.log(collegeName.toLowerCase());
console.log(collegeName.toUpperCase());

console.log(collegeName.startsWith("Chait")); // true
console.log(collegeName.startsWith("chait")); // false

console.log(collegeName.endsWith("University")); // true
console.log(collegeName.endsWith("university")); // false

console.log(collegeName.includes("Deemed")); // true
console.log(collegeName.includes("tobe")); // false

console.log(collegeName.repeat(3)); // repeats the entire string 3 times
console.log(`I am studying ${collegeName}`);



