// Criador de contas

function createMath(num1, num2) {
    let div = document.querySelector(".mostrar");
    const question = window.confirm("Você quer fazer contas?");

    if (question === true) {
        const math = () => {
            num1 = window.prompt("Primeiro número")
            num1 = Number(num1);

            num2 = window.prompt("Segundo Número");
            num2 = Number(num2);

            const sum = num1 + num2;
            return div.innerHTML += `Sua conta deu ${sum} </br>`

            
        }
        math()
    }else {
        div.innerHTML += `Sem graça </br>`
    }
}


function reset() {
    
    alert("Foi resetado")
}

