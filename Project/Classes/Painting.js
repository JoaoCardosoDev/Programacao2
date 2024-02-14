import Artwork from "./Artwork.js";

export default class Painting extends Artwork {
    
    #image;

    constructor(data, callback){
        super(data, callback);

        this.#image = data.image;
    }

    get image () {
        return this.#image;
    }

}