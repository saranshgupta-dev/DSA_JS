// Errors in JavaScript 
let a = 10
{
    let a = 20 // ye ek alag variable mana jayega because ye block-scoped variable 
}
console.log(a); // ouput : 10

// ek name se ek variable hi declare hota hai 
// var a = 10
// var a = 20

// var declarations hoist hoti hain.
// var a   // Variable declare hua aur initial value undefined hai.
// console.log(a); // a = undefined print hoga 
// a = 100        //Ab variable mein 100 assign ho gaya.

// global object property create kar sakti hai => globalThis.a = 100 
// Existing variable ko assign karta hai; undeclared a hone par non-strict mode mein global property create ho sakti hai.
// a = 100 
// console.log(a);

// Strict mode undeclared variable ko assign karne ki permission nahi deta.
// 'use strict'; // ab error ayege kyoki strict mode hai 
// a = 30
// console.log(a);

// const temp = 10
// // temp = 100 // it is constant variable
// console.log(temp);

// let apne scope declaration se pehle Temporal Dead Zone mai rehta hai 
// temp = 120 // reassign work karega let or var mai 
// console.log(temp); // error : before initializzation access nhi hota hai let mai 
// let temp = 20

// console.log(temp); // var error nhi  sirf undefined dega 
// var temp = 30
// temp = 300 // reassign work karega