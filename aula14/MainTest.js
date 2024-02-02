

export default class Test {
    #name;
    constructor(name) {
        this.#name = name
    }

    sayHello() {
        return this.#name;
    }
}