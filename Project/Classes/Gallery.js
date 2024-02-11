import Painting from "./Painting.js"
import Sculpture from "./Sculpture.js";

export default class Gallery {

    #gallery;
    #next;
    #back;
    #remove;
    #callback;

    constructor(callback) {
        this.#gallery = [];
        this.#callback = callback;
        this.#next = document.querySelector(".next");
        this.#back = document.querySelector(".back");
        this.#remove = document.querySelector(".remove");
        this.loaded();

        this.#next.addEventListener("click",() => this.next())
        this.#back.addEventListener("click",() => this.back())
        this.#remove.addEventListener("click", () => this.removeArt())
    }

    loaded() {
        document.querySelector(".showConsole").innerHTML += "Gallery Loaded... <br>";
    }

    addArt(art) {
        switch (art.type) {
            case "painting":
                this.#gallery.push(new Painting(art, this.#callback));
                break;
            case "sculpture":
                this.#gallery.push(new Sculpture(art, this.#callback));
                break;
        }
    }
    removeArt() {
        let currentImage = document.querySelector(".popImage");
        let wrapper = document.querySelector("#wrapper");
        let images = wrapper.querySelectorAll("img");

        images.forEach(img => {
            if (img.src === currentImage.src) {
                img.remove();
            }
        });

        let findIndex = this.#gallery.findIndex(element => element.image === currentImage.getAttribute('src'));
        console.log(`Removed ${this.#gallery[findIndex].title}`);
        document.querySelector(".showConsole").innerHTML += `Removed ${this.#gallery[findIndex].title} <br>`;


        let hideDiv = document.querySelector(".picViewer");
        hideDiv.removeChild(currentImage)
        hideDiv.style.display = "none";
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
            currentImage.src = this.#gallery[this.#gallery.length - 1].image;
        }

    }

    get gallery() {
        return this.#gallery;
    }
}