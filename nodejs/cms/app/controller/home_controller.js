var Usuario = require("../models/usuario");

var HomeController = {
  index: function(request, response, next) {
    response.render('index', { title: 'Express' });
  },
  usuario: function(request, response, next){

  	var usuario = new Usuario();
    usuario.id = 2;
  	usuario.nome = "Joao2";
  	usuario.login = "joao2";
  	usuario.senha = "joao2";
  	usuario.email = "joao2@joao.com.br";
  	usuario.salvar();

    response.send('olá usuario');
  }
};

module.exports = HomeController;
