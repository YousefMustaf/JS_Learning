/*
    Array Methods [Adding And Removing]
    - unshift("", "") Add Element To The First
    - push("", "") Add Element to The End
    - shift() Remove First Element From Array
    - pop() Remove Last Element From Array
*/

// let myFriends = [`Ahemd`, `Mohamed`, `Sayed`, `Youssef`];
// console.log(myFriends);

// myFriends.unshift("Joe", "Cypher")
// console.log(myFriends);

// myFriends.push("Sova", "Raze")
// console.log(myFriends);

// myFriends.shift()
// console.log(myFriends);

// let first = myFriends.shift()
// console.log(`First Name is ${first}`);


// let last = myFriends.pop()
// console.log(`Last Name is ${last}`)


// Searching Array
/*
    - indexOf(Search Element, From Index [OPT])
    - lastIndexOf(Search Element, From Index [OPT])
    - includes(valueToFind, fromIndex [OPT])
*/

// let myFriends = [`Ahmed`, `Mohamed`, `Sayed`, `Youssef`, `Ahmed`];
// console.log(myFriends);


// console.log(myFriends.indexOf("Ahmed"));        // 0
// console.log(myFriends.indexOf("Ahmed", 2));    // 4


// console.log(myFriends.lastIndexOf("Ahmed"));        // 4
// console.log(myFriends.lastIndexOf("Ahmed", -2));   // 0


// console.log(myFriends.includes("Ahmed"));   // 0


// if (myFriends.lastIndexOf("Osama") === -1) {
//     console.log("Not Found");
    
// }


// Sorting Arrays

// let myFriends = [10, `Ahmed`, `Mohamed`, 1000, 100, 20, "10", -20, -10];
// console.log(myFriends)
// console.log(myFriends.sort())
// console.log(myFriends.reverse())


// Slicing Array

// let myFriends = [`Ahmed`, `Mohamed`, "Ali", "Osama", "Youssef", "Ameer"];
// console.log(myFriends)

// // Slice
// console.log(myFriends.slice(2, 5))
// console.log(myFriends.slice(-3))

// // Splice
// console.log(myFriends)
// myFriends.splice(1, 2, "Sameer", "Dark")

// console.log(myFriends)


// Joining Arrays


// let myFriends = [`Ahmed`, `Mohamed`, "Ali", "Osama", "Youssef", "Ameer"];
// let myNewFriends = ['Samar", "Sameh']
// let schoolFriends = ['Haytham', 'Shady']

// let allFriends = myFriends.concat(myNewFriends, schoolFriends)

// console.log(myFriends)
// console.log(allFriends)

// console.log(allFriends.join(" | ").toUpperCase());


// ARRAYS CHALLENGE

// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"]

// // Write code here

// console.log(my.slice(zero, ++counter).reverse()); // Check

// my = my.slice(zero, ++counter).reverse()
// console.log(my.slice(my.shift(), --counter).sort());    // ["Elham], "Mazero"
// console.log(my.slice(my.shift(),--counter).reverse());


// ===============================================================================
// ===============================================================================
// ===============================================================================
// ===============================================================================s


/*
    For Loop: 

    Syntax:

        for ([initialize] [condition] [3]) {
            --> Block of Code     
        }
*/

// for (let i = 0; i < 10; i++) {
//     document.write(`Hello Friend\n`)
//     console.log(i)
// }

// Loop On Sequences

// let myFriends = [1, 2, "Osama","Joe", 12, 12, 11, 33, 44, "Ahmed", "Sayed", "Ali", "Amira"]

// let namesOnly = [];

// if (typeof myFriends[0] === 'string') {
//     namesOnly.push(myFriends[i])
// }
// // console.log(myFriends.length)
// for (let i = 0; i < myFriends.length; i++) {
//     if (typeof myFriends[i] === 'string') {
//         namesOnly.push(myFriends[i])
//     }
// }

// console.log(`Welcome Back ${namesOnly.join(" | ")}`)  


