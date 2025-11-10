/***funnctions for string***************************************************************************************/ 
let str = "akash shukla shukla shukla";
console.log(str.length);
console.log(str.indexOf("shukla"));
console.log(str.lastIndexOf("shukla"));
console.log(str.substr(2, 5)); //(ash s) the retured str length is 5. (start indx, length)
console.log(str.slice(2, 9)); //9 is exclusive ash shu(start, end)
console.log(str.replace("shukla", "hey"));//akash-hey-shukla-shukla (still the real str is unchanged {&})
console.log(str.split(" "));// split the string based on the de-limiter which is space(" ") here & returns an array.
let string = "    hello       shukla      ";
console.log(string.trim()); // trims the space from starting and ending.
console.log(string.toLowerCase());
console.log(string.toUpperCase());

let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
cars.splice(2, 1, 'ambassedor', 'BMW', 'Audi');  // splice(startindx, no to leave after startindx, content to merge);
// cars.splice(2, 2, "hello");
console.log("cars :", cars);

// slice, split--> returns an array, splice

/**functions for the array*************************************************************************************/
let arr = [1,2,3,4,5];
arr.push(2);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift(); //pop from front
console.log(arr);

let array = [1,2,3,4];
array.unshift(7);// insert from the front;
console.log(array);

//forEach loop in javascript
function upperfun(abc) {
    abc.forEach(function(element) {
        console.log(element);
    })
}
let nums = [1,2,3,4,5,6,7];
upperfun(nums);
//forEach loop with arrow function
// nums.forEach((e) => {
//     console.log(e);
// })

/**classes*****************************************************************************************************/
class Animal {
    constructor(n, l, s) {
        this.name = n;
        this.legCount = l;
        this.speak = s;
    }
    static sayHi() {
        console.log("hii " + this.name , this.legCount ,  this.speak); //here this.name will be class name;
    }
    speaks() {
        console.log("hi there", this.name, "speaks", this.speak, "and have", this.legCount, "legs");
    }
}

let dog = new Animal("doggie", 4, "bhaow bhaow");
let cat = new Animal("cat", 4, "mew mew");

Animal.sayHi(); // i can directly call the static function outside the class
// Animal.speaks();  -->error

cat.speaks();
dog.speaks();

//date class 
let d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getTime()); // returns miliseconds since 1970;

// stopwatch kind of thing
// function fun(){
//     console.log(new Date());
// }
// setInterval(fun, 1000);


/****JSON --> JavaScript Object Notation  //JSON.parse(string) && JSON.stringify(obj)***************************/
//parse --> string to object
const user = '{"name": "akash", "age": "20", "gender": "male"}';
const user1 = JSON.parse(user);
console.log(user1);

//stringify --> object to string.
const user2 = {
    firstName: "akash",
    lastName: "shukla",
}
const user3 = JSON.stringify(user2); 
console.log(user3);

/**object funtions in javascript**********************************************************************************/
const user7 = {
    firstName: "hello",
    age: 7,
    gender: "male",
}
// Object.keys(obj) && Object.values(obj)
console.log(user7);
const keys = Object.keys(user7);
console.log(keys);

const values = Object.values(user7);
console.log(values);

const entries = Object.entries(user7); //returns the array of every key value pair(string)
console.log(entries);

const userMerged = Object.assign({name: "akash"}, user7, {color: "black", height: 181});// used for merging 2 objects.
// const userMerged = Object.assign({}, {name: "akash"}, user7, {color: "black", height: 181});
console.log(userMerged);

// const userMerged = Object.assign({color: "black",}, user7, {color: "Red", height: 181});
//--> here the color: appers only once, and the "black" is overwritten by "Red"

//to check wether a property is present in the object or not
console.log(user7.hasOwnProperty("property")); // false
console.log(user7.hasOwnProperty("firstName")); //true


console.log(typeof(null)); //object
console.log(typeof(NULL)); //undefined

// JavaScript is case-sensitive.
// null (all lowercase) is a built-in keyword that represents a null value.
// NULL (uppercase) is not defined — it’s treated as a variable name.
// Since you haven’t defined any variable called NULL, JavaScript says it’s undefined.