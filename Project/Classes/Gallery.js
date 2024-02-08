import Painting from "./Painting.js"
import Sculpture from "./Sculpture.js";

export default class Gallery {

    #gallery;
    #callback;
    #currentPiece = null;

    constructor(/*callback*/) {
        this.#gallery = [];
        /*this.#callback = callback;*/

        this.loaded();
    }

    loaded() {
        document.querySelector(".showConsole").innerHTML += "Gallery Loaded... <br>";
    }

    addArt(art) {
        switch (art.type) {
            case "painting":
                this.#gallery.push(new Painting(art, this.#callbackArt(art)));
                break;
            case "sculpture":
                this.#gallery.push(new Sculpture(art, this.#callbackArt(art)));
                break;
        }
    }

    #callbackArt(art) {
        if (this.#currentPiece){
            this.#currentPiece.active = false;
        }

        this.#currentPiece = this.#gallery.find(ar => ar.title === art.title)
        if(this.#currentPiece) {
            this.#currentPiece.active = true;
            document.querySelector(".paintingInfo").innerText = this.#currentPiece.title;
            this.#callback(art);
        }else{
            console.log("Art not found");
        }

    }
}