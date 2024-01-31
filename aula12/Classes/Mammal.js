import Animal from "./animal.js"

export default class Mammal extends Animal{
    #numLegs;
    constructor (data, callback) {
        super(data, callback);

        this.#numLegs = data.numLegs;
    }
    walk() {
        return this.introduce() + " walking on " + this.#numLegs + " legs";
    }


}