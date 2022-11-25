/* Array includes()
this method is used to check whether the element is there in the aaray or not

syntax array.includes("element you want to check");

*/

/* 
Array sort()
method used to sort an array 


*/
const arr = [2,3,4,6,3];
console.log(arr.sort());
//[2, 3, 3, 4, 6]
const arrq = [12,23,4,06,3];
console.log(arrq.sort());
//[12, 23, 3, 4, 6]
/* the expected output was 
but we got [12, 23, 3, 4, 6]
this is because the compiler is taking input as a string and comparing its first
digit first i.e. 12 is coming first because of 
to make this work we need to modify the code a bit 
arrq.sort((a,b)=>a-b);*/
arrq.sort((a,b)=>a-b);
console.log(arrq);
// [3, 4, 6, 12, 23]

