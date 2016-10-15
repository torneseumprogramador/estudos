var Pessoa = function(_campos){
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
}

Pessoa.prototype.Original = function(){
  console.log("função original");
}

Pessoa.prototype.nome = "";
Pessoa.prototype.telefone = "";
Pessoa.prototype.cpf = "";
Pessoa.prototype.GravarEmMomoria = function(){
  Pessoa.Base.push(this);
}

Pessoa.Base = [];

Pessoa.todos = function(){
  html = "<h1>Estou executando um médodo de classe</h1>";

  for(i=0;i<Pessoa.Base.length; i++){
    pessoa = Pessoa.Base[i];

    html += "Nome: " + pessoa.nome + "<br>";
    html += "Telefone: " + pessoa.telefone + "<br>";
    html += "CPF: " + pessoa.cpf + "<br>";
    html += "<hr>";
  }

  document.getElementById("resultado").innerHTML = html;
}