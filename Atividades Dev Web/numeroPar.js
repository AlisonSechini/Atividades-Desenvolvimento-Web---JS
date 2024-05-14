let primeiroNumero = document.querySelector("#primeiroNumero");
let btVerifica = document.querySelector("#btVerifica");

function verificarImpar() {
  let numero = Number(primeiroNumero.value);
  if(numero % 2 !== 0) {
    alert("O número é ímpar.");
  } else {
    alert("O número é par.");
  }
}

btVerifica.onclick = function() {
  verificarImpar();
}