var db = require('../../config/db.js');

var Usuario = function(usuario){
  if(usuario !== undefined){
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.login = usuario.login;
    this.senha = usuario.senha;
    this.email = usuario.email;
  }
  else{
    this.id = 0;
    this.nome = "";
    this.login = "";
    this.senha = "";
    this.email = "";
  }

  this.salvar = function(callback){
    if(this.nome === ""){
      console.log("[Modelo:Usuario] Nome de usuário obrigatório");
      callback.call(null, {erro:true, mensagem: "[Modelo:Usuario] Nome de usuário obrigatório"});
      return;
    }

    if(this.login === ""){
      console.log("[Modelo:Usuario] Nome de login obrigatório");
      callback.call(null, {erro:true, mensagem: "[Modelo:Usuario] Nome de login obrigatório"});
      return;
    }

    if(this.senha === ""){
      console.log("[Modelo:Usuario] Nome de senha obrigatório");
      callback.call(null, {erro:true, mensagem: "[Modelo:Usuario] Nome de senha obrigatório"});
      return;
    }

    var query = "";
    if(this.id === 0 || this.id === "" || this.id === undefined){
      query = "INSERT INTO usuarios (nome, login, senha, email) VALUES ('" + this.nome + "', '" + this.login + "', '" + this.senha + "', '" + this.email + "');";
      db.cnn.exec(query, function(rows, err){
        if(err !== undefined && err !== null){
          callback.call(null, {erro:true, mensagem: err.message});
        }
        else{
          callback.call(null, {erro:false});
        }
      });
    }
    else{
      query = "UPDATE usuarios SET nome='" + this.nome + "', login='" + this.login + "', senha='" + this.senha + "', email='" + this.email + "' WHERE id='" + this.id + "';";
      db.cnn.exec(query, function(rows, err){
        if(err !== undefined && err !== null){
          callback.call(null, {erro:true, mensagem: err.message});
        }
        else{
          callback.call(null, {erro:false});
        }
      });
    }
  };
};

Usuario.excluirTodos = function(callback){
  query = "delete from usuarios;";
  db.cnn.exec(query, function(rows, err){
    if(err !== undefined && err !== null){
      callback.call(null, {erro:true, mensagem: err.message});
    }
    else{
      callback.call(null, {erro:false});
    }
  });
};

Usuario.truncateTable = function(callback){
  query = "TRUNCATE usuarios;";
  db.cnn.exec(query, function(rows, err){
    if(err !== undefined && err !== null){
      callback.call(null, {erro:true, mensagem: err.message});
    }
    else{
      callback.call(null, {erro:false});
    }
  });
};

Usuario.todos = function(callback){
  query = "select * from usuarios;";
  db.cnn.exec(query, function(rows, err){
    if(err !== undefined && err !== null){
      callback.call(null, {
        erro:true,
        mensagem: err.message,
        usuarios: []
      });
    }
    else{
      callback.call(null, {
        erro:false,
        usuarios:rows
      });
    }
  });
};

Usuario.buscarPorID = function(id, callback){
  query = "select * from usuarios where id=" + id + ";";
  db.cnn.exec(query, function(rows, err){
    if(err !== undefined && err !== null){
      callback.call(null, {
        erro:true,
        mensagem: err.message,
        usuario: {}
      });
    }
    else{
      if(rows.length > 0){
        callback.call(null, {
          erro:false,
          usuario:rows[0]
        });
      }
      else{
        callback.call(null, {
          erro:false,
          usuario:{}
        });
      }
    }
  });
};

Usuario.excluirPorID = function(id, callback){
  query = "delete from usuarios where id=" + id + ";";
  db.cnn.exec(query, function(rows, err){
    if(err !== undefined && err !== null){
      callback.call(null, {
        erro:true,
        mensagem: err.message
      });
    }
    else{
      callback.call(null, {
        erro:false
      });
    }
  });
};

Usuario.buscarPorNome = function(nome, callback){
  query = "select * from usuarios where nome like '%" + nome + "%';";
  db.cnn.exec(query, function(rows, err){
    if(err !== undefined && err !== null){
      callback.call(null, {
        erro:true,
        mensagem: err.message,
        usuarios: []
      });
    }
    else{
      if(rows.length > 0){
        callback.call(null, {
          erro:false,
          usuarios:rows
        });
      }
      else{
        callback.call(null, {
          erro:false,
          usuarios:[]
        });
      }
    }
  });
};

module.exports = Usuario;