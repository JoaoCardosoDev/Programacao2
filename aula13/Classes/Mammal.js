import Animal from "./animal.js"

export default class Mammal extends Animal{
    #numLegs;
    constructor (data, callback) {
        super(data, callback);

        this.#numLegs = data.numLegs;
    }
    introduce() {
        let parentIntroduce = super.introduce();
        return parentIntroduce + " walking on " + this.#numLegs + " legs";
    }


}