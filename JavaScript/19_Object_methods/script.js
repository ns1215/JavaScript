/*
Object
 It is the property of an object which is an function

syntax

const myobj =  
    {
        mymethod:()=>{

    }

} 

*/

// example

const dog={
    name: 'Tommy',
    age : `5 years old`,
    bark: function() {
        console.log("BOW BOW!!");

    }
}

/* 

now we have created an object dog 
the function contains an object bark

now if we print the object we can use 
*/
dog.bark();

/* 
but if you want to brint the all the properties then what should you do?
you can print it by printing each object separately 
    or
we can use "This" key word
as we are using this keyword we cannot use arrow function that is why we are using
normal function

 */
const cat={
    name: 'Dish',
    age : `4 years old`,
    bark: function() {
        console.log(this.name, this.age);

    }
}
cat.bark();
//Dish 4 years old