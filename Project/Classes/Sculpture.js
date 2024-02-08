import Artwork from "./Artwork.js";

export default class Sculpture extends Artwork {
    #medium; //colocar aqui o medium?

    constructor(data, callback){
        super(data, callback);

        this.#medium = data.medium;
    }

}