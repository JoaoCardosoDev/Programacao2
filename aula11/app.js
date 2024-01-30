import Zoo from "./Zoo.js";

window.onload = async () => {

    console.log(Zoo.ZooInfo())

    const req = await fetch("data.json");
    const res = await req.json();
    
    const zoo = new Zoo(() => {
        console.log("zoo event");
    });
    // zoo.addAnimal(seagull);
    // zoo.addAnimal(chicken);
    // zoo.addAnimal(pidgeon);
    // zoo.addAnimal(lion);
    // zoo.addAnimal(dolphin);
    // zoo.addAnimal(human);
    // zoo.addAnimal(salamander);
    // zoo.addAnimal(crocodile);
    res.forEach(element => {
        zoo.addAnimal(element);
    })

    // const chicken = zoo.getAnimal("chicken");
    // console.log(chicken)
    
    // zoo.showAnimals();

    // const seagull = new Bird('seagull', true);
    // const pidgeon = new Bird('pidgeon', true);
    // const chicken = new Bird('chicken', false);
    // const lion = new Mammal('lion', 4);
    // const dolphin = new Mammal('dolphin', 0);
    // const human = new Mammal('human', 2);
    // const salamander = new Reptile('salamander', false)
    // const crocodile = new Reptile('crocodile', true);
}
