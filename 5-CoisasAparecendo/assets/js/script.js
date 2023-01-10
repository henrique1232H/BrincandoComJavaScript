function fazerAparecer() {
    const inputButton = document.querySelector("button");
    const divAparecer = document.querySelector(".aparecer");

    inputButton.addEventListener("click", (evento) => {
        evento.preventDefault();
        
        if (divAparecer.style.display === "none") {
            divAparecer.style.display = "block";
        }else {
            divAparecer.style.display = "none"
        }
        
    })
}

fazerAparecer()