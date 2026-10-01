const prompt = require('prompt-sync')();

class Usuario {
    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.interesses = [];
    }
}

class Categoria {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}
const categoria1 = new Categoria(1,"Eletrônicos");
const categoria2 = new Categoria(2, "Roupas e Acessorios");
const categoria3 = new Categoria(3, "");
const categoria4 = new Categoria("Carlos", 22);

class Item {
    constructor(id, nome, descricao, idCategoria, idDono) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.idCategoria = idCategoria;
        this.idDono = idDono;
        this.status = "disponivel";
    }
}

class Escambo {
    constructor(id, idItemDesejado, idItemOferecido, idProponente, idDestinatario) {
        this.id = id;
        this.idItemDesejado = idItemDesejado;
        this.idItemOferecido = idItemOferecido;
        this.idProponente = idProponente;
        this.idDestinatario = idDestinatario;
        this.status = "pendente";
    }
} 
