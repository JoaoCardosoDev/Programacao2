// import Car from "./Car.js";
// import Motorcycle from "./Motorcycle.js";
// import Boat from "./Boat.js";


// const data = {
//     cars: [
//         {
//             brand: "ferrari",
//             speed: 200,
//         },
//         {
//             brand: "fiat",
//             speed: 50,
//         }
//     ],
//     bikes: [
//         {
//             brand: "ducati",
//             speed: 250,
//         },
//         {
//             brand: "kawazaki",
//             speed: 500,
//         }
//     ],
//     boats: [
//         {
//             brand: "Speedboat",
//             speed: 70,
//         }
//     ]
// };
// const vehicles = [];
// window.onload = () => {
//     console.log("Window Loaded");

//     const nav = document.querySelector("nav");

//     const createUL = (name, data) => {
//         const ul = document.createElement("ul");
//         const title = document.createElement("li");
//         title.innerText = name;
//         ul.appendChild(title);

//     data.forEach((element) => {
//         const li = document.createElement("li");
//         const button = document.createElement("button");
//         button.onclick = (event) => {
//             switch (name) {
//                 case "cars":
//                     vehicles.push(new Car(element));
                    
//                     break;
//                 case "bikes":
//                     vehicles.push(new Motorcycle(element));
//                     break;
//                 case "boats":
//                     vehicles.push(new Boat(element));
//                     break;
//                 default:
//                     break;
//             }
//             console.log(vehicles)
//             console.log(event.target.innerText);

//         } 
//         button.innerText = element.brand;
//         li.appendChild(button);
//         ul.appendChild(li);
//     });

//         nav.appendChild(ul);
//     };


//     for (const key in data) {
//         createUL(key, data[key])
//     };
// }
    // const car = new Car();
    // const motorcycle = new Motorcycle();

import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Boat from "./Boat.js";


const loadData = async (url) => {

    const request = await fetch(url);
    const result = await request.json();
    return result;

}


const createLiContent = (item) => {
    
    const button = document.createElement("button");
    button.innerText = item.brand;

    button.onclick = () => {
        // console.log("Button clicked!", item);
        switch (item.type) {
            case "car":
                new Car(item);
                break;
            case "motorcycle":
                new Motorcycle(item);
                break;
            case "boat":
                new Boat(item);
                break;
        }

    }

    return button;

}


const createList = (data) => {

    const ul = document.querySelector("ul");

    data.forEach(item => {
        const li = document.createElement("li");
        li.appendChild(createLiContent(item));
        ul.appendChild(li);
    });

}


window.onload = async () => {

    const data = await loadData("data.json");
    data.sort((a, b) => a.type.localeCompare(b.type));
    console.log(data);

    createList(data);
}