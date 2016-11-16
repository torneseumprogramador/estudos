var Guid = require('guid');
var db = require('../../config/db.js');

var Token = function(token){
  if(token !== undefined){
    this.id = token.id;
    this.token = token.token;
  }
  else{
    this.id = 0;
    this.token = "";
  }

  this.criar = function(callback){
    var token = Guid.raw();
    var query = "INSERT INTO token (token) VALUES ('" + token + "');";
    db.cnn.exec(query, function(rows, err){
      if(err !== undefined && err !== null){
        callback.call(null, {erro:true, mensagem: err.message});
      }
      else{
        callback.call(null, {erro:false, token: token});
      }
    });
  };
};

Token.verificaToken = function(token, callback){
  var query = "select * from token where token = '" + token + "'";
  db.cnn.exec(query, function(rows, err){
    if(err !== undefined && err !== null){
      callback.call(null, {
        tokenValidado: false 
      });
    }
    else{
      callback.call(null, {
        tokenValidado: (rows.length > 0)
      });
    }
  });
};

Token.apagarToken = function(token, callback){
  var query = "delete from token where token = '" + token + "'";
  db.cnn.exec(query, function(rows, err){
    if(err !== undefined && err !== null){
      if(callback !== undefined){
        callback.call(null, {erro:true, mensagem: err.message});
      }
    }
    else{
      if(callback !== undefined){
        callback.call(null, {erro:false});
      }
    }
  });
};

module.exports = Token;