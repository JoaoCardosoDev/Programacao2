import Bird from "./Classes/Bird.js";
import Mammal from "./Classes/Mammal.js";
import Reptile from "./Classes/Reptile.js";
import Fish from "./Classes/Fish.js";
import Insect from "./Classes/Insect.js"

export default class Zoo {

    #animals;
    #callback;
    #currentAnimal = null;

    constructor(callback) {
        this.#animals = [];
        this.#callback = callback;
    }
    
    addAnimal(animal) {
        let nextAnimal = null;
        switch (animal.type) {
            case "bird":
                nextAnimal = new Bird(animal, () => this.#performAnimal(nextAnimal));
                break;
            case "mammal":
                nextAnimal = new Mammal(animal, () => this.#performAnimal(nextAnimal));
                break;
            case "reptile":
                nextAnimal = new Reptile(animal, () => this.#performAnimal(nextAnimal));
                break;
            case "fish":
                nextAnimal = new Fish(animal, () => this.#performAnimal(nextAnimal));
                break;
            case "insect":
                nextAnimal = new Insect(animal, () => this.#performAnimal(nextAnimal));
                break;
            default:
                break;
        }
        this.#animals.push(nextAnimal);
    }
    #performAnimal(animal) {
        if (this.#currentAnimal){
            this.#currentAnimal.active = false;
        }
        this.#currentAnimal = this.#animals.find(anim => anim.name === animal.name);
        this.#currentAnimal.active = true;
        // console.log(this.#currentAnimal);
        
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
