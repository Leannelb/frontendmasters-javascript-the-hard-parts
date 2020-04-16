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
    return { a: 1 , b: 2, c: 3, d: 4, e: 5, f: 6 };
}

var  { 
    b: second,
    a: first,
    c: third
} = data();

// return { a: 1 , b: 2, c: 3, d: 4, e: 5, f: 6 };
// in this case, only the items specified get saved 

console.log(first, second, third);
// 1, 2, 3