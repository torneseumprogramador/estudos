var Fornecedor = function(){
  this.CNPJ = ""
  // this.telefone = "2222";

  this.super = Pessoa.prototype;

  this.entregarProdutos = function(){
    alert("o Fornecedor está entregando os produtos");
  }
  this.GravarEmMomoria = function(){
    Fornecedor.Base.push(this);
    this.super.GravarEmMomoria();
  }
}

Fornecedor.prototype = new Pessoa();

Fornecedor.Base = [];
