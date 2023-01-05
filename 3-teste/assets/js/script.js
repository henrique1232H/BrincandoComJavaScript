function enviar() {
    let inputButton = document.body.querySelector("#text").value;
    const show = document.body.querySelector(".mostrar");
    

    document.body.style.fontSize = "15px"
    show.innerHTML += `<li>${inputButton}</li>`

    

}

function resetar() {
    const show = document.body.querySelector(".mostrar");
    show.innerHTML = "";
}