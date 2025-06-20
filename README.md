# 📗 Module 5. Logic and Control Flow - Lesson 07.01: Loops and Iteration
## 📝 Steps 1 – 3: Core Concepts, Real-World Examples, and Quiz Review

---

## 🧠 Step 1: Explore the Topic

### 🎯 What Are Loops?

Loops are used to run the same block of code repeatedly based on a condition. JavaScript offers several types of loops:

- `for` – runs a known number of times
- `while` – runs while a condition is true
- `do...while` – runs once, then checks the condition
- `for...of` – loops through values of an iterable (like arrays)
- `for...in` – loops through keys in an object

---

## 🌍 Step 2: Real-World Examples (with Explanations)

### Example 1: Loop through an array
```javascript
const days = ["Mon", "Tue", "Wed"];
for (let i = 0; i < days.length; i++) {
  console.log(days[i]);
}
```

### Example 2: Loop through values (`for...of`)
```javascript
const items = ["apple", "banana"];
for (let item of items) {
  console.log("In stock:", item);
}
```

### Example 3: Countdown with `while`
```javascript
let count = 3;
while (count > 0) {
  console.log(count);
  count--;
}
```

### Example 4: Validate input with `do...while`
```javascript
let input;
do {
  input = "no"; // Imagine this is prompt()
} while (input !== "yes");
```

### Example 5: Read object keys with `for...in`
```javascript
const user = { name: "Ada", age: 25 };
for (let key in user) {
  console.log(key, user[key]);
}
```

---

## ✅ Step 3: Quiz Review

**Final Score: 10/10**

| # | Type       | Answer | Correct | Notes |
|---|------------|--------|---------|-------|
| 1 | MCQ        | C      | ✅       | `for` is used when repeat count is known |
| 2 | MCQ        | C      | ✅       | `for...of` loops over array values |
| 3 | MCQ        | D      | ✅       | `do...while` always runs once |
| 4 | MCQ        | A      | ✅       | `for...in` is best for object properties |
| 5 | MCQ        | B      | ✅       | `i++` increases i by 1 |
| 6 | True/False | True   | ✅       | `for...of` works on arrays |
| 7 | True/False | False  | ✅       | `for...in` is for objects |
| 8 | True/False | True   | ✅       | `while` must eventually stop or loop forever |
| 9 | True/False | True   | ✅       | `do...while` checks condition after first run |
|10 | True/False | True   | ✅       | `break` ends any loop early |

---

## 🧾 Summary

- Use each loop type correctly
- Identify the best use cases for `for`, `while`, `for...of`, and `for...in`
- Write safe and efficient loop logic
- Avoid infinite loops and off-by-one errors
