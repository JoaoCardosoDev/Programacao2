import Gallery from "./classes/gallery.js";


window.onload = async () => { 
    
    const req = await fetch("data.json");
    const res = await req.json();

    const gallery = new Gallery(/*(art) =>{
        console.log("wat")
    }*/);

    res.forEach(element => {
        gallery.addArt(element);
    })
}