/*
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
*/


# Understanding the Loop Challenge

This guide explains the logic in `main.js`, line by line. It also explains why arrays begin at index `0`, how nested loops work, and how the `Stop` and employee counters work.

## 1. The main data

```js
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Zarzur", "Samera"];
```

This array contains all the names that the program should inspect.

```js
let myEmployees = [
  "Amgad",
  "Youssef",
  "Abid",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
```

These are the possible team members.

## 2. Array positions start at zero

Arrays store items by positions called indexes:

```text
Index:       0       1       2       3       4       5
Name:    Ahmed   Osama   Sayed   Stop   Zarzur  Samera
```

Therefore, the second item is accessed with `myAdmins[1]`, not `myAdmins[2]`.

## 3. Filtering the active managers

```js
const activeAdmins = [];

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  activeAdmins.push(myAdmins[i]);
}
```

### Creating the loop counter

```js
let i = 0;
```

Create an index variable and set it to the first array position.

### Stopping the loop

```js
i < myAdmins.length;
```

Continue while `i` is smaller than the number of array items. Because `myAdmins.length` is `6`, the last allowed index is `5`.

### Increasing the counter

```js
i++;
```

This is the same as:

```js
i = i + 1;
```

It moves the loop to the next array position.

### Checking for Stop

```js
if (myAdmins[i] === "Stop") break;
```

Read the current name and compare it with the `"Stop"` marker.

- If they are equal, `break` stops the loop immediately.
- Names located after `"Stop"` are not copied to `activeAdmins`.

### Copying an active manager

```js
activeAdmins.push(myAdmins[i]);
```

The current manager is added to the end of `activeAdmins`.

The loop therefore produces:

```js
["Ahmed", "Osama", "Sayed"];
```

`"Zarzur"` and `"Samera"` are not included because the loop stops at `"Stop"`.

## 4. Displaying the number of managers

```js
document.write(`<div>We Have ${activeAdmins.length} Admins</div><hr>`);
```

`activeAdmins.length` counts the elements in the array. At this point the value is `3`.

This output is approximately equivalent to:

```js
document.write(`<div>We Have 3 Admins</div><hr>`);
```

Template literals allow JavaScript values to be inserted using `${expression}`.

## 5. The outer loop selects one manager at a time

```js
for (let i = 0; i < activeAdmins.length; i++) {
  const manager = activeAdmins[i];
  // Team logic goes here
}
```

For every iteration:

```text
i = 0 -> manager = Ahmed

i = 1 -> manager = Osama

i = 2 -> manager = Sayed
```

The loop is called the **outer loop** because its body contains another loop.

## 6. Constructing the manager heading

```js
document.write(`
  <div>The Admin For Team ${i + 1} is ${activeAdmins[i]}</div>
  <h3>Team Members: </h3>
`);
```

The same information can be clearer because `manager` has already been selected:

```js
document.write(`
  <div>The Admin For Team ${i + 1} is ${manager}</div>
  <h3>Team Members: </h3>
`);
```

`i` is an array index and starts at zero. The displayed team number starts at one, so the program uses `i + 1`.

| Array index | Displayed team number | Manager |
| ----------: | --------------------: | ------- |
|         `0` |                   `1` | Ahmed   |
|         `1` |                   `2` | Osama   |
|         `2` |                   `3` | Sayed   |

## 7. Resetting employee numbers for every manager

```js
let employeeNumber = 1;
document.write(`<ul></ul>`);
```

This counter must be inside the manager loop.

The counter therefore begins again at `1` for every manager:

```text
Ahmed:  1, 2, 3
Osama:  1, 2
Sayed:  1, 2
```

If `employeeNumber` were declared outside the manager loop, it would continue increasing into later teams.

## 8. The inner loop checks every employee

```js
for (let j = 0; j < myEmployees.length; j++) {
  const employee = myEmployees[j];

  if (employee[0] === manager[0]) {
    document.write(`<li>${employeeNumber}. ${employee}</li>`);
    employeeNumber++;
  }
}
```

