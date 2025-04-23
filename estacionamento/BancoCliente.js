import { Cliente } from "./Pessoa.js";

export class BancoCliente{
static salvar(cliente){
localStorage.setItem(cliente.id , JSON.stringify({
    id:cliente.id,
    veiculo:cliente.veiculo,
    cpf:cliente.cpf,
    nome:cliente.nome
}));
}

static buscaTodos(){
    const clientes = [];

    for(let i= 0; i < localStorage.length;i++){
        const chave = localStorage.key(i);

        if(!isNaN(parseInt(chave))){
        const dados = JSON.parse(localStorage.getItem(chave));
        clientes.push(Cliente.fromJSON(dados));
        }

    }
    return clientes.sort((a , b)=> a.id - b.id);
}
static buscaPorId(id){
    const clienteJSON = localStorage.getItem(id);
    const dados = JSON.parse(dados);
    return Cliente.fromJSON(dados);
}

static atualizar(clienteAtualizado){
localStorage.setItem(clienteAtualizado.id,JSON.stringify({
    id:clienteAtualizado.id,
    veiculo:clienteAtualizado.veiculo,
    cpf:clienteAtualizado.cpf,
    nome:clienteAtualizado.nome  

}));
}


static excluir(id){
localStorage.removeItem(id);
}
}