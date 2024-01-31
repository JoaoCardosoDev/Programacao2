export default class Animal {

    #name;
    #callback;
    #imageElement;
    
    constructor({name, image}, callback) {
        this.#name = name;
        this.#callback = callback;


        this.#imageElement = document.createElement("img");
        this.#imageElement.src = image;
        this.#imageElement.onclick = () => this.#callback();

        const container = document.querySelector("#images-container");
        container.appendChild(this.#imageElement);
    }

    introduce() {
        return "Hello, I'm a " + this.#name;
    }

    get name() {
        return this.#name;
    }
    set name(value) {
        this.#name = value;
    }

    get active() {
        return this.#imageElement.className.lenght !== 0;
    }
    set active(value) {
        this.#imageElement.className = value ? 'active' : '';
    }
}