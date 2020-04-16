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
// var b = tmp.b || {};
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
                x: 2,  
            } = {} //default
    };
}

var { 
    a,
    b,
    b: {
        x: w;
    }
} = data() || {} ; // the || {} defines an empty object



console.log(a, b, w);
// 1, 2, 3

