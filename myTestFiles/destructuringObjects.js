/**     to rin this file, enter node in the terminal in this folder              ***
***     then in a seperate terminal, again navigate to the same folder and run:  ***
***     node destructuringObjects.js                                             ***
**/

/////////////   Old Way ES6 ///////////////////// 

// function data () {
//     return { 
//         a: 1,
//         b: {
//             c: 2, 
//             d: 3 
//         }
//     };
// }

// var tmp = data() || {} ;

// var a = tmp.a;
// var b = tmp.b;
// var c = tmp.b.c;
// var d = tmp.b.d;

// console.log('a ', a);
// console.log('b ', b);
// console.log('c ', c);
// console.log('d ', d);

// // a  1
// // b  { c: 2, d: 3 }
// // c  2
// // d  3



//////////////   New Way - Destructuring   //////////////////

function data () {
            return { 
            a: 1,
            b: {
                c: 2, 
                d: 3 
            }
    };
}

var { 
    a,
    b: {
        c,
        d
    }
} = data() || {} ; // the || {} defines an empty object

// if the source and the target name are the same, 
// in order to make it not redundant, we only list the name once


console.log(a, c, );
console.log(a, c, d);
// 1, 2, 3

