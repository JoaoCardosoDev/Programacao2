import Streetart from "./Streetart.js";
import Painting from "./Painting.js";
import Sculpture from "./Sculpture.js";
import Photography from "./Photography.js";
import Print from "./Print.js";

export default class Gallery {

    #gallery;
    #next;
    #back;
    #remove;
    #callback;

    constructor(callback) {
        this.#gallery = [];
        this.#callback = callback;

        //Identification of the elements and respective Event Listeners.
        this.#next = document.querySelector(".next");
        this.#back = document.querySelector(".back");
        this.#remove = document.querySelector(".remove");

        this.#next.addEventListener("click",() => this.next());
        this.#back.addEventListener("click",() => this.back());
        this.#remove.addEventListener("click", () => this.removeArt());
  
        //Information for the feature -> Developer Console.
        this.loaded();
    }

    loaded() {
        document.querySelector(".showConsole").innerHTML += "Gallery Loaded... <br>";
    }

    //Switch logic for the creation of the objects.
    addArt(art) {
        switch (art.type) {
            case "painting":
                this.#gallery.push(new Painting(art, this.#callback));
                break;
            case "sculpture":
                this.#gallery.push(new Sculpture(art, this.#callback));
                break;
            case "streetart":
                this.#gallery.push(new Streetart(art, this.#callback));
                break;
            case "photography":
                this.#gallery.push(new Photography(art, this.#callback));
                break;
            case "print":
                this.#gallery.push(new Print(art, this.#callback));
                break;
        }
    }

    //Function to remove the image from the gallery on the website as per project request.
    removeArt() {

        //Element identification.
        let currentImage = document.querySelector(".picViewer");
        let wrapper = document.querySelector("#wrapper");
        let images = wrapper.querySelectorAll("img");

        //Removes the element.
        images.forEach(img => {
            if (img.src === currentImage.src) {
                img.remove();
            }
        });

        //Info for the feature -> Developer log. Alerts the user of the deletion along with title.
        let findIndex = this.#gallery.findIndex(element => element.image === currentImage.getAttribute('src'));
        console.log(`Removed ${this.#gallery[findIndex].title}`);
        document.querySelector(".showConsole").innerHTML += `Removed ${this.#gallery[findIndex].title} <br>`;

        //Makes the pop up div disappear upon deletion of the image.
        let hideDiv = document.querySelector(".popUp");
        document.querySelector('.picContainer').src = '';
        hideDiv.style.display = "none";
    }

    
    //Behavior for button "next".
    next() {
 
        let currentImage = document.querySelector(".picViewer");

        //Finds the index in the Gallery array of the current image.
        let currentIndex = this.#gallery.findIndex(element => element.image === currentImage.getAttribute('src'));

        //Changes the src of the element to the next image in the array and resets the position in case you're at the end of the list.
        if (currentIndex < this.#gallery.length - 1) {
            let nextImage = this.gallery[currentIndex + 1].image;
            currentImage.src = nextImage;
        }else{
            currentImage.src = this.#gallery[0].image;
        }
    }

    //Behavior for the button "back".
    back() {

        let currentImage = document.querySelector(".picViewer");

        //Finds the index in the Gallery array of the current image.
        let currentIndex = this.#gallery.findIndex(element => element.image === currentImage.getAttribute('src'));

        //Changes the src of the element to the previous image in the array and resets the position in case you're at the end of the list.
        if (currentIndex > 0) {
            let previousImage = this.#gallery[currentIndex - 1].image;
            currentImage.src = previousImage;
        }else{
            currentImage.src = this.#gallery[this.#gallery.length - 1].image;
        }
    }

    //Getter
    get gallery() {
        return this.#gallery;
    }
}