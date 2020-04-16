/**     to rin this file, enter node in the terminal in this folder              ***
***     then in a seperate terminal, again navigate to the same folder and run:  ***
***     node destructuringObjects.js                                             ***
**/

/////////////   Old Way ES6 ///////////////////// 

// function data () {
//     return { a: 1, b:2, c: 3 };
// }

// var tmp = data() || {} ;

// a = tmp.a;
// a = tmp.b;
// third = tmp.c !== undefined ? tmp.c : 42;
// // providing a default value the ES6 way

// console.log(first, second, third);



//////////////   New Way - Destructuring   //////////////////

function data() {
    return { a: 1 , b: 2, c: 3, d: 4, e: 5, f: 6 };
}
// ES6 WAY:
// a = tmp.a;
// a = tmp.b;

var { 
    a,     //  b: a,
    b      //  a: b
} = data() || {} ; // the || {} defines an empty object

// if the source and the target name are the same, 
// in order to make it not redundant, we only list the name once


console.log(a, b);
// 42 undefined {}

