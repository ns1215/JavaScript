const inventory=[
    {price: 6, name: 'egg'},
    {price: 5, name: 'choc'},
    {price: 3, name: 'scale'},
    {price: 4, name: 'pen'},
];

// Array Map
/* 
(method) 
Array<{ price: number; name: string; }>.map<number>(callbackfn: (value: {
    price: number;
    name: string;
}, 
index: number, array: {
    price: number;
    name: string;
}[]) => number, thisArg?: any): number[]



Calls a defined callback function on each element of an array, and returns an array that contains the results.

callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.

thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/

const prices = inventory.map((item)=>item.price);

console.log(prices);

/*
inventory is an array containing 4 objects 
each {} define a different object

item represent a single object
item.price should return the price of that particular item
prices is an array storing the value returned from map function



in previous file we studied about the filter fucntion 
now we will see how we can use filter function and map function together 


if there is a scenerio in which we had to return the name of element whose cost is less than 5

for this 
first we will use filter method to filter and store the element whose cost is less than 5 in a new variable 
then use map funtion to print the name 

code as follows

 */
const lessthen5 = inventory.filter((elem)=>elem.price<5);
const NL5 = lessthen5.map((nameofLT5)=>nameofLT5.name);
console.log(NL5);

// expected output:['scale', 'pen']


















