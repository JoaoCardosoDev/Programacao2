import Animal from "./animal.js";

export default class Fish extends Animal {
    #isFreshWater;

    constructor(data, callback){
        super(data, callback);

        this.#isFreshWater = data.isFreshWater;
    }

    introduce () {
        let parentIntroduce = super.introduce();
        return this.#isFreshWater ? parentIntroduce + " and I swim in fresh water." : parentIntroduce + " and I come from the sea."; 
    }
}