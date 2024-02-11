import Gallery from "./classes/gallery.js";

function handlerClick () {

    let divShow = document.querySelector(".picViewer");
    let img = document.createElement('img');
    img.src = this.data.image;
    img.className = "popImage";
    
    let divStyle = window.getComputedStyle(divShow).getPropertyValue('display');

    if (divStyle === "none") {
    
        divShow.style.display = "flex"
        divShow.appendChild(img);
        img.addEventListener("click", () => {        
            console.log("Hiding div");
            divShow.style.display = "none";
            divShow.removeChild(img);
            console.log(`${this.data.title} pop up closed`);
            document.querySelector(".showConsole").innerHTML += `Clicked ${this.data.title} <br>`;
    }
        , false);

        console.log(`${this.data.title} clicked`)
        document.querySelector(".showConsole").innerHTML += `Clicked ${this.data.title} <br>`;

}
}

window.onload = async () => { 
    
    const req = await fetch("data.json");
    const res = await req.json();

    const gallery = new Gallery(handlerClick);

    let galleryMax = 10;

    console.log(`Welcome, the maximum number of art pieces for this gallery is ${galleryMax}`);
    document.querySelector(".showConsole").innerHTML += `Welcome, the maximum number of art pieces for this gallery is ${galleryMax}`;

if (res.length < galleryMax) {
    galleryMax = res.length;
}

for (let i = 0; i < galleryMax; i++){
    gallery.addArt(res[i])   
}

}