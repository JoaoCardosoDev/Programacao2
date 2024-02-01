import Zoo from "./Zoo.js";
import AudioPlayer from "./Classes/AudioPlayer.js";

window.onload = async () => {

    const req = await fetch("data.json");
    const res = await req.json();
    
    const zoo = new Zoo((animal) => {
        // console.log("zoo event", animal);
        // console.log(animal);
        document.querySelector("h2").innerText = animal.introduce();
        audioPlayer.play(animal.sounds);
    });

    res.forEach(item => {
        zoo.addAnimal(item);
    })
    
    const audioPlayer = new AudioPlayer();
}
