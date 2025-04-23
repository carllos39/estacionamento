document.getElementById("frmEstacionamento").addEventListener("submit", (e)=>{
    e.preventDefault();
const placa = document.getElementById("placa").value ;
const entrada = parseFloat( document.getElementById("entrada").value );
const saida = parseFloat( document.getElementById("saida").value );
let tempo=saida - entrada;
tempo =
console.log("Tempo :",tempo);

});