import Zoo from "./Zoo.js";
import AudioPlayer from "./Classes/AudioPlayer.js";

window.onload = async () => {

    console.log(Zoo.ZooInfo())

    const req = await fetch("data.json");
    const res = await req.json();
    
    const zoo = new Zoo((animal) => {
        // console.log("zoo event", animal);
        audioPlayer.play(animal.sounds);
    });

    res.forEach(element => {
        zoo.addAnimal(element);
    })
    
    const audioPlayer = new AudioPlayer();
}
