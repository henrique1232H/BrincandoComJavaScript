const show = document.body.querySelector(".mostrar");
const compras = [];
function enviar() {
    const form = document.querySelector(".form");
   
   

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const input = document.body.querySelector("#text").value;

        compras.push(input);
        console.log(compras);

        
        show.innerHTML += `<li>${input.toUpperCase()}</li>`;
        document.body.style.fontSize = "15px";
        
    })
    return true;
}

enviar();

const reset = () => {
    const formResetar = document.querySelector(".form #resetar")
    const show = document.body.querySelector(".mostrar");

    formResetar.addEventListener("click", (evento) => {
        evento.preventDefault();
        document.body.style.background = "#fff";
        show.innerHTML = "";
        
        for (let i = 0; i <= compras.length; i++){
            compras.pop();
            compras.shift();
            compras.pop();
            compras.shift();       

        }
        console.log("Resetado");
        console.log(compras);
    })

    return true;
    }

reset();