Here, `j` is the employee loop's own counter. This counter must not be named `i`, because the code is already using `i` for the manager loop.

### Reading the first letter

Every string has character positions, beginning with zero:

```js
"Ahmed"[0] === "A";
"Amgad"[0] === "A";
```

Therefore:

```js
employee[0]; // The employee's first letter
manager[0]; // The manager's first letter
```

### Comparing the letters

```js
if (employee[0] === manager[0])
```

This is an `if` statement containing two expressions:

```text
employee's first letter === manager's first letter
```

- If the result is `true`, the employee belongs to that team.
- If the result is `false`, the employee is ignored for this manager.

Strict equality checks both:

- the value
- the type

Both values are strings here.

## 9. Complete nested-loop example

With the first manager, the employee loop effectively asks:

```text
Amgad  -> A === A -> true  -> display
Youssef -> Y === A -> false -> skip
Abid   -> A === A -> true  -> display
Samah  -> S === A -> false -> skip
Ameer  -> A === A -> true  -> display
Omar   -> O === A -> false -> skip
Othman -> O === A -> false -> skip
Amany  -> A === A -> true  -> display
Samia  -> S === A -> false -> skip
```

The nested loops are processed like this:

```text
Select Ahmed
  Check every employee
  Display Amgad, Abid, Ameer, Amany

Select Osama
  Check every employee
  Display Omar, Othman

Select Sayed
  Check every employee
  Display Samah, Samia
```

`Youssef` has no manager in this challenge because its first letter is `Y`, while `activeAdmins` contains only managers whose first letters are `A`, `O`, or `S`.

## 10. How the employee number increases

```js
let employeeNumber = 1;
```

Start the counter at one for the current manager.

```js
document.write(`<li>${employeeNumber}. ${employee}</li>`);
employeeNumber++;
```

For a matching employee:

1. Write the current number and name.
2. Increase the number by one for the next matching employee.
3. Repeat with the employee loop's next value.

For Ahmed, this produces:

```text
1. Amgad
2. Abid
3. Ameer
4. Amany
```

## 11. Why inner and outer loops are separate

JavaScript supports one loop inside another:

```js
for (manager) {
  for (employee) {
    // Compare and display the employee
  }
}
```

This is called nesting. The full meaning is:

> For each manager, check every employee and display the matching ones.

The outer loop controls managers and teams. The inner loop controls employees and membership.

## 12. Important HTML detail

The current code writes an empty list and closes it before adding the list items:

```js
document.write(`<ul></ul>`);

// Later
document.write(`<li>...</li>`);
```

To keep the list items inside the list, open one `<ul>`, write its matching `<li>` elements, and then close it:

```js
for (let i = 0; i < activeAdmins.length; i++) {
  const manager = activeAdmins[i];
  let employeeNumber = 1;

  document.write(`<h3>The Admin For Team ${i + 1} is ${manager}</h3>`);
  document.write(`<ul>`);

  for (let j = 0; j < myEmployees.length; j++) {
    const employee = myEmployees[j];

    if (employee[0] === manager[0]) {
      document.write(`<li>${employeeNumber}. ${employee}</li>`);
      employeeNumber++;
    }
  }

  document.write(`</ul>`);
  document.write(`<hr>`);
}
```

This version is structurally correct because every opening `<ul>` eventually has a matching `</ul>`.

## 13. Mental model of the complete challenge

The challenge can be summarized in these steps:

```text
1. Start with an array of manager names.
2. Copy names until the Stop marker is reached.
3. Display the number of active managers.
4. Select one manager from the active manager array.
5. Display the manager's team number and name.
6. Start that team member number at 1.
7. Check the first letter of every employee.
8. Display matching employees and increase their team number.
9. Move to the next manager and repeat the process.
```

The key JavaScript idea is that the outer loop does not end when it selects a manager. It enters the inner loop, processes the complete employee array for that manager, and only then moves to the next manager.
