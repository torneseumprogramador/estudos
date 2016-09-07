var Cliente = function(){
  this.nome = "";
  this.telefone = "";
  this.cpf = "";

  this.Mostrar = function(){
    document.write("Nome: " + this.nome + "<br>");
    document.write("Telefone: " + this.telefone + "<br>");
    document.write("CPF: " + this.cpf + "<br>");
  }
}