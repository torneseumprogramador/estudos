var Cliente = function(_campos){

  if(_campos != undefined){
    this.nome = _campos.nome;
    this.telefone = _campos.telefone;
    this.cpf = _campos.cpf;
  }

  this.Mostrar = function(){
    document.write("Nome: " + this.nome + "<br>");
    document.write("Telefone: " + this.telefone + "<br>");
    document.write("CPF: " + this.cpf + "<br>");
  }

  this.GravarEmMomoria = function(){
    Cliente.clientes.push(this);
  }
}

Cliente.clientes = [];

Cliente.todos = function(){
  html = "<h1>Estou executando um médodo de classe</h1>";

  for(i=0;i<Cliente.clientes.length; i++){
    cliente = Cliente.clientes[i];

    html += "Nome: " + cliente.nome + "<br>";
    html += "Telefone: " + cliente.telefone + "<br>";
    html += "CPF: " + cliente.cpf + "<br>";
    html += "<hr>";
  }

  document.getElementById("resultado").innerHTML = html;
}