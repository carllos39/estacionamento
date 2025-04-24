import { BancoVeiculo } from "./BancoVeiculo.js";
import { Veiculo } from "./Veiculo.js";

document.getElementById("frmVeiculo").addEventListener("submit", (e)=>{
e.preventDefault();
const id = document.getElementById("id").value ;
const placa = document.getElementById("placa").value ;
const modelo = document.getElementById("modelo").value ;
const cor= document.getElementById("cor").value ;
const tipo = document.getElementById("tipo").value ;
const cliente_id= document.getElementById("cliente_id").value;


 if(id){
    const veiculo = BancoVeiculo.buscaPorId(id);
    veiculo.atualizarDados(placa,modelo,cor,tipo);
  BancoVeiculo.atualizar(veiculo);
 }else{
  let veiculo = new Veiculo(placa,modelo,cor,tipo,cliente_id);
  BancoVeiculo.salvar(veiculo);
  window.location.href= "formVeiculo.html";


// Caso esteja editando
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('id')) {
    const veiculo = BancoVeiculo.buscaPorId(urlParams.get('id'));
    console.log(veiculo);

    document.getElementById("id").value = veiculo.id;
    document.getElementById("placa").value = veiculo.placa;
    document.getElementById("modelo").value = veiculo.modelo;
    document.getElementById("cor").value = veiculo.cor;
    document.getElementById("tipo").value = veiculo.tipo;

}
}  
});