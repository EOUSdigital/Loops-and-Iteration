//TODO 📗 Module 5. Logic and Control Flow - Lesson 07.01: Loops and Iteration


//TODO 📝 Step 1: Explore the Topic

//* 🎯 What Are Loops?
//  Loops are used to repeat blocks of code automatically until a certain condition is met. They allow us to avoid writing repetitive code manually.

//* 🔁 Types of Loops in JavaScript

//? 1. for loop
//  Used when we know exactly how many times to run something.

for (let i = 0; i < 5; i++) {
    console.log(i);                                     //  Result: 0, 1, 2, 3, 4
}

//? 2. while loop
//  Runs as long as a condition is true.

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//? 3. do...while loop
//  Runs the block at least once, then checks the condition.

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

//? 4. for...of loop
//  Loops through the values in an array or iterable.

const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

//? 5. for...in loop
//  Loops through the keys (properties) in an object.

const user = { name: "Alice", age: 30 };
for (let key in user) {
    console.log(key);                               //  Result: name, age
    console.log(user[key]);                         //  Result: Alice, 30
}

//* 📌 Why Use Loops?
//  • ✅ Process items in arrays or objects
//  • ✅ Repeat tasks until complete
//  • ✅ Automate repetitive tasks
//  • ✅ Reduce code duplication

//* ⚠️ Common Pitfalls
//  • Infinite loops (e.g., forgetting to increment the counter)
//  • Off-by-one errors (i <= 5 vs i < 5)
//  • Mixing up for...in and for...of


//TODO 📝 Step 2: Real-World Examples (With Detailed Explanations)

//* 🔁 Example 1: Looping Through Days of the Week (Using for loop)
//  🧠 Scenario: Print each day of the week

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

for (let i = 0; i < days.length; i++) {
    console.log(days[i]);
}

//? 🔍 Breakdown:
//  • const days = [...]                    → Defines an array of weekday names
//  • for (...)                             → Starts a for loop:
//      > let i = 0                         → Start at index 0
//      > i < days.length                   → Continue looping while i is less than the number of items in days
//      > i++                               → Increment i by 1 on each loop
//  • days[i]                               → Access the item at index i in the array
//  • console.log(...)                      → Output the current day
//  ✔️ This loop runs 5 times, printing 
//          each day once.


//* 🎁 Example 2: Checking Inventory Quantities (Using for...of)
//  🧠 Scenario: Display available items in stock

const inventory = ["apples", "bananas", "oranges"];

for (let item of inventory) {
    console.log("In stock:", item);
}

//? 🔍 Breakdown:
//  • for (let item of inventory)           → Loop through each value in the inventory array
//      > item takes the value of each 
//          element on each loop (e.g., 
//              "apples", then "bananas", 
//                  etc.)
//  • console.log(...)                      → Prints each item with the label "In stock"
//  ✔️ Simpler than for (let i = 0...) 
//          when we do not need the index.


//* 🧾 Example 3: Counting Down With a while Loop
//  🧠 Scenario: Countdown timer from 5 to 0

let countdown = 5;

while (countdown >= 0) {
    console.log(countdown);
    countdown++;
}
//? 🔍 Breakdown:
//  • let countdown = 5                     → Starts the countdown at 5
//  • while (countdown >= 0)                → Continue looping while countdown is 0 or higher
//  • console.log(countdown)                → Display current value
//  • countdown--;                          → Subtract 1 after each loop
//  ✔️ Great for reverse counters or loops 
//          with flexible ending conditions.


//* 💬 Example 4: Prompt Until Valid Input (Using do...while)
//  🧠 Scenario: Ask user until they type "yes"
//! (Simulated version – prompt() only works in browsers)

let answer;

do {
    answer = "no";                          //  imagine prompt("Say 'yes' to continue");
    console.log("You typed:", answer);
} while (answer !== "yes");

//? 🔍 Breakdown:
//  • do { ... } while (...)                → Run the code block at least once, check condition after
//  • answer !== "yes"                      → Keep looping until answer is "yes"
//  ✔️ Useful when user interaction is 
//          needed — ensures the prompt 
//              happens at least once.


//* 🧱 Example 5: Looping Through Object Properties (Using for...in)
//  🧠 Scenario: Print all properties in a user profile

const user2 = {
    name: "Leo",
    age : 28,
    role: "admin"
};

for (let key in user2) {
    console.log(key + ": " + user2[key]);
}

//? 🔍 Breakdown:
//  • for (let key in user)                 → Loops over all property names (keys) in the object
//  • key                                   → Will be "name", then "age", then "role"
//  • user[key]                             → Gets the value associated with each key (e.g., "Leo", 28, "admin")
//  ✔️ Very helpful for object-based 
//          data like user profiles or 
//              settings.


//* ✅ Summary of Use Cases
//? Loop Type                               Best For
//  for                                     When you know how many times to run
//  for...of                                Looping over array values, strings, and iterables
//  for...in                                Looping over object keys
//  while                                   Repeat until a condition fails
//  do...while                              Always run at least once, then check condition


//TODO  📝 Step 3: Quiz Loops and Iteration

//? Multiple Choice

//* 1. What type of loop is best when you know exactly how many times to run?
//  A. while
//  B. do...while
//  C. for
//  D. for...in

//! Answer: C

//* 2. What will this output?

const nums = [1, 2, 3];
for (let n of nums) {
    console.log(n);
}

//  A. undefined
//  B. 0, 1, 2
//  C. 1, 2, 3
//  D. index numbers

//! Answer: C

//* 3. Which loop guarantees that it will run at least once?
//  A. for
//  B. for...of
//  C. while
//  D. do...while

//! Answer: D

//* 4. Which loop is ideal for looping over object properties?
//  A. for...in
//  B. for...of
//  C. while
//  D. repeat

//! Answer: A

//* 5. What does i++ mean inside a for loop?
//  A. Set i to zero
//  B. Increase i by one
//  C. Reset the loop
//  D. Skip one item

//! Answer: B


//* True or False

//  6. for...of can be used with arrays.
//! Answer: True

//  7. for...in is meant for iterating over strings.
//! Answer: False

//  8. while loops can cause infinite loops if the condition is never false.
//! Answer: True

//  9. do...while is just like while, but checks the condition after the first run.
//! Answer: True

//  10. We can use break to stop any loop early.
//! Answer: True
