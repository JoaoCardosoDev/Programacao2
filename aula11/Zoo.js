import Bird from "./Bird.js";
import Mammal from "./Mammal.js";
import Reptile from "./Reptile.js";

export default class Zoo {

    #animals;
    #callback;

    constructor(callback) {
        this.#animals = [];
        this.#callback = callback;
    }
    
    addAnimal(animal) {
        
        switch (animal.type) {
            case "bird":
                this.#animals.push(new Bird(animal, this.#callback));
                break;
            case "mammal":
                this.#animals.push(new Mammal(animal, this.#callback));
                break;
            case "reptile":
                this.#animals.push(new Reptile(animal, this.#callback));
                break;
            default:
                break;
        }
    }

    showAnimals() {
        this.#animals.forEach(animal => {
            console.log(animal.introduce());
        });
    }

    getAnimal(name) {
        
        return this.#animals.find(animal => animal.name === name);

        }
    static ZooInfo() {
        return "A zoo is a place to display animals";
    }

}
