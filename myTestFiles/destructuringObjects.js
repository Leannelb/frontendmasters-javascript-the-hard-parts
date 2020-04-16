/**     to rin this file, enter node in the terminal in this folder              ***
***     then in a seperate terminal, again navigate to the same folder and run:  ***
***     node destructuringObjects.js                                             ***
**/

/////////////   Old Way ES6 ///////////////////// 

// function data () {
//     return { a: 1, b:2, c: 3 };
// }

// var tmp = data();
// var first = tmp.a;
// var second = tmp.b;
// var third = tmp.c;

// console.log(first, second, third);



//////////////   New Way - Destructuring   //////////////////

function data() {
    return { a: 1 , b: 2 };
}

var { 
    b: second,
    a: first,
    c: third
} = data();

// if we try to assign something that isn't there, we get an undefined: 
//  terminal: node destructuringObjects.js
// 1 2 undefined
// because above there is no three


console.log(first, second, third);
