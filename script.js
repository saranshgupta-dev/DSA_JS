
// let x = 0
// if(x){
//         console.log("truthy");
// }else{
//         console.log("falsy");
// }

// function calculateElectricityBill(unit) {
//     let bill 
//     if(unit <= 100){
//         bill = unit * 4.2
//     } else if(unit >= 101 && unit <= 200){
//         bill = unit * 6
        
//     } else if(unit >= 201 && unit <= 400){
//         bill = unit * 8
        
//     } else if (unit >= 400){
//         bill = unit * 13
        
//     }
//     return bill.toFixed(1)
    
// } // es code mai 2/8 test case pass hue hai only 

// function calculateElectricityBill(unit) {
//   if (typeof unit !== 'number' || unit <= 0) {
//     return (0).toFixed(1);
//   }

//   let bill = 0;

//   // Slab 1: Up to 100 units @ ₹4.2/unit
//   const slab1Units = Math.min(unit, 100);
//   bill += slab1Units * 4.2;

//   // Slab 2: 101 to 200 units @ ₹6/unit
//   if (unit > 100) {
//     const slab2Units = Math.min(unit - 100, 100);
//     bill += slab2Units * 6;
//   }

//   // Slab 3: 201 to 400 units @ ₹8/unit
//   if (unit > 200) {
//     const slab3Units = Math.min(unit - 200, 200);
//     bill += slab3Units * 8;
//   }

//   // Slab 4: Above 400 units @ ₹13/unit
//   if (unit > 400) {
//     const slab4Units = unit - 400;
//     bill += slab4Units * 13;
//   }

//   // Round to exactly one decimal place
//   return bill.toFixed(1)
// } // esme sabhi conditions satisfy karta hai ye code 


// function calculateElectricityBill(unit) {
//     let bill;

//     if (unit <= 0) bill = 0;
//     else if (unit <= 100) bill = unit * 4.2;
//     else if (unit <= 200) bill = 420 + (unit - 100) * 6;
//     else if (unit <= 400) bill = 1020 + (unit - 200) * 8;
//     else bill = 2620 + (unit - 400) * 13;

//     return bill.toFixed(1);
// } // ye bhi sabhi codition satisfy karta hai 

// 01 : Accept two Numbers and print Greatest between them 
// let a = Number(prompt("Enter your first Number"))
// let b = Number(prompt("Enter your second Number"))
// if(a>b) console.log(' The Greatest is A : ',a);
// else console.log('The Greatest is B : ',b);

// 02 : Accept an integer and check whether it is even Number  or odd 
// let a = Number(prompt('Enter the Number'))
// if(a%2 != 0)console.log(a,"This is odd Number"); // 1,3,5,7 = odd
// // if(a%2 == 0)console.log("This is even Number"); // 2,4,6,12,14 = even
// else console.log(a,"This is even Number"); // 2,4,6,8 = even

// 03 : Accept name and age from user . check if the user is valid voter or not 
// let name = 'saransh'
// let age = 33
// if(age>=18){
//         console.log(`${name} is  valid voter`);
// }else{
//         console.log(`${age} is not valid voter `);
// }

// 04 : accept three numbers and print greatest among them 
// let a = Number(prompt("Enter first digit"))
// let b = Number(prompt("Enter second digit"))
// let c = Number(prompt("Enter third digit"))
// console.log(a,b,c);
// if(a > b && a > c){
//         console.log(a,"A is Greatest");
// }else if(b>a && b > c){
//        console.log(b,"B is Greatest");
// }else if(c > a && c > b){
//         console.log(c,"C is Greatest");
// }

// 05 : Accept a year and check if it a leap year or not
// let year = prompt("Enter year")
// if(year % 4 == 0 && year % 100 != 0) console.log('Leap year');
// else if(year % 400 == 0) console.log("Leap year");
// else console.log("not Leap year");

// 06 : discount on amount  limit
// Method : 01 
// let amount = Number(prompt("Enter your amount"))
// let payableAmount = 0
// if(amount>=0 && amount<=5000){
//         payableAmount = amount
// }
// else if(amount>=5000 && amount <= 7000){
//       payableAmount = amount - (amount * 5)/100
// //       discount  = amount * discount Rate % / 100
// //       payable = amount - discount
// }
// else if(amount >=7000 && amount <= 9000){
//         payableAmount = amount - (amount * 10)/100
// }
// else {
//         payableAmount = amount - (amount * 20)/100
// }
//    console.log("Total amount is",amount);
//    console.log("Discount amount is ",amount - payableAmount);
//    console.log("payable amount",payableAmount);
// Method : 02 
// let amount = Number(prompt("Enter amount"))
// let dis = 0
// if(amount>0 && amount<=5000) dis = 0
// else if(amount>=5000 && amount<= 7000) dis = 5
// else if(amount>=7000 && amount<= 9000) dis = 10
// else dis = 20
// console.log("Total amount is : ",amount);
// console.log("discount amount ",(dis*amount)/100);
// console.log("amount payable " , (amount - (dis*amount)/100));

