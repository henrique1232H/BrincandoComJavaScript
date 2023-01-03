// Criador de contas

function createMath(firstNumber, secondNumber, seletor) {
    const divMostrar = document.body.querySelector("#mostrar");
    firstNumber = Number(prompt("Primeiro Número"));
    secondNumber = Number(prompt("Segundo número"));
    seletor = prompt("Escolha sua conta");
    let sum;

    function math() {
        switch (seletor) {
            case "+":
                sum = firstNumber + secondNumber;
                return divMostrar.innerHTML += `Sua conta deu: ${sum} </br>`
                break;
            case "-":
                sum = firstNumber - secondNumber;
                return divMostrar.innerHTML += `Sua conta deu: ${sum} </br>`
                break;
            case "*":
                sum = firstNumber * secondNumber;
                return divMostrar.innerHTML += `Sua conta deu: ${sum} </br>`
                break;
            case "/":
                sum = firstNumber / secondNumber;
                return divMostrar.innerHTML += `Sua conta deu: ${sum}</br>`
                break;
            default:
                return divMostrar.innerHTML += `Isso não é um seletor. Digite um seletor da tabela </br>`

        }
    }
    
    math()
}


function resetar() {
    const divMostrar = document.body.querySelector("#mostrar");
    divMostrar.innerHTML = "";
}