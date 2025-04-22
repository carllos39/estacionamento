import {Funcionario} from "./Pessoa.js";
import { BancoFuncionario } from "./BancoFuncionario.js";
document.getElementById("frmFuncionario").addEventListener("submit", (e)=>{
e.preventDefault();
const id = document.getElementById("id").value;
const matricula = document.getElementById("matricula").value;
const cargo = document.getElementById("cargo").value;
const cpf = document.getElementById("cpf").value;
const nome= document.getElementById("nome").value;


if(id){
    const funcionario = BancoCliente.buscaPorId(id);
    funcionario.atualiarDados(matricula,cargo,cpf,nome);
  BancoCliente.atualizar(funcionario);
}else{
  let funcionario = new Funcionario(matricula,cargo,cpf,nome);
  BancoFuncionario.salvar(funcionario);
  window.location.href= "formFuncionario.html";
}

// Caso esteja editando
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('id')) {
    const funcionario = BancoFuncionario.buscaPorId(urlParams.get('id'));
    console.log(produto);

    document.getElementById("id").value = funcionario.id;
    document.getElementById("matricula").value = funcionario.matricula;
    document.getElementById("cargo").value = funcionario.cargo;
    document.getElementById("cpf").value = funcionario.cpf;
    document.getElementById("nome").value = funcionario.nome;

}

});