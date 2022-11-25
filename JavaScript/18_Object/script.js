// Object 
//collection of related java
/* 
const person={
    firstname:'Mayank',
    lastname:  'Mudgal',
    age: 20
}

this is an object which hold the data of a person 



now we can create an object inside an object 
for eg:
lets create an object for the car mayank drive

const car={
    brand: 'porshe',
    year: 2022,
    color: 'black', 
}


now we can add this data in mayank's object which hold the detail about him 


const person=
{
    firstname:'Mayank',
    lastname:  'Mudgal',
    age: 20
    car:{
        brand: 'porshe',
        year: 2022,
        color: 'black', 
    }
}
*/
const person=
{
    firstname:'Mayank',
    lastname:  'Mudgal',
    age: 20,
    car:
    {
        brand: 'porshe',
        year: 2022,
        color: 'black', 
        'Does this car have insurance': 'yes',
    }
}
console.log(person);
  
/* 
we can access the property of the object using dot notation

*/
console.log(person.car.year);
//2022

/* but if we have dash or spaces then u cannot use dot notation method 
then u will have to use an alternative 


SQUARE BRACKET NOTATION 

*/


console.log(person.car['Does this car have insurance']);

