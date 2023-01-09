const bestGames = []
const teste = (name, age) => {
    
    const formulario = {
         name: name,
         age: age,
        

        funcao ()  {
            console.log(`Hello ${this.name} com ${this.age} anos!`)
        },

        bestGames: bestGames,
    }


    
    formulario.funcao();
    return bestGames;


}



const adicionar = () => {
    const name = prompt("Qual o seu nome?");
    const age = prompt("Digite sua idade");
    const bestGame = prompt("Diga seu jogo favorito");
    
    const confirmGame = confirm("Deseja adicionar mais um jogo?");
    const pegarValor = teste(name, age);
    
    function maisUm() {
         if (confirmGame === true){
        const newGame = prompt("Digite mais um jogo")
        pegarValor.push(bestGame, newGame);
        console.log(pegarValor);

    } else {
        pegarValor.push(bestGame);
        console.log(pegarValor);
    }
    
    }

   maisUm()
    
}
