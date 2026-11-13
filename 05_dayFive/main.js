/*
    Functions
    - What Is Functions ?
    - User-Defined vs Built In 
    - Syntax + Basic Usage 
    - Example From Real Life
    - Parameter + Argument
    - Practical Example
*/

// console.log(typeof console) // Object
// console.log(typeof console.log) // Functino


/* Syntax 

keyWord [function] [functionName] (parameter goes here) {
        Block Of Code    
}
*/ // Example

// function sayHello(userName) {
    
//     console.log(`Hello ${userName}`)
// }

// the function will never work till you return a specefic value at the end of the function or you call it after you set it.

// sayHello(`Youssef`)  // Hello Youssef 
// sayHello(`Mostafa`)  // Hello Mostafa


// =============================================================================
// =============================================================================
// =============================================================================
// =============================================================================

// Function Advanced Examples


// function sayHello(userName, age) {    
//     if (age < 18) {
//         console.log(`Unfortunately ${userName}, This App Is Not for those Below 18 Years Old`)
//     }else{
//         console.log(`Hello ${userName} and Your Age is ${age}`)
//     }
// }


// sayHello(`Youssef`, 19)  // Hello Youssef 
// sayHello(`Mostafa`, 64)  // Hello Mostafa
// sayHello(`Ziad`, 14)  // Hello Mostafa


// function generateYears(start, end, exclude) {
//     for (let i = start; i <= end; i++) {
//         if (i === exclude) {
//             continue
//         }
//         console.log(i)
//     }
// }

// generateYears(12, 20, 15 && 20)



/*
    Functions
    - Return
    - Automatic Semicolon Instertion [No Line Terminator Allowed]
    - Interruptting
*/ 

// function sayHello(userName) {
//     console.log(`Hello ${userName}`); 
// }

// sayHello("Joe")




// function calcTwoNums(first, second) {
//     first = 15;
//     second = 20;

//     return (first + second);
// }

// sumTwoNums = calcTwoNums();
// console.log(sumTwoNums);


// function generate(start, end) {
//     for (let i = start; i <= end; i++) {
//         console.log(i);
//         if (i == 15) {
//             return `Interruptting`
//         }
//     }
// }

// generate(10, 30)




/*
    Functions
    - Default Function Parameters
    - Function Parameters Default [Undefined]
    - Old Strategies [Condition + Logical Or]
    - ES6 Method
*/ 


// This is how to change the default parameter Value from undefined to anything you want.
// function sayHello(userName = "Unknown", age = "Unknown") {
//     return `Hello ${userName} Your Age Is ${age}`
// }

// console.log(sayHello("Youssef", 19))