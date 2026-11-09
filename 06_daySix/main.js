// function sayHello(name = "Enginear", role = "Developer") {
//     name = "Youssef Mostafa"
//     role = "Front-End Developer"
    
//     return `Hello ${name} You are the best ${role} in our Company :)`
// }
// document.write(sayHello())



// function calc(num1, num2, num3) {
//     return num1 + num2 + num3
// }

// console.log(calc(10, 20, 30));

// in case the user Entered more than 3 arguments the function will crash, so we use the Rest Parameters like this: 


// function calc(...numbers) {
//     // in our case the "numbers" here is an array of parameters
//     // console.log(Array.isArray(numbers)) // >> True
//     let result = 0    

//     for (let i = 0; i < numbers.length; i++) {
//         // console.log(numbers[i])

//         result += numbers[i]
//     }
//     return `Final Result IS ${result}`
// }

// console.log(calc(10, 20, 30, 40, 50));



// ===============================================================
// ===============================================================
// ===============================================================

/*
    Function Advanced Practice
    - Parameters
    - Default
    - Rest
    - Loop
    - Condition
*/ 

// function showInfo(userName = "Unknown", age = "Unknown", rate = 0, show = "Yes", ...skills) {
//     document.write(`
//         <div>
//             <h1>Welcome, ${userName}</h1>
//             <h2>Age: ${age}</h2> 
//             <h2>Hour Rate: $${rate}</h2>
//         </div>
//         `)
//     if (show === "Yes") {
//         if (skills.length > 0) {
//             document.write(`<p>Skills: ${skills.join(" | ")}</p>`)
//         }else {
//             document.write(`<p>Skills: No Skills </p>`)
//         }

//     }else {
//         document.write(`<p>Skills are hiddin</p>`) 
//     }
//     document.write(`</div>`)
// }

// showInfo("Youssef Teama", 19, 20, "Yes", "Html", "CSS", "JavaScript", "TypeScript", "Angular", "Node.js")




// ===============================================================
// ===============================================================
// ===============================================================

/*
    Function - Random Argument Challenge
    ====================================
    Create Function showDetails
    Function Accept 3 Parameters [a, b, c]
    Data Type For Info Is:
    - String => Name
    - Number => Age
    - Boolean => Status
    Argument Is Random
    Data Is Not Sorted Output Depend On Data Types
    - Use Ternary Conditional Operator
*/



// function showDetails(...details) {
//     const name = details.find(details => typeof details === "string") || "Unknown";
//     const age = details.find(details => typeof details === "number") || 0;
//     const status = details.find(details => typeof details === "boolean") ?? false;
//     let answer = ""
//     if (status === true) {
//         answer = "You are Hired with us"
//     }else { 
//         answer = "You are Not Hired with us"
//     }

//     return `Hello ${name}, You are ${age}, ${answer}`
// }

// console.log (showDetails("Youssef Mostafa", 19, true))
// console.log (showDetails(19, "Youssef Mostafa" , true))
// console.log (showDetails(false ,"Youssef Mostafa", 19))


// ===============================================================
// ===============================================================
// ===============================================================

/*
    Function
    - Anonymous Function
    - Calling Named Function vs Anonymous Function
    - Argument To Other Function
    - Task Without Name
    - SetTimeout
*/


// function calc(num1, num2) {
//     return num1 + num2;
// }

// console.log(calc(10, 20));


// let calculator = function (num1, num2) {
//     return num1 + num2;
// };

// console.log(calculator(10, 20))

// // document.getElementById("show").onclick = function () {
// //     console.log("Hello Friend")
// // }

// setTimeout(function () {
//     console.log(`Hello`)
// }, 2000)


// function sayHello() {
//     console.log(`Hello Youssef`)
// }

// document.getElementById('show').onclick = sayHello;


// ===============================================================
// ===============================================================
// ===============================================================

/*
    Function
    - Function Inside Function
    - Return Function
*/

// Example 1
// function sayMessage(firstName, lastName){
//     let message = "Hello"
//     // Nested Function
//     function concatMsg() {
//         message = `${message} ${firstName} ${lastName}`;
//     }

//     concatMsg();

//     return message;
// }

// console.log(sayMessage("Youssef", "Mostafa"));



// // Example 2

// function sayMessage(firstName, lastName){
//     let message = "Hello"
//     // Nested Function
//     function concatMsg() {
//         return `${message} ${firstName} ${lastName}`;
//     }
//     return concatMsg();
// }

// console.log(sayMessage("Youssef", "Mostafa"));



// Example 3

// function sayMessage(firstName, lastName){
//     let message = "Hello"
//     // Nested Function
//     function concatMsg() {
//         function getFullName() {
//             return `${firstName} ${lastName}`;
//         }
//         return `${message} ${getFullName()}`;

//     }
//     return concatMsg();
// }

// console.log(sayMessage("Youssef", "Mostafa"));



// ===============================================================
// ===============================================================
// ===============================================================

/*
    Function
    - Arrow Function
    - Regular vs Arrow [Param + No Param]
    - Multiple Lines
*/

// here is multple ways to write a function

// 1. Normal way

// function print() {
//     return 10;
// }

// console.log(print())


// 2. Variable method

// let print = function () {
//     return 10;
// }

// console.log(print())


// 3. Arrow Method

