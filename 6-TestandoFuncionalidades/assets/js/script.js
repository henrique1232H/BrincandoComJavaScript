
function changeColorForm1() {
    const form1 = document.querySelector("#form");
    const bloco1 = document.querySelector(".teste1");
   

    form1.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const inputColor = form1.querySelector("#color").value;

        bloco1.style.background = inputColor;

        if (inputColor >= "#00000"  && inputColor <= "#70812"){
            bloco1.innerHTML += `<br>Isso está um pouco escuro`;
            bloco1.style.color = "#FFF";
            bloco1.style.border = "10px";
        } else if (inputColor >= "#71000") {
            bloco1.innerHTML += "<br>Isso está um pouco mais claro";
        } else {
            console.log("Erro");
        }
    })
}

changeColorForm1()


function changeColorForm2() {
    const form2 = document.querySelector("#form2");
    const bloco2 = document.querySelector(".teste2");
   

    form2.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const inputColor = form2.querySelector("#color").value;

        bloco2.style.background = inputColor;

        if (inputColor >= "#00000"  && inputColor <= "#70812"){
            bloco2.innerHTML += `<br>Isso está um pouco escuro`;
            bloco2.style.color = "#FFF";
            bloco2.style.border = "10px";
        } else if (inputColor >= "#71000") {
            bloco2.innerHTML += "<br>Isso está um pouco mais claro";
        }
    })
}

changeColorForm2()