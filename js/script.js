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

var audio = new Audio('../audio/confirma-urna.mp3');
confirmaBotao.addEventListener('click', function() {
  if (inputArea1.value && inputArea2.value){
    audio.play();
    inputArea1.value = ""
    inputArea2.value = ""
  } else{
    alert("Insira os números!")
  }
});