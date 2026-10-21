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
//         const A = P * Math.pow(1 + r / n, n * t)
//         return (A-P).toFixed(2)
// }
// module.exports = {calculateCompoundInterest}

// Problem : 05 Swap Two Numbers Without Third Variable
// function swapNumbers(a,b){
//     [a,b] = [b,a]
//     return [a,b]
// } 
// console.log(swapNumbers(10,20));

// Problem : 06 Calculate Area of Triangle using Heron's Formula
// function calculateTriangleArea(a,b,c){
//     const s = (a+b+c)/2
//     const A = Math.sqrt(s*(s-a)*(s-b)*(s-c))
//     return A.toFixed(2)
// }
// console.log(calculateTriangleArea(3,4,5));

// problem : 07 Calculate Circumference and Area of a circle
// function calculateCircleProperties(r){
//     const pi = Math.PI
//     const circumference = (2*pi*r).toFixed(2)
//     const area = (pi * r * r).toFixed(2)

//     return [circumference,area]
// }
// console.log(calculateCircleProperties(5.2));