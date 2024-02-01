export default class Animal {

    #callback;
    #imageElement;
    #data;

    constructor(data, callback) {
        this.#data = data
        this.#callback = callback;

        this.#imageElement = document.createElement("img");
        this.#imageElement.src = this.#data.image;
        this.#imageElement.onclick = () => this.#callback();

        const container = document.querySelector("#images-container");
        container.appendChild(this.#imageElement);
    }

    introduce() {
        return "Hello, I'm a " + this.#data.name;
    }

    get type () {
        return this.#data.type;
    }
    get name() {
        return this.#data.name;
    }
    set name(value) {
        this.#data.name = value;
    }
    get active() {
        return this.#imageElement.className.lenght !== 0;
    }
    set active(value) {
        this.#imageElement.className = value ? 'active' : '';
    }
    get sounds() {
        return this.#data.sounds;
    }
    set sounds(value) {
        this.#data.sounds = value;
    }
    get image() {
        return this.#data.image;
    }
}