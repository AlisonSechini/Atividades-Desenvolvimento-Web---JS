let valorInicial = document.querySelector("#valorInicial");
let calculoSaldo = document.querySelector("#calculoSaldo");

function reajuste(){
    let valor1 = Number(valorInicial.value);
    let resultado = valor1 * 1.01
    alert(resultado)
}

calculoSaldo.onclick = function(){
    reajuste()
}

