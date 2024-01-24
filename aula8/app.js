createUL = (nav) => {
    const ul = document.createElement('ul');
    nav.appendChild(ul)
}
createLI = (ul) => {
    const li = document.createElement('li');
    ul.appendChild(li)
}
createH1 = (nav, counter) => {
    const h1 = document.createElement('h1');
    h1.innerText = `Startled counter: `+ counter;
    nav.appendChild(h1);
}
createButton = (nav) => {
    const button = document.createElement('button');
    // button.innerText = prompt("Dear Sir, what would you like to have written on the button?")
    button.innerText = "Click ME!"
    button.style = `position : absolute`
    nav.appendChild(button);
}

startled =  () => {
    const nav = document.querySelector('nav');
    const img = document.createElement('img');
    img.src = "Startled-Kevin.jpg"
    nav.appendChild(img);
}
startledDel = () => {
    const nav = document.querySelector('nav');
    const img = document.querySelector('img')
    nav.removeChild(img);

}

// window.onload = () => {
//     console.log("Loaded!");

//     const nav = document.querySelector('nav');
//     console.log(nav);
//     createH1(nav);
//     createUL(nav);
//     const ul = document.querySelector('ul');
    
//     for (let i = 0; i < 5; i++) {
//         createLI(ul);
//         createH1(nav);

//     }


// }

// window.onload = () => {

//     const nav = document.querySelector('nav')
//     let counter = 0
//     createH1(nav, counter);
//     const h1 = document.querySelector('h1')
//     createButton(nav);
    
//     const button = document.querySelector('button');
//     // button.onclick = () => {
//     //     startled();
//     // }
//     button.onmousedown = () => {
//         startled();
//         counter+=1;
//         h1.innerHTML = `Startled counter: `+ counter;
//     }
//     button.onmouseup = () => {
//         startledDel();

//     }
// }

// window.onload = () => {

//     const large = document.querySelector(".large");
//     const small = document.querySelector(".small");

//     large.onclick = () => {

//         small.dispatchEvent(new CustomEvent('small_event'));
//     }
//     small.addEventListener("small_event", () => {
//         console.log("Large clicked")
//     })

// }


window.onload = async () => {
    const test = new AppTest();

    test.addEventListener('test_data_loaded', (event) =>{ 
        console.log(event.detail);
    });

    test.loadData();
}

class AppTest extends HTMLElement {
    constructor() {
        super();        
    }
    async loadData() {
        const req = await fetch('data.json');
        const res = await req.json();
        this.dispatchEvent(new CustomEvent("test_data_loaded", {detail:res}))
    }
}
customElements.define('app-test', AppTest);

