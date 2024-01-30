import Animal from "./animal.js";

export default class Reptile extends Animal{
    
    #isAgressive;
    
    constructor({name, isAgressive, image}, callback) {
        super(name, image, callback);
        this.#isAgressive = isAgressive;
    }

    bite() {
        return this.#isAgressive ?
        this.introduce() +" and I'm agressive" :
        this.introduce() +" and I'm peacefull" ;
    }
}