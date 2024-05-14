let valorQuilo = document.querySelector("#valorQuilo")
let quantiaQuilo = document.querySelector("#quantiaQuilo")
let result = document.querySelector("#result");
let btQuilos = document.querySelector("#btQuilos");

function valorKG (){
    let valor1 = Number(valorQuilo.value);
    let valor2 = Number(quantiaQuilo .value);
    let resultado = valor1 * valor2;
    result.textContent =String(resultado);
   

}

btQuilos.onclick = function(){
    valorKG()
}
  