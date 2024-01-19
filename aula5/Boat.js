import Vehicle from "./Vehicle.js";

export default class Boat extends Vehicle {

    constructor(data) {
        super(data);
        console.log(this.brand, this.speed)
        }

}