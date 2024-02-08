
export default class Artwork {
    
    #data;
    #imageTag;
    #callback;
    
    constructor(data, callback) {
        this.#data = data;
        this.#callback = callback;

        this.#imageTag = document.createElement("img");
        this.#imageTag.src = this.#data.image;
        // this.#imageTag.onclick = () => this.#callback();
        // this.#imageTag.onclick = () => console.log("clicked");

        this.#imageTag.addEventListener("click", () => this.handlerClick(), false);
        this.#imageTag.addEventListener("mouseover", () => this.info(), false);

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
        <li>Description: Description Description Description Description Description Description Description Description Description Description Description </li><br>
        </ul>
        `;
    }
    handlerClick() {
        console.log(`${this.#data.title} clicked`)
        document.querySelector(".showConsole").innerHTML += `Clicked ${this.#data.title} <br>`;
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

    get active() {
        return this.#imageTag.className.length !== 0;
}
    set active(value) {
        this.#imageTag.className = value ? 'active' : '';
    }
}