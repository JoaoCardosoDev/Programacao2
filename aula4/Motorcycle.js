import Vehicle from "./Vehicle.js";

export default class Motorcycle extends Vehicle {

    constructor(){
        super();

        this.speed = 50;
        console.log("Motorcycle speed is", this.speed);

    }

}
