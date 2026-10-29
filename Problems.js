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

// problem : 08 Find The Greatest of of Two Numbers
// function findGreatest(a,b){
//     if(a>b){
//         return a
//     }else{
//         return b
//     }
// }

// Problem : 09 Check if a Number is Even or Odd 
// function checkEvenorOdd(num){
//     if(num%2 == 0){
//         return 'Even'
//     }else{
//         return 'Odd'
//     }
// }

// problem : 10 Check if User is a Valid Voter 
// function checkVoterEligibility(name,age){
//     if(age>=18){
//         return `${name} is a valid voter. `
//     }else{
//         return `${name} is not valid voter. `
//     }
// }

// problem : 11 check if a Year is a Leap year 
// function isLeapYear(year){
//     if((year%4 == 0 && year % 100 != 0)||year%400 == 0){
//         console.log("Leap year");
//     }else{
//         console.log("Not a Leap Year");
//     }
// }

// problem : 12 Calculate Final amount after discount 
// function calculateFinalAmount(amount){
//     let dis = 0
//     if(amount>0 && amount<=5000) dis = 0
//     else if (amount>=5000 && amount<=7000) dis = 5
//     else if (amount>=7000 && amount<= 9000) dis = 10
//     else dis = 20
//     console.log("Total amount is ",amount);
//     console.log("Discount amount is ", (amount*dis)/100);
//     console.log("Payable amount is ",amount -(amount*dis)/100);
// }

// problem : 13 Calculate Electricity Bill Based on Units Consumed 
// function calculateElectricityBill(unit){
//     let amount = 0

// if(unit>= 400){
//     amount = (unit-400)*13
//     unit = 400
// }
// if(unit >=200 && unit <=400){
//     amount = amount + (unit -200)*8
//     unit = 200
// }
// if(unit >= 100 && unit<=200){
//     amount = amount + (unit-100)*6
//     unit = 100
// }
// if(unit <=100){
//    amount = amount + (unit*4.2)
// }
// }
// console.log(amount);

// problem : 14 Find the Greatest  Number Among Three Numbers 
// function findGreatest(a,b,c){
//     if(a>=b && a>=c){
//         return a
//     }
//     if(b>=a && b>=c){
//         return b
//     }
//     if(c>=a && c>=b){
//         return c
//     }
// } 

// problem : 15 Print Day Name from Day Number 
// function printDayName(day){
//     if(day==1){
//         return 'Monday'
//     }
//     else if(day == 2){
//         return 'Tuesday'
//     }
//     else if(day == 3){
//         return 'Wednesday'
//     }
//     else if(day == 4){
//         return 'Thursday'
//     }
//     else if(day == 5){
//         return 'Friday'
//     }
//     else if(day == 6){
//         return 'Saturday'
//     }
//     else if(day == 7){
//         return 'Sunday'
//     }
//     else{
//         return 'Invalid day number'
//     }
// }

// problem : 16 Determine Movie Status Based on Rating
// class Solution{
//     get_movie_status(ratingStr){
//         if(ratingStr>=0.0 && ratingStr<=2.0){
//             return 'Flop'
//         }
//         else if(ratingStr>=2.1 && ratingStr<=3.4){
//             return 'Semi-hit'
//         }
//         else if(ratingStr>=3.5 && ratingStr<=4.5){
//             return 'Hit'
//         }
//         else{
//             return 'Super hit'
//         }
//     }
// }

// problem : 17 Check if a Character is a Vowel or Consonant 
// function checkChar(ch){
//     if('aeiouAEIOU'.includes(ch) && ch.length == 1){
//         return 'Vowel'
//     }else if('bcdfghjklmnrstvwxyzBCDFGHJKLMNRSTVWXYZ'.includes(ch) && ch.length == 1){
//         return 'Consonant'
//     }else{
//         return 'Invalid input'
//     }
// }

// loops related 
// problem : 18  Print Natural Number from N to 1
// function printNumbers(n){
//     for(let i=n; i>=1; i--){
//         Process.stdout.write(i + ' ')
//     }
// }

// problem : 19 Print Natural Numbers 1 to n 
// function naturalnumbers(n){
//  for(let i=1; i<=n; i++){
//     process.stdout.write(i + ' ')
//  }
// }

// problem : 20 Sum up to N Terms 
// function sumUpToN(n){
//     let sum = 0
//     for(let i = 1; i<=n; i++){
//      sum = sum + i
//     }
//     return sum
// }

// problem : 21 factorial of a number 
// function factorial(n){
//     let fact = 1
//  for(let i = 1 ;i<=n ; i++ ){
//     fact = fact * i
//  }
//  return fact 
// }

// problem : 22 print all factors of a Number
// function printFactors(n){
//     for(let i =1 ; i<=n; i++){
//         if(n%2 === 0){
//             Process.stdout.write(i + ' ')
//         }
//     }
// }

// problem : 23 Sum of Even and Odd Numbers in a range 
// function sumEvenOddInRange(start,end){
//     let sumEven = 0
//     let sumOdd = 0
//     for(i=start; i<=end; i++){
//         if(i%2===0){
//          sumEven += i
//         }else{
//             sumOdd += i
//         }
//     }
//     return [sumEven,sumOdd]
// } 

// problem : 24 Check if a number is prime 
// function isPrime(n){
//  if(n<=1) return 'Not Prime'
//  else if(n==2) return 'Prime'
//  else if(n%2==0) return 'Not Prime'
//  else{
//     let isPrime = true
//     for(let i = 3; i<=Math.floor(Math.sqrt(n));i=i+2){
//         if(n%i==0){
//             isPrime = false
//             break
//         }
//     }
//     return isPrime?'Prime':'Not Prime'
//  }
// }

// problem : 25 Calculate Power of a Number 
// function calculatePower(a,b){
//     // return Math.pow(a,b) // solution:1
//     // return a ** b       // solution :2
//     let result = 1
//     for(let i = 1; i<=b; i++){  // solution : 3
//        result = result * a       // 1*2 = 2*2 = 4*2 = 8
//     }
// }

// problem : 26 Check if a Number is Strong
// function isStrongNumber(n){
//     let sumFact = 0
//     let num = n

//     while(num>0){
//         let digit = num%10 // 145 = 5 (last digit find kiya)
//         let fact = 1

//         for(let i=1;  i<=digit; i++){
//             fact = fact * i
//         }

//         sumFact = sumFact + fact
         
//     }
// }  
