
export default class Artwork {
    
    #data;
    #imageTag;
    #callback;
    
    constructor(data, callback) {
        this.#data = data;
        this.#callback = callback;

        this.#imageTag = document.createElement("img");
        this.#imageTag.src = this.#data.image;
        this.#imageTag.onclick = () => this.#callback;

        const wrapper = document.querySelector("#wrapper");
        wrapper.appendChild(this.#imageTag);
    }

    get type () {
        return this.#data.type;
}
    get title () {
        return this.#data.title;
}
    get medium () {
        return this.#data.medium;
}
    get artist () {
        return this.#data.medium;
}
    get medium () {
        return this.#data.medium;
}
    get image () {
        return this.#data.image;
}
}