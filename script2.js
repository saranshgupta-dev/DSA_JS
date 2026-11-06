// Array Level : 01 
// Array mai maximum or minimum Element ko swap karna 
let arr = [45,10,95,75,34]
let maxindex = 0
let minindex = 0
let min = arr[0]
let max = arr[0]
for(let i=1; i<arr.length; i++){
    if(arr[i]>max){
        max = arr[i]
        maxindex = i
    }else if(arr[i]<min){
        min = arr[i]
        minindex = i
    }
}
console.log(maxindex);
console.log(minindex);
    let temp = arr[1]
    arr[1] = arr[2]
    arr[2] = temp
console.log(arr);

// Reverse Array : Using Without Extra space
// let arr = [11,22,33,44,55]
// let i = 0
// let j = arr.length-1
// while(i<j){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr);

// Reverse Array : Using Extra space
// let arr = [10,20,30,40,50]
// let rev = new Array(arr.length)

// let i=arr.length-1
//     for(let j=0; j<arr.length;j++){
//          rev[j] = arr[i]
//          i--
//     }
// console.log(arr);
// console.log(rev);

// Find Minimum Element of Array with index 
// let arr = [45,32,78,23,40]
// let min = arr[0]
// let index = 0
// for(let i=1; i<arr.length; i++){
//     if(arr[i]<min){
//         min = arr[i]
//         index = i
//     }
// }
// console.log('the Minimum element in array is :',min);
// console.log('the index of that minimum element is :',index);

// Find Second Max element of Array 
// let arr = [45,34,89,67,12,42]
// let max = Math.max(arr[0],arr[1])
// let S_max = Math.min(arr[0],arr[1])

// for(let i=2; i<arr.length; i++){
//     if(arr[i]>max){
//         S_max = max
//         max = arr[i]
//     }else if(arr[i]>S_max && arr[i] != max){
//         S_max = arr[i]
//     }
// }
// console.log(S_max);
// console.log(max);

// My Method for Second max Element from Array 
// let arr = [5,8,29,27,40,21,19] // S_max = 29, max = 40
// let arr = [45,33,89,13,72,29,40] // S_max = 72, max = 89
// let arr = [1,2,6,6,6,6,6,6]
// let max = arr[1]
// let S_max = arr[0]
// for(let i=2; i<arr.length;i++){
//     if(arr[i]>max){
//         S_max = max
//         max = arr[i]
//     }else if(S_max<arr[i]){
//         S_max = arr[i]
//     }
// }
// console.log('Second max element is :',S_max);
// console.log('Max element is :',max);

// Max element from Array 
// let arr = [45,55,95,75,34]
// let max = arr[0]
// let index = 0
// for(let i=1; i<arr.length;i++){
//     if(arr[i]>max){
//         max = arr[i]
//         index = i
//     }
// }
// console.log('Maximum element is :',max);
// console.log('the index of that maximum element is :',index);

// Sum of Array Element with size of Array 
// let arr = [10,20,30,40,50]
// let sum = 0
// let count = 0
// for(let i=0; i<arr.length; i++){
//     sum = sum + arr[i]
//     count++
// }
// console.log('the sum of array element :',sum);
// console.log('the size of array is :',count);

// Accept Value from user and assign in the Array
// let prompt = require('prompt-sync')()
// let n = Number(prompt('Enter size of array'))
// let arr = new Array(n) // arr mai store hoga n size

// for(let i=0; i<arr.length; i++){
//     arr[i] = Number(prompt('Enter a value'))
// }
// console.log(arr);

// let arr = new Array(3)
// arr.push(100) // [ <3 empty items>, 100 ]
// arr.unshift(200) // [ 200, <3 empty items>, 100 ]
// console.log(arr);

// let arr = Boolean({q})
// console.log(arr);
// let arr = [Number,String,Boolean,Object]
// output : [
//   [Function: Number],
//   [Function: String],
//   [Function: Boolean],
//   [Function: Object]
// ]
// let arr = [Number,Number(),String(),Boolean,Boolean(),Object]
//output: [[Function: Number],0,'',[Function: Boolean],false,[Function: Object]]
// let arr = [Number, Number(10), Boolean, Boolean(''), String, String(100)]
// output : [
//   [Function: Number],
//   10,
//   [Function: Boolean],
//   false,
//   [Function: String],
//   '100'
// ]
// console.log(arr);
// let arr = [100,'name',Boolean,{}]
// console.log(arr);

// let arr1 = [Boolean] // [ [Function: Boolean] ]
// let arr2 = [Boolean(true)] // [ true ]
// let arr4 = [Boolean(1)] // [ true ]
// let arr3 = [Boolean()] // [ false ]
// let arr5 = [Boolean(false)] // [ false ]
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);

// let arr = new Array(3)
// let arr = new Array(3).fill(true)
// console.log(arr); // [ true, true, true ]
// // console.log(arr.length);// 3 length hai arr ki 
// // console.log(arr); // 3-empty item
// arr[0] = 10
// arr[1] = 20 // array ki length 3 thi but 4 elements push ho gye
// arr[2] = 30
// arr[3] = 40
// console.log(arr); // [ 10, 20, 30, 40 ]

// let arr = [10,20,30,40,50]
// for(let i=0;i<=arr.length; i++){
//     console.log(arr[i]);
// }
// console.log(arr.length);
// console.log(arr[4]);
// console.log(arr);
// arr.push(100) // inserting from last
// console.log(arr);
// arr.pop() // deleting from last
// console.log(arr);
// arr.unshift(69) // first se element add karta hai
// console.log(arr);
// arr.shift() // first se element remove karta hai
// console.log(arr);

// let prompt = require('prompt-sync')()
// let n = Number(prompt('Enter a number')) 

// for(let i=1; i<=n;i++){
//    for(let j=1; j<=2*n-i; j++){
//      if(i==j || j==2*n-i){
//         process.stdout.write('*')
//      }
//      else{
//         process.stdout.write(' ')
//      }
//    }
//    console.log();
// }
// Print X through star 
// let prompt = require('prompt-sync')()
// let n = Number(prompt('Enter a number')) 

// for(let i=1; i<=n;i++){
//     for(let j=1; j<=n; j++){
//         if(i==j || i+j == n+1) process.stdout.write('* ')
//         else process.stdout.write('  ')
//     }
//     console.log();
// }

// mirror right angle triangle 
// let prompt = require('prompt-sync')()
// let n = Number(prompt('Enter a number')) 

// for(let i = 1; i<=n;i++){
//     // inverted 
//     for(let j=1; j<=n-i; j++){
//         process.stdout.write('  ')
//     }
//     // right angle triangle
//     for(let j=1; j<=i; j++){
//         process.stdout.write('* ')
//     }
//     console.log();
// }

// Triangle Shape stars 
// let prompt = require('prompt-sync')()
// let n = Number(prompt('Enter a number')) 

// for(let i = 1; i<=n;i++){
//     // inverted 
//     for(let j=1; j<=n-i; j++){
//         process.stdout.write(' ')
//     }
//     // right angle triangle
//     for(let j=1; j<=i; j++){
//         process.stdout.write('* ')
//     }
//     console.log();
// }