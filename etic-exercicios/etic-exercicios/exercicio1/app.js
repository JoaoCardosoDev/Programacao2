window.onload = () => {
    /**
     * -- Declaração e Manipulação de Variáveis --
     * Declara duas variáveis, (a , b) e atribui-lhes um valor.
     * Troca os valores de a e b sem usar uma variável temporária.
     * Faz console.log dessas 2 variáveis.
     */

    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b)

    /**
     * -- Instruções Condicionais --
     * Escreve uma função (isEven, por ex.) que recebe um parâmetro numérico.
     * O resultado dessa função verifica se o número é par ou ímpar.
     * Faz console.log desse resultado.
     */
    isEven = (num) => {
        if(num%2 === 0){
            console.log("Even")
            return true
        }else{
            console.log("False")
            return false
        }
    }
    isEven(2);
    isEven(3);


    /**
     * -- Arrays --
     * Escreve uma função que recebe um array de 5 números (por ex: [2, 123, 34, 65, 48]).
     * Itera sobre esse array e faz console.log apenas dos números pares.
     */
    array = [2, 123, 34, 65, 48]

    arrayEven = (array) => {
        array.forEach(element => {
            if (element%2 === 0){
                console.log(element)
            }  
        });
    }
    arrayEven(array)


    /**
     * -- Funções --
     * Escreve uma função que recebe dois parâmetros, num1, num2, e retorna a soma deles.
     * Faz console.log desse resultado.
     */
    sum = (num1, num2) =>{
        return (num1 + num2)
    }
    console.log(sum(1, 2))


    /**
     * -- Objetos --
     * Cria um objeto que represente uma pessoa com as  propriedades nome, idade e genero.
     * Faz console.log dessas propriedades.
     */
    let obj = {
        nome: "joao",
        idade: "30",
        genero: "male"
    }
    console.log(obj)


    /**
     * -- Loops --
     * Escreve um for loop que imprime a sequência de Fibonacci até um número específico de items (10, por ex.).
     * Faz console.log a cada iteração.
     */
    let c = 0
    let d = 1
    for (let i = 0; i < 10; i++) {
        console.log(c)
        let aux = c + d
        c = d
        d = aux
        
    }


    /**
     * -- Manipulação do DOM --
     * No ficheiro index.html, cria dois elementos do tipo <button> e <p> dentro do  <body>.
     * Cria um evento onclick no botão que quando “clicado”, insere o texto “button clicked” no elemento <p>.
     */
    const button = document.querySelector('button');
    const p = document.querySelector('p')
    button.onclick = () => {
        p.innerHTML+="Button clicked <br>"
    }


    /**
     * -- Async/Await e Fetch --
     * Cria uma função (loadData, por ex) que faça fetch do ficheiro “data.json”
     * e transforme o resultado desse fetch em formato json.
     * Faz console.log desse json.
     */
    const loadData = async(url) => {
        const req = await fetch(url);
        const res = await req.json();
        console.log(res)
    }
    data = loadData("data.json")
}