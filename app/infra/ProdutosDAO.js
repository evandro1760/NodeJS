function ProdutosDAO(connection){
    this.connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this.connection.query('select * from livros',callback);
    return this;
};

ProdutosDAO.prototype.salva = function(produto,callback){
    this.connection.query('insert into livros (titulo,preco,descricao) values ("'+produto.titulo+'",'+produto.preco+',"'+produto.descricao+'");', callback);
};

module.exports = function(){
    return ProdutosDAO;
}
