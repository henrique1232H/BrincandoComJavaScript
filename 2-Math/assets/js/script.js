function number(firstNumber, secondNumber, thirdNumber, fourNumber) {

 firstNumber = window.prompt("Primeiro número");
 secondNumber = window.prompt("Segundo Número");
 thirdNumber = window.prompt("Terceiro Número");
 fourNumber = window.prompt("Quarto Número");

 firstNumber = Number(firstNumber);
 secondNumber = Number(secondNumber);
 thirdNumber = Number(thirdNumber);
 fourNumber = Number(fourNumber);


 function showNumber(){

    const maxNumber = Math.max(firstNumber, secondNumber, thirdNumber, fourNumber)

    const minNumber = Math.min(firstNumber, secondNumber, thirdNumber, fourNumber);

    const divMostrar = document.body.querySelector(".mostrar")

    divMostrar.innerHTML = "";
    divMostrar.innerHTML += `</br> Seus números escolhidos são ${firstNumber}, ${secondNumber}, ${thirdNumber} e ${fourNumber}`

    divMostrar.innerHTML += `</br> Número maximo ${maxNumber}`
    divMostrar.innerHTML += `</br> Número minimo ${minNumber}`

 }

 showNumber()
}