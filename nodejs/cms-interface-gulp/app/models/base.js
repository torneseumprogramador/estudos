var request = require("request");
var NodeCache = require( "node-cache" );

var myCache = new NodeCache();

var redis = require("redis");
var clientRedis = redis.createClient();

clientRedis.on("error", function (err) {
    console.log("Erro ao conectar no redis " + err);
});


// var segundos = 30;
// clientRedis.set('teste', 'value!', 'EX', segundos);

// clientRedis.get("teste", function(err, reply) {
//     console.log(reply);
// });

// clientRedis.set('teste', 'value!', 'EX', segundos, function( err, success ){
//   if( !err && success ){
//     console.log('value!');
//   }
//   else{
//     console.log("erro ao adicionar no cache");
//   }
// });



var Base = function(){};
Base.prototype.baseHost = "http://localhost:3000";

Base.prototype.excluir = function(callback){
  var id = this.id;
  var restName = this.restName;
  var baseHost = this.baseHost;
  request.head(baseHost + "/" + restName + ".json", function(){
    token = this.response.headers.auth_token;
    if(id === "" || id === undefined || id === 0){
      callback({
        erro: true,
        mensagem: "Id para exclusão obrigatório"
      });
    }
    else{
      request.delete({
        url: baseHost + "/" + restName + "/" + id + ".json", 
        headers: {'auth_token': token}, 
      }, 
      function(error, response, body) {
        if(response.statusCode >= 200 && response.statusCode <= 299){
          callback({
            erro: false
          });
        }
        else{
          var json = JSON.parse(response.body);
          callback({
            erro: true,
            mensagem: json.erro
          });
        }
      });
    }
  });
}

Base.prototype.salvar = function(callback){
  var data = this;
  var restName = this.restName;
  var baseHost = this.baseHost;
  request.head(baseHost + "/" + restName + ".json", function(){
    token = this.response.headers.auth_token;
    if(data.id === "" || data.id === undefined || data.id === 0){
      request.post({
        url: baseHost + "/" + restName + ".json", 
        headers: {'auth_token': token}, 
        form: data
      }, 
      function(error, response, body) {
        if(response.statusCode == 201){
          callback({
            erro: false
          });
        }
        else{
          var json = JSON.parse(response.body);
          callback({
            erro: true,
            mensagem: json.erro
          });
        }
      });
    }
    else{
      request.put({
        url: baseHost + "/" + restName + ".json", 
        headers: {'auth_token': token}, 
        form: data
      }, 
      function(error, response, body) {
        if(response.statusCode >= 200 && response.statusCode <= 299){
          callback({
            erro: false
          });
        }
        else{
          var json = JSON.parse(response.body);
          callback({
            erro: true,
            mensagem: json.erro
          });
        }
      });
    }
  });
};

Base.prototype.buscar = function(callback){
  var id = this.id;
  var restName = this.restName;
  var baseHost = this.baseHost;
  var key = "cache-" + this.restName + "-" + id;

  // myCache.flushAll();
  // myCache.del(key);

  clientRedis.get(key, function(err, value) {
  // myCache.get(key, function( err, value ){
    if( !err ){
      if(value != undefined){
        value = JSON.parse(value)
        callback(value);
        return;
      }
    }

    request.head(baseHost + "/" + restName + ".json", function(){
      token = this.response.headers.auth_token;
      request.get({
        url: baseHost + "/" + restName + "/" + id + ".json", 
        headers: {'auth_token': token}
      }, 
      function(error, response, body) {
        if(response.statusCode == 200){
          var value = response.body;
          var segundos = 1;
          clientRedis.set(key, value, 'EX', segundos, function( err, success ){
          // myCache.set( key, value, segundos, function( err, success ){
            if( !err && success ){
              var value = JSON.parse(response.body);
              callback(value);
            }
            else{
              callback({
                erro: true,
                mensagem: "erro ao adicionar no cache"
              });
            }
          });
        }
        else{
          var json = JSON.parse(response.body);
          callback({
            erro: true,
            mensagem: json.erro
          });
        }
      });
    }); 
  });

};

Base.prototype.todos = function(callback){
  request.get(this.baseHost + "/" + this.restName + ".json", function(error, response, body) {
    var json = JSON.parse(response.body);
    if(response.statusCode == 200){
      callback(json);
    }
    else{
      callback({
        erro: true,
        mensagem: json.erro
      });
    }
  });
};

module.exports = Base;