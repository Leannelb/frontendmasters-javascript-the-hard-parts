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
    return { a:1, b: 2, c: 3 };
}

var { 
    b: second,
    a: first,
    c: third
} = data();

console.log(first, second, third);
