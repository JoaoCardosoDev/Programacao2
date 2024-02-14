
export default class Artwork {
    
    #data;
    #imageTag;
    #callback;
    
    constructor(data, callback) {

        this.#data = data;
        this.#callback = callback;

        //Creation of the img tag
        this.#imageTag = document.createElement("img");
        this.#imageTag.src = this.#data.image;
        const wrapper = document.querySelector("#wrapper");
        wrapper.appendChild(this.#imageTag);

        //Event listeners for the imgs
        this.#imageTag.addEventListener("click", () => this.#callback());
        this.#imageTag.addEventListener("mouseover", () => this.info());

    }

    //Function for the mouse over event. It targets the respective divs and injects the information(info from the painting and author) from the object.
    info() {
        console.log(`Mouse over ${this.#data.title}`)
        document.querySelector(".showConsole").innerHTML += `Mouse over ${this.#data.title} <br>`;
        
        //Painting info
        document.querySelector(".info .paintingInfo").innerHTML =`
        <ul>
        <li><b>Title</b>: ${this.#data.title} </li><br>
        <li><b>Type</b>: ${this.#data.type} </li><br>
        <li><b>Medium</b>: ${this.#data.medium} </li><br>
        <li><b>Description</b>: ${this.#data.artDesc} </li><br>
        </ul>`;

        //Artist info
        let author = document.querySelector(".info .authorInfo");
        let aimg = document.createElement('img');
        aimg.src = this.#data.artistimg;
        
        document.querySelector(".info .authorInfo").innerHTML =`
        <ul>
        <li><b>${this.#data.artist}</b></li>
        <li><i>${this.#data.life}</i></li>
        <li>${this.#data.artistDesc}</li>
        </ul>`;
        
        author.prepend(aimg);
    }

    //Getters
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