import Gallery from "./classes/gallery.js";


// The handler for the on.click is created here with the intend of being sent as a callback through the class creation system.
function handlerClick () {

    let divShow = document.querySelector(".popUp");
    let img = document.querySelector('.picViewer');
    img.src = this.data.image;
    
    //Using getComputedStyle due to divStyle.style.display not working as a way to check the state of the element.
    let divStyle = window.getComputedStyle(divShow).getPropertyValue('display');

    //Only operates in case the div is hidden.
    if (divStyle === "none") {
    
        divShow.style.display = "flex"

        //Event listener to close the div with a simple click on the image.
        img.addEventListener("click", () => {        
            divShow.style.display = "none";
            img.src = '';

            //Info for the feature -> Developer Console.
            console.log(`${this.data.title} pop up closed`);
            document.querySelector(".showConsole").innerHTML += `Pop up closed of ${this.data.title} <br>`;
    }, false);

        //Info for the feature -> Developer Console.
        console.log(`${this.data.title} clicked`);
        document.querySelector(".showConsole").innerHTML += `Clicked ${this.data.title} <br>`;
}
}

window.onload = async () => {

    //Conversion of the json file to an array
    const req = await fetch("data.json");
    const res = await req.json();

    //Creating a new instance of the Class Gallery
    const gallery = new Gallery(handlerClick);

    //This is a limiter of the number of objects as per the requirements of the project, the number 10 is arbitrary.
    const galleryMax = 10;

    console.log(`Welcome, the maximum number of art pieces for this gallery is ${galleryMax}`);
    document.querySelector(".showConsole").innerHTML += `Welcome, the maximum number of art pieces for this gallery is ${galleryMax}<br>`;

    //The intent of this If is to avoid any console errors if the length of the array is smaller than the defined maximum.   
    if (res.length < galleryMax) {
        galleryMax = res.length;
    }

    //Randomizer so the gallery looks a bit different for each reset.
    res.sort(() => Math.random() - 0.5);

    //For loop to limit the gallery according to the var galleryMax.
    for (let i = 0; i < galleryMax; i++){
        gallery.addArt(res[i])   
    }

    //Event listener that changes the behaviour of the wheel to change the scroll from vertical to horizontal on a specific div.
    const wrapper = document.querySelector("#wrapper");
    wrapper.addEventListener('wheel', (event) => {
        event.preventDefault();
        wrapper.scrollLeft += event.deltaY;
    });

}