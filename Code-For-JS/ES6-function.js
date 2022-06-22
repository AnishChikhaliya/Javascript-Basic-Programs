/*
Among the functionalities, we will cover the following:

Variables with let and const
Template literals
Destructuring
Spread operator
Arrow functions using =>
Classes
Modules

*/
                /*************** Variables with let and const *****************/

var fan = 'Anish';
var fan = 'Chikhaliya';

console.log(fan); // in var Same name var are access 

 let fan2 = 'Anish';
 fan2 = 'Chikhaliya'; // Reassign 
// let fan2 = 'Chikhaliya'; // Redecaler    // let function throw an error for same name variable also that is a block scope variable 

console.log(fan2); 

// In the function declare variable are scope variable you also declare out of the scope 

function starWarsFan() {
    const movie = 'Star Wars'; 
    return movie;
    }
function marvelFan() {
    const movie = 'The Avengers';
    return movie;
}

console.log(starWarsFan());
console.log(marvelFan());


                /*************** Template literals (` `)*****************/

const book = {
name: 'Learning JavaScript DataStructures and Algorithms'
}
console.log(`You are reading ${book.name}., 
             and this is a new line
             and so is this.`); // variable value inside of the ${xyz}


                /*************** Arrow Function = () =>*****************/


const sum = (x=1, y=2, z=3) => {
    return x + y + z;
}

console.log('Sum is : ' + sum(4, 2) );





const arr = [1,2,3,4,5];
const arr2 = [...arr,6,7,8,9];

console.log(arr2);
console.log(arr2.length);


var [x, y] = ['a', 'b'];
var ob = { x, y };
console.log(ob); // { x: "a", y: "b" }