// Nested Loops


// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// let models = [2026, 2027]

// for (let i = 0; i < products.length; i++) {
//     console.log(`=> ${products[i]}`);
//     console.log("#".repeat(10)) 
//     console.log("Colors: ") 
//     for (let j = 0; j < colors.length; j++) {
//         console.log(`- ${colors[j]}`)
//     }
//     console.log("Models: ") 
//     for (let k = 0; k < models.length; k++) {
//         console.log(`- ${models[k]}`)
//     }
// }


// Loop Control - Break, Continue, Label

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

// let colors = ["Red", "Green", "Black"];

// mainLoop:
// for (let i = 0; i < products.length; i++) {
//     console.log(products[j])
    
//     for (let j = 0; j < colors.length; j++) {
//         console.log(`- ${colors[j]}`)
//     }
// }

// for (let i = 0; i < products.length; i++) {
//     console.log(products[i])

//     for (let j = 0; j < colors.length; j++) {
//         console.log(`-> ${colors[j]}`)
//         if (colors[j] === "Green") {
//             break
//         }
//     }
// }

// console.log("$".repeat(40))
// console.log(`${"$".repeat(15)} Seperate ${"$".repeat(15)}`)
// console.log("$".repeat(40))
// // Here comes the use case of the Label
// mainLoop:
// for (let i = 0; i < products.length; i++) {
//     console.log(products[i])
// 
    // for (let j = 0; j < colors.length; j++) {
    //     console.log(`-> ${colors[j]}`)
    //     if (colors[j] === "Green") {
    //         break mainLoop;
    //     }
    // }
// }



// Advanced For Loop
// we can make the loop like this: 

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
// let i = 0

// for (;;) {
//     console.log(products[i]);
//     i++;
//     if (i === products.length) {
//         break
//     };
// }

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"]
// let colors = ["Red", "White", "Blue"]

// let showCount = 5;

// document.write(`<h1>Show ${showCount} Products</h1>`)

// for (let i = 0; i < showCount; i++) {
//     document.write(`<div>`)
//     document.write(`<h2>[${i + 1}] ${products[i]}</h2>`) 
//     for(let j = 0; j < colors.length; j++) {
//         // document.write(`<h3>${j + 1}. ${colors[j]}</h3>`)
//     }
//     document.write(`<h3>${colors.join(" | ")}</h3>`)
//     document.write(`</div>`)
// }


// ===============================================================================
// ===============================================================================
// ===============================================================================
// ===============================================================================

// While Loop

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"]
// console.log("Hello........");

// let i = 0;

// while (false) {
// }

// do {
//     console.log(products[i]);
//     i++;
// } while (false);

// console.log(i)

// LOOP CHALLENGE




let myAdmins= ["Ahmed", "Osama","Sayed", "Stop", "Zarzur", "Samera"]
let myEmployees = [
    'Amgad',
    'Youssef',      // will not have any managers due to non match at the first letter of the name.
    'Abid',
    'Samah',
    'Ameer',
    'Omar',
    'Othman',
    'Amany',
    'Samia'
];

const activeAdmins = []
// if (myAdmins === "Stop") {
    
// }
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") break;
    activeAdmins.push(myAdmins[i])
}
document.write(`<div>We Have ${activeAdmins.length} Admins</div><hr>`)

for (let i = 0; i < activeAdmins.length; i++) {
    const manager = activeAdmins[i]
    document.write(`
        <div>The Admin For Team ${i + 1} is ${activeAdmins[i]}</div>
        <h3>Team Members: </h3>
        `)
    
    let employeeNumber = 1;
    document.write(`<ul></ul>`)
    
    for (let j = 0; j < myEmployees.length; j++) {
        const employee = myEmployees[j]
        if (employee[0] === manager[0]) {
            document.write(`
                <li>${employeeNumber}. ${employee}</li>
                `)
            employeeNumber++
        }
    }
    document.write(`<hr>`)
}
