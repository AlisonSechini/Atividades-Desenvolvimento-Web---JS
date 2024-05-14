 let primeiroCodigo = document.querySelector("#primeiroCodigo");
 let btCodigo = document.querySelector("#btCodigo")

 function codigoProdutos(){
    let codigo = parseInt(primeiroCodigo.value);

 if (codigo == "001") {
   alert("Parafuso");
 } else if (codigo == "002") {
   alert("Porca");
 } else if (codigo == "003") {
   alert("Prego");
 } else 
   alert("Diversos");
 }


 btCodigo.onclick = function() {
    codigoProdutos();
 }