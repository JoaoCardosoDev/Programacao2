
export default class Artwork {
    
    #data;
    #imageTag;
    #callback;
    
    constructor(data, callback) {
        this.#data = data;
        this.#callback = callback;

        this.#imageTag = document.createElement("img");
        this.#imageTag.src = this.#data.image;

        this.#imageTag.addEventListener("click", () => this.#callback());
        this.#imageTag.addEventListener("mouseover", () => this.info());

        const wrapper = document.querySelector("#wrapper");
        wrapper.appendChild(this.#imageTag);
    }

    info() {
        console.log(`Mouse over ${this.#data.title}`)
        document.querySelector(".showConsole").innerHTML += `Mouse over ${this.#data.title} <br>`;
        
        document.querySelector(".info .paintingInfo").innerHTML =`
        <ul>
        <li>Title: ${this.#data.title} </li><br>
        <li>Type: ${this.#data.type} </li><br>
        <li>Medium: ${this.#data.medium} </li><br>
        <li>Description: ${this.#data.artDesc} </li><br>
        </ul>`;
        let author = document.querySelector(".info .authorInfo");
        let aimg = document.createElement('img');
        aimg.src = this.#data.artistimg;
        document.querySelector(".info .authorInfo").innerHTML =`
        <ul>
        <li>${this.#data.artist} </li>
        <li>${this.#data.life} </li>
        <li>${this.#data.artistDesc} </li>
        </ul>`;
        author.prepend(aimg);
        
    }
    get type () {
        return this.#data.type;
}
    get title () {
        return this.#data.title;
}
    get artist () {
        return this.#data.artist;
}
    get medium () {
        return this.#data.medium;
}
    get image () {
        return this.#data.image;
}
    get imageTag() {
        return this.#imageTag;
    }
    get data() {
        return this.#data;
    }
}