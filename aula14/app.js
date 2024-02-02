console.log("Hello World js");

var a = 'var A';
let b = 'var B';
const c = 'const C';

const func = () => {
    let f = a + b

    console.log(f)
}

func();
// console.log(a);
// console.log(b);
// console.log(c);

//arrays in js
let arr = [0, 10, 12, 89]

//for loop in js
let len = arr.length;
for (let i = 0; i < len; i++) {
    console.log(arr[i]);
    
}
//for each loop in js
arr.forEach(element => {
    console.log(element);
})

//while loop in js
let i = 0;
while (i < len) {
    console.log(arr[i]);
    i++;
}

// functions with parameters

console.log("JS addNumbers Function")

const addNumbers = (a, b) => {
    return a+b
}

console.log(addNumbers(1,2))

//classes in JS

// class Test {

//     #name;
//     constructor(name) {
//         this.#name = name
//      }

//     sayHello() {
//         return "Hello I'm " + this.#name;
//     }

// }
// const testClass = new Test("Joao")
// console.log(testClass.sayHello())

import Test2 from "./test2.js";

const test = new Test2("joao js")
console.log(test.sayHello())