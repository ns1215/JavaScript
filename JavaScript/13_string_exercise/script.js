//console.log("hi");

/*
guestList=' Our guest are: emma, jacob, isabella, ethan';

Guest
1. Get a length of the string. Store it in a variable called length
2. Uppercase the entire string.
   store the result in a new variable called uppercaseGuestList

3. check whether 'ETHAN' is on the uppercaseGuestList.
4. Create a substring that only contain the following:
'EMMA, JACOB, ISABELLA, ETHAN'.
staore the answer in a variable callled substringGuests.

5. out of the substring you just created, create an array of names of
  people that are on the list.
  store the array in a variable called guest 


 */

const guestList='Our guest are : emma, jacob, isabella, ethan';
// SOLUTION
//  1

const length = guestList.length;
console.log(length);

//  2

const uppercaseGuestList = guestList.toUpperCase();
console.log(uppercaseGuestList);

//  3

console.log(uppercaseGuestList.includes('ETHAN'));

//  4

const substring = uppercaseGuestList.slice(16);
console.log(substring);

//  5

const guest= substring.split(',');
console.log(guest);



























