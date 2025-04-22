import { Cliente } from "./Pessoa.js";
import { BancoCliente } from "./bancoCliente.js";

document.getElementById("frmCliente").addEventListener("submit", (e)=>{
    e.preventDefault();

  
const id = document.getElementById("id").value;
const veiculo = document.getElementById("veiculo").value;
const cpf = document.getElementById("cpf").value;
const nome = document.getElementById("nome").value;
if(id){
    const cliente = BancoCliente.buscaPorId(id);
    cliente.atualiarDados(veiculo,cpf,nome);
  BancoCliente.atualizar(cliente);
}else{
let cliente = new Cliente(veiculo,cpf,nome);
BancoCliente.salvar(cliente);
window.location.href= "formCliente.html";
}

// Caso esteja editando
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('id')) {
    const cliente = BancoCliente.buscaPorId(urlParams.get('id'));
    console.log(cliente);

    document.getElementById("id").value = cliente.id;
    document.getElementById("veiculo").value =cliente.veiculo ;
    document.getElementById("cpf").value = cliente.cpf;
    document.getElementById("nome").value = cliente.nome;
    
}
});