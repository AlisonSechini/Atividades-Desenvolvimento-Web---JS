let valorUm = document.querySelector("#valorUm");
let valorDois = document.querySelector("#valorDois");
let maiorNumero = document.querySelector("#maiorNumero");

function maiorValor (){
    let valor1 = Number(valorUm.value);
    let valor2 = Number(valorDois.value);

    if(valor1 > valor2){
        alert("O valor um e maior");
    }else
        alert("O valor dois e maior");
        
}

maiorNumero.onclick = function(){
    maiorValor();
}
