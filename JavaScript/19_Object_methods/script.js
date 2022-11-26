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


/* 
what if we just want to print the keys of the object or jusr\t the values which the keys hold

for keys we can use the Object.keys(name of the object); method to do so
and for values Object.values(name of the object);
*/

const objkey= Object.keys(cat);
console.log(objkey);
//[ 'name', 'age', 'bark' ]


const objval= Object.values(cat);
console.log(objval);

//[ 'Dish', '4 years old', [Function: bark] ]

/* 
if we want to print both in a form of array then we can use another method called Object.entries()
*/

// freeze() method is use to freeze the value(cannot be changed)
