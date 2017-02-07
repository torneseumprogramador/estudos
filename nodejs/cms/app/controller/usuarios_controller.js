var Usuario = require("../models/usuario");
var Token = require("../models/token");

var UsuariosController = {
  head: function(request, response, next){
    new Token().criar(function(retorno){
      response.header('auth_token', retorno.token);
      response.status(204).send("");
    });
  },
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
        if(retorno.usuario.nome !== undefined){
          response.status(200).send(retorno.usuario);
        }
        else{
          response.status(404).send({mensagem: "Usuario não encontrado"});
        }
      }
    });
  },
  criar: function(request, response, next){
    var token = request.headers.auth_token;
    Token.verificaToken(token, function(retorno){
      if(retorno.tokenValidado){

        Token.apagarToken(token);

        if(request.body.nome === undefined){
          response.status(400).send({
            erro:'Erro ao cadastrar usuario o nome precisa estar preenchido.'
          });
          return;
        }

        var usuario = new Usuario();
        usuario.nome = request.body.nome;
        usuario.login = request.body.login;
        usuario.senha = request.body.senha;
        usuario.email = request.body.email;
        usuario.salvar(function(retorno){
          if(retorno.erro){
            response.status(400).send({
              erro:'Erro ao cadastrar usuario (' + retorno.mensagem + ')'
            });
          }
          else{
            response.status(201).send({mensagem: "Usuário criado com sucesso"});
          }
        });
      }
      else{
        response.status(401).send({
          erro:'Token inválido, você não tem autorização de acessar esta API'
        });
      }
    });
  },
  atualizar: function(request, response, next){
    var token = request.headers.auth_token;
    Token.verificaToken(token, function(retorno){
      if(retorno.tokenValidado){

        Token.apagarToken(token);

        Usuario.buscarPorID(request.body.id, function(retorno){
          if(retorno.usuario.id === undefined){
            response.status(400).send({
              erro:'Erro ao atualizar, id de usuario não encontrado'
            });
          }
          else{
            var usuario = new Usuario();
            usuario.id = request.body.id;
            usuario.nome = request.body.nome;
            usuario.login = request.body.login;
            usuario.senha = request.body.senha;
            usuario.email = request.body.email;
            usuario.salvar(function(retorno){
              if(retorno.erro){
                response.status(500).send({
                  erro:'Erro ao atualizar usuario (' + retorno.mensagem + ')'
                });
              }
              else{
                response.status(200).send({mensagem: "Usuário atualizado com sucesso"});
              }
            });
          }
        });
      }
      else{
        response.status(401).send({
          erro:'Token inválido, você não tem autorização de acessar esta API'
        });
      }
    });
  },
  atualizarPorPatch: function(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS, PATCH');
    response.header('Access-Control-Allow-Headers', 'Content-Type');

    var token = request.headers.auth_token;
    Token.verificaToken(token, function(retorno){
      if(retorno.tokenValidado){

        Token.apagarToken(token);

        Usuario.buscarPorID(request.params.id, function(retorno){
          if(retorno.usuario.id === undefined){
            response.status(400).send({
              erro:'Erro ao atualizar, id de usuario não encontrado'
            });
          }
          else{
            var usuario = new Usuario(retorno.usuario);

            if(request.body.nome !== undefined && request.body.nome !== ""){
              usuario.nome = request.body.nome;
            }

            if(request.body.login !== undefined && request.body.login !== ""){
              usuario.login = request.body.login;
            }

            if(request.body.senha !== undefined && request.body.senha !== ""){
              usuario.senha = request.body.senha;
            }

            if(request.body.email !== undefined && request.body.email !== ""){
              usuario.email = request.body.email;
            }

            usuario.salvar(function(retorno){
              if(retorno.erro){
                response.status(500).send({
                  erro:'Erro ao atualizar usuario (' + retorno.mensagem + ')'
                });
              }
              else{
                response.status(200).send({mensagem: "Usuário atualizado com sucesso"});
              }
            });
          }
        });
      }
      else{
        response.status(401).send({
          erro:'Token inválido, você não tem autorização de acessar esta API'
        });
      }
    });
  },
  excluirUsuario: function(request, response, next){
    var token = request.headers.auth_token;
    Token.verificaToken(token, function(retorno){
      if(retorno.tokenValidado){

        Token.apagarToken(token);

        Usuario.excluirPorID(request.params.id, function(retorno){
          if(retorno.erro){
            response.status(500).send({
              erro:'Erro ao excluir usuario (' + retorno.mensagem + ')'
            });
          }
          else{
            response.status(204).send("");
          }
        });
      }
      else{
        response.status(401).send({
          erro:'Token inválido, você não tem autorização de acessar esta API'
        });
      }
    });
  },
  options: function(request, response, next){
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS, PATCH');
    response.header('Access-Control-Allow-Headers', 'Content-Type');
    response.status(204).send("");
  }
};

module.exports = UsuariosController;
