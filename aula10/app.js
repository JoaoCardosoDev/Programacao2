window.onload = () => {
    // const test = new Test((value) => {
    //     h1.innerHTML += value
    // });
    // test.width = 100;
    // test.height = 150;
    // test.background = "red";
    
    // test.setName("test1");
    // test.setAge(45);
    // test.setGender("male");

    const h1 = document.querySelector('h1');
   
    const test2 = new Test2((value) => {
        h1.innerHTML += "Callback being called <br>";
    })
    test2.width = 100;
    test2.height = 150;
    test2.background = "green";

    // console.log(test.width);
    // console.log(test.height);
    // console.log(test.background);

    // const test2 = new Test(() => {
    //     console.log("Test2 Clicked");
    // });
    // test2.width = 200;
    // test2.height = 200;
    // test2.background = "blue";

    // const test3 = new Test(() => {
    //     console.log("Test3 Clicked");
    // });
    // test3.width = 300;
    // test3.height = 300;
    // test3.background = "green";

    
}

class Test {
    #name;
    #age;
    #gender;
    #view;
    #callback;

    constructor(callback) { 

        this.#callback = callback;

        this.#view = document.createElement("div");
        this.#view.className = "view";
        this.#view.onclick = () => {
            this.#callback(this.#name + " clicked <br>");
        }
        document.body.appendChild(this.#view);
    }

    
    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    getGender() {
        return this.#gender;
    }
    
    setName(value) {
        this.#name = value
    }
    setAge(value) {
        this.#age = value
    }
    setGender(value) {
        this.#gender = value
    }
    get width() {
        return this.#view.style.width.replace("px", "");
    }
    set width(value) {
        this.#view.style.width = value + "px";
    }

    get height() {
        return this.#view.style.height.replace("px", "");
    }
    set height(value) {
        this.#view.style.height = value + "px";
    }
    get background() {
        return this.#view.style.backgroundColor;
    }
    set background(value) {
        this.#view.style.backgroundColor = value;
    }
}

class Test2 {

    #view;

    constructor (callback) {

        this.#view = document.createElement('div');
        this.#view.className = "view";
        this.#view.onclick = () => callback();
        document.body.appendChild(this.#view)
    }
    set width(value) {
        this.#view.style.width = value + "px";
    }
    set height(value) {
        this.#view.style.height = value + "px";
    }
    set background(value) {
        this.#view.style.backgroundColor = value;
    }
}


// console.log(test.getName())

// test.setName("bruno")
// console.log(test.getName())