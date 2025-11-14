/***Async func***************/

// function myAsyncFunc() {
//     console.log("Hello There!!");
// }

// setTimeout(myAsyncFunc, 3000);

// console.log("Hello there 1");

//example 2
// console.log("Hello");

// function onDone() {
//     console.log("After 5 sec");
// }

// setTimeout(onDone, 5000);
// console.log("Hii");


/************callBack Function*************/
function greet(name, callback) {
  console.log("Hello " + name);
  callback();   // calling the callback
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Akash", sayBye);


/*****promises*****************************/
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) resolve("Work done!");
  else reject("Something went wrong");
});

promise
  .then(result => console.log(result)) 
  .catch(error => console.log(error));

  
/****************async await**********/
function work() {
  return new Promise(resolve => {
    resolve("Work finished!");
  });
}

async function start() {
  let result = await work();
  console.log(result);
}

start();


