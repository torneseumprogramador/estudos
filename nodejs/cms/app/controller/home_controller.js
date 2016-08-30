var Usuario = require("../models/usuario");

var HomeController = {
  index: function(request, response, next) {
    response.render('index', { title: 'Express' });
  },
  usuario: function(request, response, next){

  	var usuario = new Usuario();

  	console.log(usuario);

    response.send('olá usuario');
  }
}

module.exports = HomeController;
