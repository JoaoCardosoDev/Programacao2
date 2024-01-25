// window.onload = async () => {
//     // const test = new AppTest();

//     // test.addEventListener('test_data_loaded', (event) =>{ 
//     //     console.log('original', event.detail);
//     // });
//     // test.loadData();

//     const test2 = new appTest2();

//     test2.subscribe('test_data_loaded', (data) => {
//         console.log('sub1', data)
//     })
//     test2.subscribe('test_data_loaded', (data) => {
//         console.log('sub2', data)
//     })
//     console.log(`**********After two subscriptions *************`)

//     test2.publish('test_data_loaded')
// }

// // class AppTest extends HTMLElement {
//     // constructor() {
//     //     super();        
//     // }
//     // async loadData() {
//     //     const req = await fetch('data.json');
//     //     const res = await req.json();
//     //     this.dispatchEvent(new CustomEvent("test_data_loaded", {detail:res}))
//     // }
// // }
// // customElements.define('app-test', AppTest);

// class appTest2 {

//     events = [] //List of events
//     constructor() {

//     }
//     // If in this list of events doesnt exist an event called "test_data_loaded" then create it
//     subscribe(event, handler) {
//         if(!this.events[event]) {
//             //Creates "test_data_loaded"
//             this.events[event] = [];
//         }
//         // And then it adds it to the list
//         this.events[event].push(handler);
//     }
//     unsubscribe(event, handler) {
//         // If the event exists in the list, find it's index by 'findIndex', put it in 'index', then remove it(splice), and move the indexes of the list by 1
//         if(this.events[event]){
//             const index= this.events[event].findIndex(item => item === handler)
//             this.events[event].splice(index, 1);
//         }
//     }
//     publish(event, data) {
//         if(this.events[event]) {
//             this.events[event].forEach(async handler => {
//                 const req = await fetch ("data.json");
//                 const res = await req.json();
//                 handler(res);
//             })
//         }
        
//     }
// }

window.onload = () => {
    // alert("Welcome to the etic's most useless calculator!")
    // let c = parseInt(prompt("First number:"))
    // let d = parseInt(prompt("Second number:"))
    // let e = parseInt(prompt("Multiplier:"))

    // if(Number.isInteger(c)&&Number.isInteger(d)&&Number.isInteger(e)){
    //     result = multiply(add(c, d),e)
    //     console.log("(" + c + "+" + d + ")" + "x" + e + " = " + result)
    //     alert(`The result is ${multiply(add(c, d),e)}!`)
    // }else{
    //     alert("Only numbers can be multiplied!")
    //     }
    // console.log(average(arr))
    // printArray()
    test = new Test
    console.log(test.number())
}
const arr = [2, 45, 34, 2];
add = (a, b) => {
    sum = a + b
    return sum
}

multiply = (c,d) => {
    return c * d
}

average = (array) => {
    let soma = 0
    console.log(array)
    let pointer = 1
    array.forEach(element => {
        element = parseInt(prompt(`${pointer}º number for the array: `))
        pointer ++
        soma += element
        if(!Number.isInteger(element)){
            alert("Invalid Number")
            throw new Error ("Invalid Input")
        }
    });
    return (soma / array.length)
}
printArray = () => {
    array = []
    times = parseInt(prompt("Size of array: "))
    for (let i = 0; i < times; i++) {
        array.push(parseInt(prompt("Number: ")))
    }
    array.forEach(element => {
        console.log(element)
    });
    for (i in array) {
        console.log(array[i])
    }
        
};

class Test {


    number() {
        return 2
    }
}

