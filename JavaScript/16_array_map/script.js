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


 */

const number =[-10,0,-2,15,-36,25];
















