var Fornecedor = function(){
  this.CNPJ = ""

  this.entregarProdutos = function(){
    alert("o Fornecedor está entregando os produtos");
  }
  this.GravarEmMomoria = function(){
    Fornecedor.Base.push(this);
  }
}

Fornecedor.prototype = new Pessoa();

Fornecedor.Base = [];
