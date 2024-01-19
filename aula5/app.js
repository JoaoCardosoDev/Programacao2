import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";
import Boat from "./Boat.js";


const data = {
    cars: [
        {
            brand: "ferrari",
            speed: 200,
        },
        {
            brand: "fiat",
            speed: 50,
        }
    ],
    bikes: [
        {
            brand: "ducati",
            speed: 250,
        },
        {
            brand: "kawazaki",
            speed: 500,
        }
    ],
    boats: [
        {
            brand: "Speedboat",
            speed: 70,
        }
    ]
};
const vehicles = [];
window.onload = () => {
    console.log("Window Loaded");

    const nav = document.querySelector("nav");

    const createUL = (name, data) => {
        const ul = document.createElement("ul");
        const title = document.createElement("li");
        title.innerText = name;
        ul.appendChild(title);

    data.forEach((element) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.onclick = (event) => {
            switch (name) {
                case "cars":
                    vehicles.push(new Car(element));
                    
                    break;
                case "bikes":
                    vehicles.push(new Motorcycle(element));
                    break;
                case "boats":
                    vehicles.push(new Boat(element));
                    break;
                default:
                    break;
            }
            console.log(vehicles)
            console.log(event.target.innerText);

        } 
        button.innerText = element.brand;
        li.appendChild(button);
        ul.appendChild(li);
    });

        nav.appendChild(ul);
    };


    for (const key in data) {
        createUL(key, data[key])
    };
}
    // const car = new Car();
    // const motorcycle = new Motorcycle();