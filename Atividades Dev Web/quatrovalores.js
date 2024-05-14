let valorUm = document.querySelector("#valorUm");
let valorDois = document.querySelector("#valorDois");
let valorTres = document.querySelector("#valorTres");
let valorQuatro = document.querySelector("#valorQuatro");
let btMenorValor = document.querySelector("#btMenorValor");

function menorNumero(){
    let valor1 = Number(valorUm.value);
    let valor2 = Number(valorDois.value);
    let valor3 = Number(valorTres.value);
    let valor4 = Number(valorQuatro.value);

    if (valor1 < valor2 && valor1 < valor3 && valor1 < valor4)
        alert("O valor um e o menor");

    else if (valor2 < valor1 && valor2 < valor3 && valor2 < valor4)
        alert("O valor dois e o menor");

    else if (valor3 < valor1 && valor3 < valor2 && valor3 < valor4)
        alert("O valor tres e o menor");

    else if (valor4 < valor1 && valor4 < valor2 && valor4 < valor3)
        alert("O valor quatro e o menor");
}

btMenorValor.onclick = function(){
    menorNumero();
}