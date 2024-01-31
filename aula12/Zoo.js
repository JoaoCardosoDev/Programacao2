import Bird from "./Classes/Bird.js";
import Mammal from "./Classes/Mammal.js";
import Reptile from "./Classes/Reptile.js";

export default class Zoo {

    #animals;
    #callback;
    #currentAnimal = null;

    constructor(callback) {
        this.#animals = [];
        this.#callback = callback;
    }
    
    addAnimal(animal) {
        
        switch (animal.type) {
            case "bird":
                this.#animals.push(new Bird(animal, () => this.#performAnimal(animal)));
                break;
            case "mammal":
                this.#animals.push(new Mammal(animal, () => this.#performAnimal(animal)));
                break;
            case "reptile":
                this.#animals.push(new Reptile(animal, () => this.#performAnimal(animal)));
                break;
            default:
                break;
        }
    }
    #performAnimal(animal) {
        if (this.#currentAnimal){
            this.#currentAnimal.active = false;
        }
        this.#currentAnimal = this.#animals.find(anim => anim.name === animal.name);
        this.#currentAnimal.active = true;
        console.log(this.#currentAnimal);
        
        document.querySelector("h2").innerText = this.#currentAnimal.name;
        this.#callback(animal);
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
