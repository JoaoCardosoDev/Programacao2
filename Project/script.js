import Gallery from "./classes/gallery.js";

function handlerClick () {

    let divShow = document.querySelector(".popUp");
    let img = document.querySelector('.picViewer');
    img.src = this.data.image;
    
    let divStyle = window.getComputedStyle(divShow).getPropertyValue('display');

    if (divStyle === "none") {
    
        divShow.style.display = "flex"
        img.addEventListener("click", () => {        
            console.log("Hiding div");
            divShow.style.display = "none";
            img.src = ''
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

    let galleryMax = 20;

    console.log(`Welcome, the maximum number of art pieces for this gallery is ${galleryMax}`);
    document.querySelector(".showConsole").innerHTML += `Welcome, the maximum number of art pieces for this gallery is ${galleryMax}<br>`;

if (res.length < galleryMax) {
    galleryMax = res.length;
}

for (let i = 0; i < galleryMax; i++){
    gallery.addArt(res[i])   
}

const wrapper = document.querySelector("#wrapper");

wrapper.addEventListener('wheel', (event) => {
    event.preventDefault();
    wrapper.scrollLeft += event.deltaY;
});

}