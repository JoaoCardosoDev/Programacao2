import Painting from "./Painting.js"
import Sculpture from "./Sculpture.js";

export default class Gallery {

    #gallery;
    #next;
    #back;

    constructor(/*callback*/) {
        this.#gallery = [];
        this.#next = document.querySelector(".next")
        this.#back = document.querySelector(".back")
        this.loaded();

        this.#next.addEventListener("click",() => this.next(), false)
        this.#back.addEventListener("click",() => this.back(), false)
    }

    loaded() {
        document.querySelector(".showConsole").innerHTML += "Gallery Loaded... <br>";
    }

    addArt(art) {
        switch (art.type) {
            case "painting":
                this.#gallery.push(new Painting(art/*, this.#callbackArt(art)*/));
                break;
            case "sculpture":
                this.#gallery.push(new Sculpture(art/*, this.#callbackArt(art)*/));
                break;
        }

    } 
    next() {
 
        let currentImage = document.querySelector(".popImage");
        let currentIndex = this.#gallery.findIndex(element => element.image === currentImage.getAttribute('src'));
        if (currentIndex < this.#gallery.length - 1) {
            let nextImage = this.gallery[currentIndex + 1].image;
            currentImage.src = nextImage;
        }else{
            currentImage.src = this.#gallery[0].image;
        }
    }
    back() {
        let currentImage = document.querySelector(".popImage");
        let currentIndex = this.#gallery.findIndex(element => element.image === currentImage.getAttribute('src'));
        if (currentIndex > 0) {
            let previousImage = this.#gallery[currentIndex - 1].image;
            currentImage.src = previousImage;
        }else{
            // let div = document.querySelector(".picViewer");
            // div.style.display = "none";
            currentImage.src = this.#gallery[this.#gallery.length - 1].image;
        }

    }

    get gallery() {
        return this.#gallery;
    }
    // #callbackArt(art) {
    //     if (this.#currentPiece){
    //         this.#currentPiece.active = false;
    //     }

    //     this.#currentPiece = this.#gallery.find(ar => ar.title === art.title)
    //     if(this.#currentPiece) {
    //         this.#currentPiece.active = true;
    //         document.querySelector(".paintingInfo").innerText = this.#currentPiece.title;
    //         this.#callback(art);
    //     }else{
    //         console.log("Art not found");
    //     }

    // }
}