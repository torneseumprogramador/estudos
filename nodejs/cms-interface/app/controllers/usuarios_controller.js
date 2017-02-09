Usuario = require("../models/usuario");

var UsuariosController = {
  index: function(request, response, next) {
    Usuario.todos(function(usuarios){
      response.render('usuarios/index', { 
        title: 'Trazer os dados da API',
        usuarios: usuarios
      });
    });
  },
  novo: function(request, response, next) {
    var erro = request.query.erro;
    if(erro === undefined){
      erro = "";
    }
    response.render('usuarios/novo', {erro: erro});
  },
  cadastrar: function(request, response, next) {
    var usuario = new Usuario();
    usuario.nome = request.body.nome;
    usuario.login = request.body.login;
    usuario.senha = request.body.senha;
    usuario.email = request.body.email;
    usuario.salvar(function(retorno){
      if(retorno.erro){
        response.redirect('/usuarios/novo?erro=' + retorno.mensagem);
      }
      else{
        response.redirect('/usuarios');
      }
    });
  }
};

module.exports = UsuariosController;
