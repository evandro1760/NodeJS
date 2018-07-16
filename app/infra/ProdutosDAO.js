function ProdutosDAO(connection){
    this.connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this.connection.query('select * from livros', callback);
}

module.exports = function(){
    return ProdutosDAO;
}