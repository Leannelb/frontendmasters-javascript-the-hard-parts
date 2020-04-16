/**     to rin this file, enter node in the terminal in this folder              ***
***     then in a seperate terminal, again navigate to the same folder and run:  ***
***     node destructuringObjects.js                                             ***
**/

/////////////   Old Way ES6 ///////////////////// 

// function data () {
//     return { a: 1, b:2, c: 3 };
// }

// var tmp = data();
// var first, second, third;

// first = tmp.a;
// second = tmp.b;
// third = tmp.c !== undefined ? tmp.c : 42;
// // providing a default value the ES6 way

// console.log(first, second, third);



//////////////   New Way - Destructuring   //////////////////

function data() {
    // return { a: 1 , b: 2, c: 3, d: 4, e: 5, f: 6 };
    return; // if nothing is returned
}

var { 
    b: second,
    a: first = 42,
    ...third
} = tmp = data() || {} ; // the || {} defines an empty object

// here when we add a ... it collects the final items, whatever they are in their own object


console.log(first, second, third);
// 42 undefined {}

