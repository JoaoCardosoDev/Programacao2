import Animal from "./animal.js";

export default class Reptile extends Animal{
    
    #isAgressive;
    
    constructor(data, callback) {
        super(data, callback);
        this.#isAgressive = data.isAgressive;
    }

    bite() {
        return this.#isAgressive ?
        this.introduce() +" and I'm agressive" :
        this.introduce() +" and I'm peacefull" ;
    }
}