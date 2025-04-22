 import { Veiculo } from "./Veiculo.js";

 export class BancoVeiculo{
    static salvar(veiculo){
        localStorage.setItem(veiculo.id,JSON.stringify({
            id:veiculo.id,
            placa:veiculo.placa,
            modelo:veiculo.modelo,
            cor:veiculo.cor,
            tipo:veiculo.tipo,
            cliente_id:veiculo.cliente_id
        }));
    }

    static buscarTodos(){
        let veiculos=[];

        for(let i= 0; i < localStorage.length;i++){
        const chave = localStorage.key(i);
        if(!isNaN(parseInt(chave))){
            const dados = JSON.parse(localStorage.getItem(chave));
        }
        }
        return veiculos.sort((a, b) => a.id - b.id);
        
    }
     static buscaPorId(id){
         const funcionarioJSON = localStorage.getItem(id);
         const dados = JSON.parse(dados);
         return Veiculo.fromJSON(dados);
     }
     
     static atualizar(veiculoAtualizado){
     localStorage.setItem(veiculoAtualizado.id,JSON.stringify({
         id:veiculoAtualizado.id,
         placa:veiculoAtualizado.placa,
         modelo:veiculoAtualizado.modelo,
         cor:veiculoAtualizado.cor,
         tipo:funcionarioAtualizado.tipo
       
     }));
     }
    
       static excluir(id){
          localStorage.removeItem(id);
       }
 }