// let print =  () => {
//     return 10;
// }

// console.log(print())


// let print = function (num) {
//     return num;
// }


// let print = (num) => {
//     return 10;
// }

// console.log(print(100))


// ===============================================================
// ===============================================================
// ===============================================================
// ===============================================================

/*
    Scope
    - Global And Local Scope
*/

// var a = 1;
// let b = 2;

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// function showText() {
//     var c = 10;
//     let d = 20
//     console.log(`Function - From Local ${c}`);
//     console.log(`Function - From Local ${d}`);
    
//     console.log(`Function - From Global ${a}`);
//     console.log(`Function - From Global ${b}`);
//     var a = 1;
//     let b = 2;
// }

// showText()




// ===============================================================
// ===============================================================
// ===============================================================
// ===============================================================


/*
    Scope
    - Block Scope [If, Switch, For]
*/


// var x = 10;

// if (10 === 10) {
//     var x = 50;
// };
// console.log(x);


// var x = 10;

// if (10 === 10) {
//    let x = 50;
// };
// console.log(x);

// var a = 1;
// let b = 2;

// function showText() {
//     var a = 10;
//     let b = 20
//     console.log(`Function - From Local ${a}`);
//     console.log(`Function - From Local ${b}`);    
// }

// console.log(`From Global ${a}`);
// console.log(`From Global ${b}`);

// showText();


// ===============================================================
// ===============================================================
// ===============================================================
// ===============================================================

/*
    Scope
    - Lexical Scope

    Search
    - Execution Context
    - Lexical Environment
*/

// let a = 30

// function parent () {
//     let a = 10

//     function child() {
//         console.log(`from child ${b}`)
//         // let a = 20
//         console.log(a)

//         function grandChild() { 
//             let b = 100
//             let a = 10
//             console.log(`from Grand ${a}`)
//         }

//         grandChild()
//     }

//     child();
// }

// parent()


// ===============================================================
// ===============================================================
// ===============================================================
// ===============================================================


// Higher Order Functions

//  Map

// let myNums = [1, 2, 3, 4, 5, 6]

// let newArray = []

// for (let i = 0; i < myNums.length; i++) {
//     newArray.push(myNums[i] + myNums[i])
// }

// console.log(newArray)

// Same Idea with MAP

// let addSelf = myNums.map(function(element, index, array) {
//     // console.log(`Current Element ${element}`)
//     // console.log(`Current Index ${index}`)
//     // console.log(`Array ${array}`)
//     // console.log(`This Argumen ${this}`) 
//     return element + element;
// }, 10)

// let addSelf = myNums.map((element) => element + element)
// console.log(addSelf)

// function addition(ele) {
//     return ele + ele
// }

// let add = myNums.map(addition)

// console.log(add)
/*===============================================*/


/*
    Map
    - Swap Cases
    - Inverted Numbers
    - Ignore Boolean Value
*/ 

// let swappingCases = 'elZERo';
// let invertedNumbers = [1, -10, -20, 15, 100, -30]
// let ignoreNumbers = 'Elz123er4o'

// let sw = swappingCases.split("").map(function (ele) {
//     // Ternary Operators : Condition ? True : False
//     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
// }).join("");

// console.log(sw);


// let inv = invertedNumbers.map(function (ele) {
//     return -ele;
// })

// console.log(inv)

// let ignore = ignoreNumbers.split("").map(function (ele){
//     return  isNaN(parseInt(ele)) ? ele: "";
    
// }).join("");

// console.log(ignore)

/*===============================================*/

/*
    Filter
    - method creates a new array
    - with all elements that pass the test implemented by the provided function
*/

// Test MAP vs FILTER

// let addMap = numbers.map(function(ele) {
//     return ele + ele;
// });

// console.log(addMap);


// let addFilter = numbers.filter(function(ele) {
//     return ele + ele;
// });

// console.log(addFilter);

// Get Friends with Name Starts with A
// let friends = ['Ahmed', 'Samed', 'Saye', 'Asmaa', 'Amgad', 'Israa']

// let filterdFriends = friends.filter(function (ele) {
//     return ele.startsWith("A");
// });

// console.log(filterdFriends);

// // Get even Numbers Only
// let numbers = [11, 20, 2, 5, 17, 10]

// let evenNumbers = numbers.filter(function(ele) {
//     return ele % 2 === 0
// })

// console.log(evenNumbers)


/*
    Filter
    - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
// let sentence = `I Love Foood Code Too Playing Much`

// let smallWords = sentence.split(" ").filter(function(ele) {
//     return ele.length <= 4
// }).join(" ")

// console.log(smallWords)

// // Ignore Numbers
// let ignoreNumbers = `Elz123er4o`

// let ign =  ignoreNumbers.split("").map(function(ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
// }).join("");


// // the filter in this case works that exact same as the map function.
// // let ignoreNumbers = `Elz123er4o`

// // let ign =  ignoreNumbers.split("").filter(function(ele) {
// //     return isNaN(parseInt(ele)) ? ele : "";
// // }).join("");

// console.log(ign)


// // Filter Strings + Multiply
// let mix = "A13BS2ZX"

// let mixedContent = mix.split("").filter(function(ele) {
//     return !isNaN(parseInt(ele));
// }).map(function (ele){
//     return ele * ele
// }).join("")
// console.log(mixedContent)