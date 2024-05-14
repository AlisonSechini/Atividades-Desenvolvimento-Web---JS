let valorPago = document.querySelector("#valorPago")
let valorProduto = document.querySelector("#valorProduto")
let h3resultado = document.querySelector("#h3resultado");
let btTroco = document.querySelector("#btTroco");

function troco (){
    let valor1 = Number(valorPago.value);
    let valor2 = Number(valorProduto.value);
    let resultado = valor1 - valor2;
    h3resultado.textContent =String(resultado);
   

}

btTroco.onclick = function(){
    troco()
}
  