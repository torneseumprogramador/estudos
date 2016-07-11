var Usuario = require("../models/usuario");

var UsuariosController = {
  todos: function(request, response, next) {
    if(request.query.nome !== undefined){
      Usuario.buscarPorNome(request.query.nome, function(retorno){
        if(retorno.erro){
          response.status(500).send({
            erro:'Erro ao buscar usuarios por nome (' + request.query.nome + ') - (' + retorno.mensagem + ')'
          });
        }
        else{
          response.status(200).send(retorno.usuarios);
        }
      });
    }
    else{
      Usuario.todos(function(retorno){
        if(retorno.erro){
          response.status(500).send({
            erro:'Erro ao buscar usuarios (' + retorno.mensagem + ')'
          });
        }
        else{
          response.status(200).send(retorno.usuarios);
        }
      });
    }
  },
  porId: function(request, response, next){
    Usuario.buscarPorID(request.params.id, function(retorno){
      if(retorno.erro){
        response.status(500).send({
          erro:'Erro ao buscar usuario por id (' + retorno.mensagem + ')'
        });
      }
      else{
        response.status(200).send(retorno.usuario);
      }
    });
  },
  criar: function(request, response, next){
    var usuario = new Usuario();
    usuario.nome = request.body.nome;
    usuario.login = request.body.login;
    usuario.senha = request.body.senha;
    usuario.email = request.body.email;
    usuario.salvar(function(retorno){
      if(retorno.erro){
        response.status(500).send({
          erro:'Erro ao cadastrar usuario (' + retorno.mensagem + ')'
        });
      }
      else{
        response.status(201).send({mensagem: "Usuário criado com sucesso"});
      }
    })
  }
};

module.exports = UsuariosController;
