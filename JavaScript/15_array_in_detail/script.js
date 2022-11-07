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
don't use whe you want to stop or break the loop when some condition is true/false */