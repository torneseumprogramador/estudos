var db = require('../../config/db.js');

var Usuario = function(){
  this.id = 0;
  this.nome = "";
  this.login = "";
  this.senha = "";
  this.email = "";

  this.salvar = function(){
    if(this.nome === ""){
      console.log("[Modelo:Usuario] Nome de usuário obrigatório");
      return;
    }

    if(this.login === ""){
      console.log("[Modelo:Usuario] Nome de login obrigatório");
      return;
    }

    if(this.senha === ""){
      console.log("[Modelo:Usuario] Nome de senha obrigatório");
      return;
    }

    if(this.id === 0 || this.id === "" || this.id === undefined){
      var query = "INSERT INTO usuarios (nome, login, senha, email) VALUES ('" + this.nome + "', '" + this.login + "', '" + this.senha + "', '" + this.email + "');";
      db.cnn.exec(query, function(rows, err){
        if(err !== undefined){
          console.log("Erro ao incluir dados de Usuario");
        }
        else{
          console.log("Usuario incluido com sucesso");
        }
      });
    }
    else{
      var query = "UPDATE usuarios SET nome='" + this.nome + "', login='" + this.login + "', senha='" + this.senha + "', email='" + this.email + "' WHERE id='" + this.id + "';"
      db.cnn.exec(query, function(rows, err){
        if(err !== undefined){
          console.log("Erro ao atualizar dados de Usuario");
        }
        else{
          console.log("Usuario atualizado com sucesso");
        }
      });
    }
  };
};


module.exports = Usuario;