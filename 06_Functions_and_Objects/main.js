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
    // console.log(`Current Element ${element}`)
    // console.log(`Current Index ${index}`)
    // console.log(`Array ${array}`)
    // console.log(`This Argumen ${this}`) 
//     return element + element;
// }, 10)
// console.log(addSelf)


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


/*=================================================================*/

/*
    - Reduce 
    --- method executes a reducer function on each element of the array, 
    --- resulting in a single output value.


    - Syntax: 
    
    reduce(callBackFunction(Accumulator, Current Value, Current Index, Source Array) {}, initialValue)
    - Accumulator => the Accumulated value previously returned in the last invocation
    - Current Value => The Current Element Being Processed in teh Array
    - Index => The Index If The Current Element Bing Processed in the Array.
    ---------- Starts from index 0 if an initialValue is provided.
    ---------- Other wise, it start from index 1.
    - Array => The Current Array 
*/


// let nums = [10, 20, 15, 30]

// let add = nums.reduce(function(acc, current, index, arr) {
//     return acc + current
// }, 5)

// console.log(add);


/*
    Reduce Practice 
    - Longest Word
    - Remove Characters + Use Reduce
*/

// let theBiggest = ['Bla', 'Propaganda', 'Other', 'AAA', 'Battery', 'Test'];

// let check = theBiggest.reduce(function (acc, current) {
//     // console.log(`Acc => ${acc}`)
//     // console.log(`Current Element => ${current}`)
//     // console.log(`##########################`)
//     // console.log(acc.length > current.length ? acc : current)
//     return acc.length > current.length ? acc : current;
// })

// console.log(check)

// let removeChars = ['E', '@', '@', 'L', 'Z', '@', '@', 'E', 'R', '@', 'O'];

// let finalString = removeChars.filter(function(ele) {
//     return ! ele.startsWith("@")
// }).reduce(function(acc, current) {
//     return acc + current
// })

// console.log(finalString)
// // console.log(finalString.join(""))



/*=================================================================*/

/*
    forEach
    - Method executes a provided function once for each array element.

    SYNTAX:
    
    forEach(callBackFunction(Element, Index, Array) { }, thisArgument)

    - Element => The Current Element Being Processe in the Array
    - Index => The Index of the current element being processed in the array.
    - Array => The Current Array

    -- Note --
    - Doesn't Return Anything [Undefined]
    - Break Will Not Break The Loop
*/

// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div")
// // console.log((allLis));

// allLis.forEach(function (ele) {
//     ele.onclick = function() {
//         //remove active class from all elements
//         allLis.forEach(function (ele) {
//             ele.classList.remove("active")
//         })
//         // Add Active class to this element
//         this.classList.add('active')
//         // hide all divs
//         allDivs.forEach(function (ele) {
//             ele.style.display = 'none'
//         })
//     };
// })


/*
    Higher Order Functions 
    
    ---- Challenge ----
   
    You can Use:
    
    - ,
    - _
    - Space
    - True => 1 => One Time Only In The Code

    You Cannot Use:

    - Numbers
    - Letters

    You Must Use:
    - [Filter + Map + Reduce + Your Knowledge]
    - Order Is Not Important
    - All In One Chain
*/

// let myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z'

// console.log(!isNaN(1))

// // let solution = myString.split("").filter(function(ele) {return isNaN(ele) ? ele : ""}).join("")
// let solution = myString.split(",").filter(function (ele) {return isNaN(ele)}).map(function (ele) {return ele.length > 1 ? ele[+true] : ele === "_" ? " " : ele}).filter(function (ele, index, array) {return index !== array.length -true}).reduce(function(acc, ele) {return acc + ele})

// console.log(solution)
// console.log(solution) // Elzero Web School

/*=========== DONE ================*/

/*================================================================================================*/ 
/*================================================================================================*/ 
/*================================================================================================*/ 
/*================================================================================================*/ 
/*================================================================================================*/ 
/*================================================================================================*/ 



/*
    Object 
    - Dig Deeper
    - Dot Notation vs Bracket Notation
    - Dynamic Property Name
*/

// let myVar = "country"

