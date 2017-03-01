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
  editar: function(request, response, next) {

    new Usuario({id:request.params.id}).buscar(function(usuario){

      if(usuario.erro !== undefined){
        response.redirect('/usuarios/novo?erro=' + usuario.mensagem);
      }
      else{
        response.render('usuarios/alterar', { 
          usuario: usuario
        });
      }
    });
  },
  atualizar: function(request, response, next) {
    var usuario = new Usuario();
    usuario.id = request.params.id;
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
  },
  excluir: function(request, response, next) {
    var usuario = new Usuario();
    usuario.id = request.params.id;
    usuario.excluir(function(retorno){
      if(retorno.erro){
        response.redirect('/usuarios/novo?erro=' + retorno.mensagem);
      }
      else{
        response.redirect('/usuarios');
      }
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
