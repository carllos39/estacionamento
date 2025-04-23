export class Pessoa {
    #cpf;
    #nome;

    constructor(cpf, nome) {
        this.#cpf = cpf;
        this.#nome = nome;
    }

    get cpf() { return this.#cpf; }
    get nome() { return this.#nome; }
}

export class Cliente extends Pessoa {
    #id;
    #veiculo;

    constructor(veiculo, cpf, nome) {
        super(cpf, nome);
        this.#id = Cliente.getProximoId();
        this.#veiculo = veiculo;
    }

    get id() { return this.#id; }
    get veiculo() { return this.#veiculo; }

    toString() {
        return `Veiculo : ${this.veiculo} | CPF: ${this.cpf} | Nome: ${this.nome}`;
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

    //Atualizar Cliente
    atualizarDados(novoVeiculo, novoCpf, novoNome) {
        if(!novoVeiculo || !novoCpf  || !novoNome) {
            throw new Error("Dados inválidos para atualização");
        }
        this.#veiculo = novoVeiculo;  
        this.cpf = novoCpf;  
        this.nome = novoNome;  
    
    }


    static fromJSON(json) {
        const cliente = new Cliente(json.veiculo, json.cpf, json.nome);
        cliente.#id = json.id;
        return cliente;
    }
}

export class Funcionario extends Pessoa {
    #id;
    #matricula;
    #cargo;

    constructor(matricula, cargo, cpf, nome) {
        super(cpf, nome);
        this.#id = Funcionario.getProximoIf();
        this.#matricula = matricula;
        this.#cargo = cargo;
    }

    get id() { return this.#id; }
    get matricula() { return this.#matricula; }
    get cargo() { return this.#cargo; }

    toString() {
        return `Funcionario: ${this.matricula} | Cargo: ${this.cargo} | CPF: ${this.cpf} | Nome: ${this.nome}`;
    }

    static getProximoIf() {
        let maxId = 0;
        for (let i = 0; i < localStorage.length; i++) {
            const chave = localStorage.key(i);
            if (!isNaN(parseInt(chave))) {
                maxId = Math.max(maxId, parseInt(chave));
            }
        }
        return maxId + 1;
    }

    //Atualizar Funcionário
    atualizarDados(novaMatricula, novoCargo, novoCpf, novoNome) {
        if(!novaMatricula || novoCargo || novoCpf|| !novoNome) {
            throw new Error("Dados inválidos para atualização");
        }
        this.#matricula = novaMatricula;  
        this.#cargo = novoCargo;  
        this.cpf = novoCpf;  
        this.nome = novoNome;  
    }


    static fromJSON(json) {
        const funcionario = new Funcionario(json.matricula, json.cargo, json.cpf, json.nome);
        funcionario.#id = json.id;
        return funcionario;
    }
}




