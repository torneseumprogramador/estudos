var Usuario = require("../models/usuario");

var HomeController = {
  index: function(request, response, next) {
    response.render('index', { title: 'Express' });
  },
  usuario: function(request, response, next){

  	var usuario = new Usuario();
  	usuario.nome = "Joao"
  	usuario.login = "joao"
  	usuario.senha = "joao"
  	usuario.email = "joao@joao.com.br"
  	usuario.salvar();

    response.send('olá usuario');
  }
}

module.exports = HomeController;
