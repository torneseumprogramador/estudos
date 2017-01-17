Usuario = require("../models/usuario");

var UsuariosController = {
  index: function(request, response, next) {
    Usuario.todos(function(usuarios){
      response.render('usuarios/index', { 
        title: 'Trazer os dados da API',
        usuarios: usuarios
      });
    });
  }
};

module.exports = UsuariosController;
