function number(firstNumber, SecondNumber, ThirdNumber, FourNumber) {

 firstNumber = window.prompt("Primeiro número");
 SecondNumber = window.prompt("Segundo Número");
 ThirdNumber = window.prompt("Terceiro Número");
 FourNumber = window.prompt("Quarto Número");

 firstNumber = Number(firstNumber);
 SecondNumber = Number(SecondNumber);
 ThirdNumber = Number(ThirdNumber);
 FourNumber = Number(FourNumber);


 function showNumber(){

    const maxNumber = Math.max(firstNumber,SecondNumber, ThirdNumber, FourNumber)

    const minNumber = Math.min(firstNumber, SecondNumber, ThirdNumber, FourNumber);

    const divMostrar = document.body.querySelector(".mostrar")

    divMostrar.innerHTML += `</br> Seus números escolhidos são ${firstNumber}, ${SecondNumber}, ${ThirdNumber} e ${FourNumber}`

    divMostrar.innerHTML += `</br> Número maximo ${maxNumber}`
    divMostrar.innerHTML += `</br> Número minimo ${minNumber}`

 }

 showNumber()
}