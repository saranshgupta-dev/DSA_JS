// Relational Operator : >=, > , < , <= , ==  it returns only booleans
console.log(9 == 9); // o/p : true
// console.log(10 > 9 ); // o/p : true 
// console.log(10 >= 9 ); // o/p : true 
// console.log( 9 >= 9 ); // o/p : true 
// console.log(10 < 9); // o/p : false
// console.log(9 <= 9);  // o/p : true
// console.log(45678%1000);  // o/p : 678 Remainder (last ki three digit find kiya)
// console.log(45678%100); // O/p : 78 Remainder (last ki two digit find kiya)
// console.log(45678%10); // O/P : 8 Remainder (last ki ek digit find kiya) 
// console.log(Math.floor(45678/1000)); // O/p : 45___ (last three digit remove kiya)
// console.log(Math.floor(45678/100));// O/P :456__ (last two digit remove kiya)
// console.log(Math.floor(45678/10)); // O/p :4567_ (last ek digit remove kiya)
// console.log(Math.floor(2/10));
// console.log(Math.floor(2%10));
// console.log(Math.floor(8%10));
// console.log(Math.floor(10%3));
// console.log(Math.floor(9.1/3));

// let y = 7;
// y += 2;
// y *= 3;
// y -= 4;
// y %= 5;
// console.log(y); // output : 3

// DSA problems :-
// Problem : 01  Sum of Two Integer 
// const fs = require('fs')
// class Solution {
//         static main(){
//          const input = fs.readFileSync('/dev/stdin','utf-8').trim().split(/\s+/)
//          if(input.length >= 2){
//                 const a = parseInt([0],10)
//                 const b = parseInt([1],10)
//                 console.log(a + b);
//          }
//         }
// }
// module.exports = {Solution}

// Problem : 02 Greet the User 
// const fs = require('fs')
// Input read karna 
// const input = fs.readFileSync(0,'utf-8').trim().split("\n")
// function Solution(){
//         const name = input[0].trim()
//         const age = input[1].trim()

//         console.log(`Hello ${name} you are ${age} years old. `);
// }
// module.exports = {Solution}

// Problem : 03 Swap two Numbers 
// function swapNumbers(a,b){
//         [a,b] = [b,a]
//         console.log(a);
//         console.log(b);
// }
// module.exports = swapNumbers

// Problem : 04 Compound Interest Calculation 
// Yaha basically input read nhi kiya because parameters mai hai  
// function calculateCompoundInterest(P,r,t,n){
//         const amount = P * Math.pow(1 + r / n, n * t)
//         return (amount-P).toFixed(2)
// }
// module.exports = {calculateCompoundInterest}

// Variable Swaping method : 01
// let a = 10
// let b = 20
// console.log(a)
// console.log(b);
// let temp = a
// a = b
// b = temp
// console.log(a);
// console.log(b);

// Variable Swaping method : 02
// let a = 10
// let b = 20
// a = a + b // a = 10 + 20 => 30
// b = a - b  // b = 30 - 20 => 10
// a = a - b  // a = 30 - 10 => 20
// console.log(a);
// console.log(b);

// Variable Swaping using Destructuring Array method : 03
// let a = 10
// let b = 20
// console.log(a,b);
// [a,b] = [b,a]
// console.log(a,b);

// [] + [] => '' + '' => ''  (Dono empty strings or Array ko jodne par empty string milti hai)
// [] + {} => '' + "[object Object]" => '[object Object]'
// {} <- plain object ki string mai default representation '[object Object]'

// Type Coercion mai js automatically convert one data type into another data type
// console.log('1' - 1); // '1' ko int mai convert kar dega
// console.log('1' + 1); // concatenate kar dega
// + ke two work hai Arithematic operation or concatenation depend on operands ke type 
// like : int + int = int , str + int = str , str + str = str 


// Local variable a global variable a ko shadow karta hai
// var a = 10;
// function test() {
//     console.log(a);
//     var a = 20;
// }
// test();

// int + int = int (arithematic operation)
// let one = 10
// let two = 20
// console.log(one + two); // typeof = Number
        //   operand1:(10) operator:(+) operand2:(20)
// console.log('the sum of ' + one + ' and ' + two +' is : '+ (one + two)) // 30 
// console.log('the sum of ' + one + ' and ' + two +' is : '+ one + two) // concatination ho jayega : 1020
// console.log(one + two + ' is the sum of ' + one +' and '+ two) // but ye concate nhi hoga

// string + integer = string 
// let s1 = 'hello'
// let int = 20
// console.log(s1 + int);
// console.log(typeof(s1 + int));

// string + string = string (concatination) chipak jana 
// let s1 = 'hello'
// let s2 = ' world'
// console.log(s1 + s2);
// console.log(typeof(s1 + s2));

// Errors in JavaScript 
// let a = 10
// {
//     let a = 20 // ye ek alag variable mana jayega because ye block-scoped variable 
// }
// console.log(a); // ouput : 10

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
// // temp = 100 // error : it is constant variable
// console.log(temp);

// let apne scope declaration se pehle Temporal Dead Zone mai rehta hai 
// temp = 120 // reassign work karega let or var mai 
// console.log(temp); // error : before initialization access nhi hota hai let mai 
// let temp = 20

// console.log(temp); // var error nhi  sirf undefined dega 
// var temp = 30
// temp = 300 // reassign work karega