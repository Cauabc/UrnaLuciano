let inputArea1 = document.querySelector(".inputNumber")
let inputArea2 = document.querySelector(".inputNumber2")

function passarNumero(number){
    if (inputArea1.value && inputArea2.value){
        inputArea2.value = inputArea2.value
    } else{
        inputArea1.value ? inputArea2.value = number : inputArea1.value = number
    }
}

function corrigir(){
    if (inputArea1.value && inputArea2.value){
        inputArea2.value = ""
    } else{
        inputArea1.value = ""
    }
}

let confirmaBotao = document.querySelector(".confirma")
let infoImage = document.querySelector(".info-image")
let textName = document.querySelector(".nome")
let partido = document.querySelector(".partido")
var audio = new Audio('audio/confirma-urna.mp3');

confirmaBotao.addEventListener('click', function() {
  if (inputArea1.value && inputArea2.value){
    audio.play();

    if (inputArea1.value == "2" && inputArea2.value == "2"){
      infoImage.style.backgroundImage = "url('img/bolsonara.jpeg')";
      textName.innerText = "Jaira Messias Bolsonara"
      partido.innerText = "PL"
    } else if (inputArea1.value == "1" && inputArea2.value == "3"){
      infoImage.style.backgroundImage = "url('img/felipe.jpeg')";
      textName.innerText = "Felipao 'Gamer' Galati"
      partido.innerText = "PT"

    }else if (inputArea1.value == "1" && inputArea2.value == "7"){
      infoImage.style.backgroundImage = "url('img/paulo.jpg')";
      textName.innerText = "Paulo Jesus Kogos"
      partido.innerText = "PCdoB"
    }

  } else{
    alert("Insira os números!")
  }
});
