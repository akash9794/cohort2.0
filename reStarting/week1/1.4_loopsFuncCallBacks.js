/***call back function (function passed as argument in a function)************************/
function square(a) {
    return a*a;
}

function cube(a) {
    return a*a*a;
}

function sumOfSomething(a, b, fn) {
    let i = fn(a);
    let j = fn(b);

    return i+j;
}

console.log(sumOfSomething(1, 2, square));
console.log(sumOfSomething(1, 2, cube));

//anonymous function --> does not have a name, An anonymous function is not accessible after its initial creation.
console.log(sumOfSomething(1, 2, function (n) {
    return n*n*n*n;
}));

//variable can be used as a function
let nums = function (n) {
    return n*2;
}
console.log(nums(15));

//arrow function
let sayhi = (firstName) => {
    return ("hello under arrow function " + firstName);
}
console.log(sayhi("akash"));

/*************************************************************************** */
//1. Normal (Named) Function
// This is the standard way of writing a function with a name.

function greet() {
  console.log("Hello, Akash!");
}

greet(); // Output: Hello, Akash!
 
// ✅ Has a name (greet)
// ✅ Can be called anywhere after it’s declared (because of hoisting)

/*********************************************************************************************** */
//2. Anonymous Function
// An anonymous function has no name — it’s often stored in a variable or used as a callback.

const greet = function() {
  console.log("Hello from an anonymous function!");
};

greet(); // Output: Hello from an anonymous function!


// ✅ No function name
// ✅ Useful when you want to pass it around or use it inline (e.g., in event listeners)

/********************************************************************************************** */
// 🧩 3. Arrow Function
// An arrow function is a shorter way to write functions (introduced in ES6).

const greet = () => {
  console.log("Hello from an arrow function!");
};

greet(); // Output: Hello from an arrow function!


// ✅ Shorter syntax


/*********************Hoisting************************ */
// | Keyword / Type | Hoisted? | Value Before Declaration       | Notes                   |
// | -------------- | -------- | ------------------------------ | ----------------------- |
// | `var`          | ✅ Yes    | `undefined`                    | Declaration only        |
// | `let`          | ✅ Yes    | ❌ ReferenceError               | In Temporal Dead Zone   |
// | `const`        | ✅ Yes    | ❌ ReferenceError               | In Temporal Dead Zone   |
// | `function`     | ✅ Fully  | ✅ Can be called before defined | Entire function hoisted |

// let and const are also hoisted, but they go into something called the Temporal Dead Zone (TDZ) —
// which means you can’t access them before the line where they are declared.

// So, the variable exists in memory, but you can’t use it yet.