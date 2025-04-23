import { Funcionario } from "./Pessoa.js";

export class BancoFuncionario{
   static salvar(funcionario){
   localStorage.setItem(funcionario.id, JSON.stringify({
    id:funcionario.id,
    matricula:funcionario.matricula,
    cargo:funcionario.cargo,
    cpf:funcionario.cpf,
    nome:funcionario.nome
   }));
   }

   static buscaTodos(){
    const funcionarios=[];

    for(let i=0; i < localStorage.length;i++){
    const chave = localStorage.key(i);
    

    if(!isNaN(parseInt(chave))){
  const dados = JSON.parse(localStorage.getItem(chave));
  funcionarios.push(Funcionario.fromJSON(dados));
    }
    }
    return funcionarios.sort((a, b) => a.id - b.id);
   }
 static buscaPorId(id){
     const funcionarioJSON = localStorage.getItem(id);
     const dados = JSON.parse(dados);
     return Funcionario.fromJSON(dados);
 }
 
 static atualizar(funcionarioAtualizado){
 localStorage.setItem(funcionarioAtualizado.id,JSON.stringify({
     id:funcionarioAtualizado.id,
     matricula:funcionarioAtualizado.matricula,
     cargo:funcionarioAtualizado.cargo,
     cpf:funcionarioAtualizado.cpf,
     nome:funcionarioAtualizado.nome
   
 }));
 }

   static excluir(id){
      localStorage.removeItem(id);
   }
   

   } 
