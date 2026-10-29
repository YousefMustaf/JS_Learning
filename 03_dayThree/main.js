// in order to write a number and a specefic number of Zeros we use this method.

// console.log(1e6); // This will print 1 and six 0.



// =========================================================
// =========================================================
// =========================================================



// Number Methods

/*
    - Two Dots To call a methods
    - toString() ==> returnes the value of the number as a string value
    - toFixed() 
    - parseInt()
    - isInteger()
    - isNaN()
*/

// toFixed()

// console.log(100.555555);
// console.log(100.555555.toFixed(2)); // returnes the Value as a string.


// parseInt()

// console.log("100")
// console.log(parseInt("100.80")) // Returnes the value as a Number.
// This one does delete any floating point Number.

// console.log(parseFloat("100.80")) // Returnes the value as a Number.
// This one keeps the Floating point number.


// isInteger()
// console.log(Number.isInteger("100"));   //false
// console.log(Number.isInteger(100.400)); //false
// console.log(Number.isInteger(100));     //true



// isNaN()

// console.log(Number.isNaN("Youssef")); // false
// console.log(Number.isNaN("Youssef" / 20)); // true




// // NUMBER CHALLENGE

// let a = 1_00;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;


// // Find Smallest Number in All Variables And Return Integer

// console.log(Math.min(a, b, c, d));

// // User Variable a + d One time to get the Needed Output
// console.log(Math.trunc((a * d) * 41.67));  // 10000

// // Get Integer "2" from d Variable with 4 methods

// console.log(Math.floor(d));
// console.log(Math.round(d));
// console.log(Math.trunc(d));
// console.log(parseInt(d));


// =========================================================
// =========================================================
// =========================================================



/*  
    String Methods
    - indexOf(Value [Mand], Start [OPT] 0)
    - lastIndexOf(Value [Mand], Start [Opt] Length)
    - slice(Start [Mand], End [Opt] Not Include End)
    - repeat(Times)
    - split(Separator [Opt], Limit [Opt])
*/

// let a = "Elzero Web School";

// console.log(a.indexOf("Web"));
// console.log(a.indexOf("Web", 8));
// console.log(a.lastIndexOf("Web"));
// console.log(a.slice(0))
// console.log(a.slice(7))
// console.log(a.slice(7,11))
// console.log(a.slice(-6))
// console.log(a.repeat(6))
// console.log(a.split())
// console.log(a.split(" "))
// console.log(a.split(" ", 2))
// console.log(a.split("", 6))



// console.log(a.substring(2, 6))  //same resault
// console.log(a.substring(6, 2))  //same resault


// =========================================================
// =========================================================
// =========================================================
// =========================================================
// =========================================================
// =========================================================

// IF Conditionas

/*
    Control Flow 
       
        if
        else if
        else


    Syntax:
        if (Condition) {
            Block Of Code 
        } else if (2nd Condition) {
            Block  Of Code  
        } else{
            Block Of Code
        }
*/

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "KSA";

// if (discount == true) {
//     price -= discountAmount
// } else if (country == "Egypt"){
//     price -= discountAmount 
// } else{
//     price -= 10;
// }

// console.log(price)



// Nested if conditions


// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let student = true
// if (discount == true) {

//     price -= discountAmount

// } else if (country == "Egypt"){

//     price -= discountAmount 
//     if (student === true) {
        
//         price -= discountAmount + 30
//     } else  {
//         price -= discountAmount + 10
//     }

// } else{

//     price -= 10;

// }

// console.log(price)


// Conditional (Ternary) Operator

// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;

// // normal condition
// // if (theGender === "Male") {
// //     console.log("Mr");
    
// // }else{
// //     console.log("Mrs");
    
// // }


// // Ternary

// // Condition ? If True : If False

// let result = theGender === "Male" ? ("Mr") : ("Mrs")

// document.write(`Hello ${result}.${theName}`)

// // theAge < 20 ? console.log(20) : theAge > 20 && theAge < 60 ? console.log("20 to 60") : theAge > 60 ? console.log("Older than 60") : console.log("Unknown")


// // this the well formatted form of the previous condition.
// theAge < 20 
//     ? console.log(20) 
//     : theAge > 20 && theAge < 60 
//     ? console.log("20 to 60") 
//     : theAge > 60 
//     ? console.log("Older than 60") 
//     : console.log("Unknown")

// IF Conditions Challenge

// let a = -10

// a < 10 && a > 0
//     ? console.log(10)
//     : a >= 10 && a <= 40
//     ? console.log("10 to 40")
//     : a > 40
//     ? console.log(40)
//     :console.log("Unknown")




// =========================================================
// =========================================================
// =========================================================
// =========================================================
// =========================================================
// =========================================================

/*
    Switch Statment
    switch(expression) {
        Case 1:
            Block of Code
            break;
        Case 2:
            Block of Code
            break;
        Default:
            Code Block
    }
    
    - Default Ordering
    - Multiple Match
*/ 

// let day = 1;

// switch (day) {
//     case 0:
//         console.log("Saturday")
//         break;
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Monday")
//         break;
//     default:
//         console.log("Unknown Day")
//         break
// }


// CHALLANGE

let job = "Developer";
let salary = 0;

switch (job) {
    case "Manager":
        salary = 8000
        console.log(`Your Salary is ${salary}`)
        break
    case "IT":
    case "Support":
        salary = 6000
        console.log(`Your Salary is ${salary}`)
        break
    case "Developer":
    case "Designer":
        salary = 7000
        console.log(`Your Salary is ${salary}`)
        break
    default:
        salary = 4000
        console.log(`Your Salary is ${salary}`)

}


let holidays = 3;
let money = 0;

 if (holidays == 0) {
    money = 5000;
    console.log(`My Money is ${money}`)
 }else if (holidays === 1 || holidays == 2) {
    money = 3000
    console.log(`My Money is ${money}`)
 }else if(holidays === 3) {
    money = 2000
    console.log(`My Money is ${money}`)
 }else if (holidays === 4){
    money = 1000
    console.log(`My Money is ${money}`)
 }else if (holidays >= 5){
    money = 0
    console.log(`My Money is ${money}`)
 }else{
    console.log("Plese Enter a Valid holidays Number")
 }