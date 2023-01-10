function enviar() {
    const form = document.querySelector(".form");

    const array = [];
    
    
    form.addEventListener("submit", (prevent) => {
        prevent.preventDefault();
        
        const inputName = form.querySelector("#name").value;
        const inputAge = form.querySelector("#age").value;
        const inputGame = form.querySelector("#game").value;
        const choice = confirm("Deseja adicionar mais um jogo");

        const criar = document.querySelector(".form .criar");
        const criarInput = criar.querySelector("#another").value;

         const object = {
            name: inputName,
            age: inputAge,
            game: inputGame,
            another: criarInput
         
        }

        

        if (choice === true){
            criar.style.display = "block"
            array.push(object)
            
        }else {
            criar.style.display = "none"
        }
           
        console.log(array)
        
    })
}

enviar()