// let user = {
//     theName: "Youssef",
//     country: "Germany",
//     'country of': "Egypt",
//     theAge: 19,
//     jobTitle: "an English Customer Service Provider Agent",
//     jobCompany: "Teleperformance"
// };

// console.log(`Hello My Name is ${user.theName}
//     I am ${user.theAge}
//     I am currently working as ${user.jobTitle}
//     in ${user.jobCompany} Company`)

// console.log(`${user.theName}`); // Youssef
// console.log(`${user['theName']}`);   // Youssef

// console.log(user.myVar)      // undefined
// console.log(user[myVar])    // Germany

// console.log(`${user['country of']}`);   // Egypt

/*================================================================================================*/ 

/*
    Object
    - Nested Object And Trainings
*/

// let user = {
//     name: "Youssef",
//     age: 19,
//     skills: ["HTML", "CSS", "JavaScript", "Advanced Linux Adminstration"],
//     available: false,
//     addresses: {
//         ksa: "Riyadh",
//         egypt: {
//             first: "Cairo",
//             second: "Beni-Suif",
//         },
//     },
//     checkAv: function () {
//         if (user.available === true) {
//             return `Free For Work`
//         } else {
//             return `Not Free`
//         }
//     }
// }

// console.log(user.name);
// console.log(user.age);
// console.log(`Skills Are:\n=============\n${user.skills.join("\n")}`);
// console.log(user.addresses.egypt.second);
// console.log(user['addresses']['egypt']['first']);
// console.log(user.checkAv())

/*================================================================================================*/ 

/*
    Object
    - Create With New Keyword new Object();  
*/

// normal way

// let user = {};
// user.name = "Youssef Mostafa"
// user.age = 19
// user.country = "Egypt"
// console.log(user.name, user.age);


// user.sayHello = function () {
//     return `Hello Friend ${user.name}`
// }

// console.log(user)
// console.log(user.age)
// console.log(user.country)
// console.log(user.sayHello())


// new way

// let user = new Object();

// user.name = "Youssef Mostafa"
// user.age = 19
// user.country = "Egypt"

// console.log(`Hello My Name is ${user.name} I am ${user.age}, and I Live in ${user.country} :)`);



/*================================================================================================*/ 

/*
    Function this Keyword
    - this Introduction
    - this Inside Object Method
    --- When a function is called as a method of an object,
    --- its this is set to teh object the method is called on.
    - Global Object
    - Test Variables With Window And This
    - Global Context
    - Functoin Context

    Search
    - Strict Mode
*/

// console.log(this)
// console.log(this === window)    // true

// myVar = 100;

// console.log(window.myVar) // 100
// console.log(this.myVar)  //  100

// function sayHello() {
//     return this
// }

// console.log(sayHello())             // window
// console.log(sayHello() === window)  // true

// document.getElementById("cl").onclick = function () {
//     console.log(this)
// }


// let user = {
//     age : 19,
//     ageInDays: function() {
//         return this.age * 365
//     },
// };

// console.log(user.age)
// console.log(user.ageInDays())


/*
    Object
    - Create Object With Create Method
*/

// let user = {
//     age: 19,
//     doubleAge: function() {
//         return this.age * 2
//     },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());


// let obj = Object.create({

// });
// obj.a = 100;
// console.log(obj)



// let copyObj = Object.create(user)

// copyObj.age = 20

// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());


/*================================================================================================*/ 

/*
    Object
    - Create Object with assign Method
*/

// let obj1 = {
//     prop1: 1,
//     meth1: function () {
//         return this.prop1
//     },
// };

// let obj2 = {
//     prop2: 2,
//     meth2: function () {
//         return this.prop2
//     },
    
// };

// let targetObject = {
//     prop1: 100,
//     prop3: 3,
// }

// let finalObject = Object.assign(targetObject, obj1, obj2);

// finalObject.prop1 = 200;

// finalObject.prop4 = 10;

// console.log(finalObject);


// let newObject = Object.assign({}, obj1, {prop5: 5, prop6: 6,})
// console.log(newObject);

                // ____
                // |  _ \  ___  _ __   ___
                // | | | |/ _ \| '_ \ / _ \
                // | |_| | (_) | | | |  __/
                // |____/ \___/|_| |_|\___|