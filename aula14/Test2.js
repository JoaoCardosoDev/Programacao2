import MainTest from "./MainTest.js"

export default class Test2 extends MainTest {
    constructor(name) {
        super(name);
    }

    sayHello() {
        return "Hello I'm " + super.sayHello();
    }
}