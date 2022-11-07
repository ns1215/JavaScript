const names =['john', 'bob', 'dev'];

// Array Push- adds a new element containing the entered value to the ned of the array 

// syntax - arrayName.push( "element you want to push" );

names.push ('nitin');

console.log(names);
// expected output:['john', 'bob', 'dev', 'nitin']

 
// Array pop - deletes the last element of an array 
//syntax - arrayName.pop();x    


names.pop();
console.log(names);
// expected output:['john', 'bob', 'dev']


// Array shift
// deletes the first element and then shift rest one place ahead 

names.shift();
console.log(names);
// expected output:['bob', 'dev']

// Array Unshift
// adds a new value to the start

names.unshift('nitin');
console.log(names);
// expected output:['nitin', 'bob', 'dev']
 
// Array splice
//Removes elements from an array and, if necessary, inserts new elements
// in their place, returning the deleted element
 names.splice(2,0,'mayank','manish')
 console.log(names);
 // now 2 indicates where the element should be added. Here the element 
 //will be added at index no. 2
 // 0 indictes no. of element should be deleted 
 //follwed by the element need to be added 

// expected output:['nitin', 'bob', 'mayank', 'manish', 'dev']
names.splice(2,3,'ayush','ayushi')
//here 3 indicates that that after index 2 three elements will be deleted before adding new 2 
console.log(names);
 // expected output:['nitin', 'bob', 'ayush', 'ayushi']

// Array slice 
 