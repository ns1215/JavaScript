const names =['dev','jay', 'anu', 'maya'];

// array forEach

for(let i=0;i<names.length;i++)
{
    console.log(i, names[i]);
}

/* 
expected output:
0 'dev'
1 'jay'
2 'anu'
3 'maya' 
*/

// forEach()
// works same like the for loop just we don't need to define the 
// length of the loop. this function itself execute all the elemennts

const logthename = ( names, i)=> console.log(i, names);
// created the function name logthename,
// names-> array  and i->index of the element it is printing


names.forEach(logthename);// calling the function
// same output as above 


/* use when you want to do somthing with each element of the Array
don't use whe you want to stop or break the loop when some condition is true/false 
for example 
this function can be used when u need to find the sum of the array */
let a=[2,3,4,5,6,5,4,32,1,23,88,99,68,69]
let sum=0;
a.forEach((a)=>{
    sum+=a;
});

console.log(sum);

// output 409

/* but if this was a searching function
for example if we had to check whether 69 is present in the array or not
then this function cannot be used */



/*

filter method 

use to filter the array and store the filtered array in a new array
this filter doesnot modify the existing array, you need to store the array in new variable


 */


// given array.
// now we need to filter the positive number of the array
const numbers = [-10, 0,-2, 15, 36, 25, -1];

/* 
normally using for loop the code would look like this 

*/
const positivenum =[];
for ( let i=0;i<numbers.length;i++){
    if(numbers[i]>=0)
        positivenum.push(numbers[i]);
}

console.log(positivenum);

// now same thing can be done using filter() function
const pnum=numbers.fill((num)=>num>=0);
console.log(num);
