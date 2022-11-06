/* console.log("test");
functions are the block of code designed to perform the particular task
In function there are two things to remember 
1) function declaration
    this means defining a function
    basically writing the code for the given task
2) function call
    this means executing the written code / invoking 



for example 
lets write a function to return the area of a square



*/
function area(s){
    return s*s;
}
var result = area(5)// storing the return value in a vraiable
console.log(result);// printing the return value i.e. the area 



/*
functions can be declared in three ways 

let the name of the functions be hello


// a function decleration
function hello(){
    //statement/code
    // have access to this keyword 
}

// a function expression
const hello = function(){
    // statement
}



// an arrow function 
const hello =()=>{
    // statement
    //most modern way to define a function 

}

*/