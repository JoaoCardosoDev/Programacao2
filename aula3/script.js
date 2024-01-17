
// const addNumbers = (a, b) => {

//     return a + b;
// }

// let a = 10;

// let b = "100";

// console.log(addNumbers(a, b))


// let c = "40";

// if(a === "10" && b == "100"){

//      console.log(true);
//  }else{
//      console.log(false);
//  }


// if(a === "10" || b == "100"){

//     console.log(true);
// }else{
//     console.log(false);
// }

// c == "10" ? console.log(true) : console.log(false);

// switch (c) {

//     case 10:
//         console.log(true);
//         console.log("case1")
//         break;
//     case "10":
//         console.log(false);
//         console.log("case2");
//         break;
//     case "20":
//         console.log(false);
//         console.log("case3");
//         break;
//     case "40":
//         console.log(false);
//         console.log("case4");
//         break;
//     default:
//         console.log(true);
//         console.log("caseDefault")
// }

// let a = 0;

// while (a<20) {
//     console.log("a", a)   
//     a++
// // }

// let a = ["praia", "cidade", "campo", "floresta", "montanha", 10, 100];

// for (let i = 0; i < a.length; i++) {

//     console.log(a[i]);
// }

// const PI = 3.14;
let arr = [20,30,40,10,100];

// for(i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * PI
// }

console.log(arr)

arr.forEach(element => {
    console.log(element);
});

let obj ={
    
    name: "joão",
    age: 31,
    gender: "male", 

}

for (const key in obj) {

    console.log(obj[key])
}

