// console.log("hi");

// string length
var name = 'john';
console.log(name.length);

// to get the j which is the first letter \
console.log(name[0]);

// to get the last letter 
console.log(name[name.length-1]);


//how to change the letter case

const mixedcase='Hello, how are you?';
// to lowercase
console.log(mixedcase.toLowerCase());

// to upper case
console.log(mixedcase.toUpperCase());


// searching for a string 
// let hobbies be a string
const hobbies="I love HTML, CSS and JavaScript.";

/*
indexOf()
(method) String.indexOf(searchString: string, position?: number | undefined): number
Returns the position of the first occurrence of a substring.

@param searchString — The substring to search for in the string

@param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.

*/
console.log(hobbies.indexOf('JavaScript'));
//console.log(hobbies.indexOf('JavaScript',21));
//,21 specify from where to begin the search.



/*
lastIndexOf()
(method) String.lastIndexOf(searchString: string, position?: number | undefined): number
Returns the last occurrence of a substring in the string.

@param searchString — The substring to search for.

@param position — The index at which to begin searching. If omitted, the search begins at the end of the string.

*/
console.log(hobbies.lastIndexOf('JavaScript'));


// includes()
//startsWith()
//endsWith()
// return boolean value true/false






/***********************************************************************
 getting the substring of a string

*/

//slice();
const ss= hobbies.slice(2,6);
console.log(ss);



// split a string
console.log(hobbies.split(''));
// string will be displayes like an array 


// splitting sentence into words
console.log(hobbies.split(' '));
// space char implies that the string will be split whenever a space occur 




// reverse a string 
/* there is no particular method to reverse a string so what we can do is first split the string to an array 
then reverse it
once the array is reversed then we can join it back to form a string*/

const reversestring= hobbies.split('').reverse().join('');

console.log(reversestring);

//repeat() use to repeat string

// trim() 
// it is use to eliminate extra spaces in the string
// basically from start and the end 


