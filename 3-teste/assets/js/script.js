
function enviar() {
    let input = document.body.querySelector("#text").value;
    const show = document.body.querySelector(".mostrar");
    document.body.style.fontSize = "15px";
    show.innerHTML += `<li>${input.toUpperCase()}</li>`;
    document.body.style.background = "#ccc";

     return input;

}


const teste = () => {
    const pegar = enviar();
    const array = [pegar, pegar];
    document.body.style.background = "purple";
    console.log(array);
    return true;
}

const reset = () => {
    const show = document.body.querySelector(".mostrar");
    document.body.style.background = "#fff";
    show.innerHTML = "";
    console.log("Resetado");
}