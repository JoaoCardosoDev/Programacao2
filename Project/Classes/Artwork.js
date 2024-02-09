
export default class Artwork {
    
    #data;
    #imageTag;
    // #callback;
    
    constructor(data, /*callback*/) {
        this.#data = data;
        // this.#callback = callback;

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
        <li>Description: ${this.#data.artDesc} </li><br>
        </ul>`;
        let author = document.querySelector(".info .authorInfo");
        let aimg = document.createElement('img');
        aimg.src = this.#data.artistimg;
        document.querySelector(".info .authorInfo").innerHTML =`
        <ul>
        <li>Author: ${this.#data.artist} </li><br>
        <li>Life: ${this.#data.life} </li><br>
        <li>Description: ${this.#data.artistDesc} </li><br>
        </ul>`;
        author.prepend(aimg);
        
    }
    handlerClick() {

        let divShow = document.querySelector(".picViewer");
        let img = document.createElement('img');
        img.src = this.#data.image;
        img.className = "popImage";
        
        let divShowDisplayStyle = window.getComputedStyle(divShow).getPropertyValue('display');


        if (divShowDisplayStyle === "none") {
        
            divShow.style.display = "flex"
            divShow.appendChild(img);
            img.addEventListener("click", () => {        
                console.log("Hiding div");
                divShow.style.display = "none";
                divShow.removeChild(img);
                console.log(`${this.#data.title} pop up closed`);
                document.querySelector(".showConsole").innerHTML += `Clicked ${this.#data.title} <br>`;
        }
            , false);

            console.log(`${this.#data.title} clicked`)
            document.querySelector(".showConsole").innerHTML += `Clicked ${this.#data.title} <br>`;

    }
    
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
    get imageTag() {
        return this.#imageTag;
    }
}