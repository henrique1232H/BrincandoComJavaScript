function fazerAparecer() {
    const inputButton = document.querySelector("button");
    const divAparecer = document.querySelector(".aparecer");
    const ul = document.querySelectorAll("ul")[1]

    inputButton.addEventListener("click", () => {
    

        if (divAparecer.style.display === "none") {
            divAparecer.style.display = "block";
        }else {
            divAparecer.style.display = "none";
        }
        
    })


}

fazerAparecer()