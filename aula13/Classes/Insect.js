import Animal from "./animal.js";

export default class Insect extends Animal {
    #canFly;

    constructor(data, callback){
        super(data, callback);

        this.#canFly = data.canFly;
    }

    introduce () {
        let parentIntroduce = super.introduce();
        return this.#canFly ? 
        parentIntroduce + " and I can fly.":
        parentIntroduce + " and I can't fly.";    }
}