// 07 : Bijli Bill units calculation with multiple price
// // Method : 01 Top Down approche
// let unit = Number(prompt("Enter unit"))
// let amount = 0
// if(unit>0 && unit <=100) console.log(unit*4.2);
// else if(unit >100 && unit<=200) {
//         console.log(((100*4.2)+(unit-100)*6));
// }
// else if(unit>200 && unit<=400){
//        console.log( ((100*4.2)+ (100*6) + (unit - 200)*8));
// }
// else console.log(((100*4.2)+(100*6)+(200*8) + (unit -400)*13));
// // Method : 02 Bottom Up Aproche
// let unit = Number(prompt("Enter unit"))
// let amount  = 0
// if(unit >= 400) {
//         amount = (unit-400)*13
//         unit = 400
// }
// if(unit>=200 && unit <= 400){
//         amount = amount + (unit-200)*8
//         unit = 200
// }
// if(unit>=100 && unit<=200){
//        amount = amount + (unit-100)*6
//        unit = 100
// }
// if(unit>0 && unit<=100){
//         amount = amount + (unit*4.2)
// }
// console.log(amount);

// 08 : counting Number of days in a given month of a year
// let month = Number(prompt("Enter month"))
// let year = Number(prompt("Enter year"))
// let days = 0
// if(month == 2){
//      if((year%400 == 0)||(year%4 == 0 && year%100 != 0)){
//         days = 29
//      }else {
//         days = 28
//      }
// }else if(month == 1 || month == 3 || month ==5 || month == 7 || month == 8
//      ||   month == 10 || month == 12
// ) days = 31
// else days = 30
// console.log(days);

// if-else with else-if
// let marks = Number(prompt("Enter Your marks"))
// if(marks>=90)console.log("Excellent Result");
// else if(marks>=80)console.log("very Good Result");
// else if(marks>=75)console.log("Good Result");
// else if(marks>=33)console.log("You Are Just Passed");
// else console.log("Ooh! You Fail");

// if-else 
// let age = Number(prompt("Enter Your Age"))
// if(age>= 18){
//         console.log("Valid Voter");
// }else {
//         console.log("invalid Voter");
// }

// OTP Genrate karna : Random 4Digit otp genrate karega
// console.log(Math.trunc((Math.random()*8999)+1000));

// let prompt = require("prompt-sync")() // it is directely not Working in Browser 
// require Node.js ka feature or prompt-sync Node.js ka package hai
// let p = Number(prompt("Enter Principal"))
// let r = Number( prompt("Enter Rate"))
// let t = Number(prompt("Enter time"))

// // let Result = ((p*Math.pow(1+(r/100),t)-p).toFixed(2))
// let Result =  ((p*Math.pow(1+r/100,t) - p).toFixed(2))
// console.log(Result);

// console.log(Math.min(2,0,-3,-7,5)); // min = -7
// console.log(Math.pow(2,3)); // O/P : 8
// console.log(Math.ceil(10.1));   o/p : 11 ( value +1 kar dega )
// console.log(Math.floor(10.9)); //  o/p : 10 (floor value dega)
// console.log(Math.round(10.4));  o/p : 10 (10.1 to 10.4 tak floor value)
// console.log(Math.round(10.5));  o/p : 11 (10.5 to 10.9 tak ceil value)
// console.log(Math.trunc(10.647222)); // o/p : 10
// console.log(Math.pow(3,2)); // 3*3 = 9
// console.log(Math.max(10,45,78,63)); // o/p : 78 highest value return karega
// console.log(Math.min(76,23,45,0,23,89,-7,-4,-100)); // o/p : -100 lowest value return 
// console.log(Math.random()); // 0(inclusive) to 1(exclusive) ke random values dega 
// console.log(233.4658.toFixed(2)); //o/p : 233.46 it used for point ke bad kitne value chahiye 

// Increment And Decrement 
// let a = 10++
// let a = 10
// ++(++a)   // error (left-hand side)
// console.log(a);

// let a = true  // true = 1
// a++          //  1 + 1 = 2
// console.log(a); // o/p = 2
// console.log(a++); // value use then increment
// console.log(a);  // o/p = 3

// let a = 12
// let b = 15
// let c = 8
// let d = (a++) + (--b) - (c++) + (++a) // pehle (-) then plus (+) karna hai
// console.log(d);

// Post increment 
// let a = 10
// a++
// console.log(a);
// let a = 10
//  let b = a++
//  console.log(a);
//  console.log(b); // because b mai a ko increment kiya a++
//  Pre increment
// let x = 10
// let y = ++x
// console.log(x);
// console.log(y);

// Logical Operator : && , || , !
// console.log(!true); // false
// console.log(!false); // true
// ||
// console.log(56>60||60>75||5<8); // true
// console.log( false||false||true); // true
// &&
// console.log(12>7 && 8<56); // true
// console.log(true && true); // true
// console.log(16>56 && 5<31 && 25>5); // false
// console.log(false && true); // false 
// console.log(true && false); // false
// console.log(false && false); // false

// Relational Operator : >=, > , < , <= , ==  it returns only booleans
// console.log(0 != 2); // o/p : true
// console.log(9 != 9); // o/p : false 
// console.log('9' === 9); // false it check type of data 
// console.log('9' == 9);// it is also true 
// console.log(9 == 9); // o/p : true
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