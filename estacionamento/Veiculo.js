import { Cliente } from "./Pessoa.js";

export class Veiculo{
#id;
#placa;
#modelo;
#cor;
#tipo;
#cliente_id;

constructor(id,placa,modelo,cor,tipo,cliente_id){
    this.#id = Veiculo.getProximoId(id);
    this.#placa = placa;
    this.#modelo = modelo;
    this.#cor = cor;
    this.#tipo = tipo;
    this.#cliente_id = cliente_id ;

}

get id(){return this.#id;}
get placa(){return this.#placa;}
get modelo(){return this.#modelo;}
get cor(){return this.#cor;}
get tipo(){return this.#tipo;}
get cliente_id(){return this.#cliente_id;}




toString() {
    return `Placa: ${this.placa} | Modelo: ${this.modelo} | Cor: ${this.cor} | Tipo: ${this.tipo}| Cliente: ${this.cliente_id}`;
}

static getProximoId() {
    let maxId = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        if (!isNaN(parseInt(chave))) {
            maxId = Math.max(maxId, parseInt(chave));
        }
    }
    return maxId + 1;
}

//Atualizar Veiculo
atualizarDados(novaPlaca, novoModelo, novaCor, novoTipo) {
    if(!novaMatricula || novoCargo || novoCpf|| !novoNome) {
        throw new Error("Dados inválidos para atualização");
    }
    this.#placa = novaPlaca;  
    this.#modelo = novoModelo;  
    this.#cor= novaCor;  
    this.#tipo= novoTipo;  
    
}


static fromJSON(json) {
    const veiculo = new Veiculo(json.placa, json.modelo, json.cor, json.tipo);
    veiculo.#id = json.id;
    return veiculo;
}
}

