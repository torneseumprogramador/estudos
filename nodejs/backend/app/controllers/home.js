var Pessoa = require('../models/pessoa');

var homeController = {
  login: function(request, response, next) {
    response.render('login', { 
      title: 'login do usuário'
    });
  },
  fazer_login: function(request, response, next) {

    if(request.body.usuario != "" && request.body.usuario != undefined){
      if(request.body.senha != "" && request.body.senha != undefined){
        if(request.body.usuario == "didox" && request.body.senha == "didox"){
          response.cookie('autenticado', '1', { httpOnly: true });
          response.redirect("/");
          return;
        }
      }
    }

    response.send("Usuario não autorizado", 401);
  },
  verifica_autenticado: function(request, response){
    if(request.cookies == undefined || request.cookies.autenticado == undefined){
      response.redirect("/login");
      return false;
    }

    return true;
  },
  index: function(request, response, next) {
    if(!homeController.verifica_autenticado(request, response)){
      return;
    }
    

    console.log(" ============== cookie ============");


    // 1 milliseconds
    // 30 segundos = 30000
    // 1 minuto  = 60000
    // 10 minuto  = 600000
    response.cookie('didox', 'valor1', { maxAge: 600000, httpOnly: true });
    console.log(request.cookies.didox)

    Pessoa.todos(function(pessoas) {
      response.render('index', { 
        title: 'Node.js com framework express',
        pessoas: pessoas
      });
    });
  },
  pessoas: function(request, response, next) {
    if(!homeController.verifica_autenticado(request, response)){
      return;
    }

    console.log(" ============== ler cookie ============");

    console.log(request.cookies.didox)

    //console.log(" ============== ler cookie ============");
    //response.clearCookie('didox');

    //cliente cookie
    //http://www.w3schools.com/js/js_cookies.asp

    if(request.query.cpf){
      Pessoa.buscar(request.query.cpf, function(pessoa) {
        if (pessoa == null) { 
          console.log("Pessoa não encontrada");
          response.send({});
        }
        else{
          response.send(pessoa);
        }
      });
    }
    else if(request.query.nome){
      Pessoa.buscarPorNome(request.query.nome, function(pessoas) {
        response.send(pessoas);
      });
    }
    else{
      Pessoa.todos(function(pessoas) {
        response.send(pessoas);
      });
    }
  },
  alterar: function(request, response, next) {
    if(!homeController.verifica_autenticado(request, response)){
      return;
    }

    Pessoa.buscar(request.query.cpf, function(pessoa) {
      if (pessoa == null) { 
        console.log("Pessoa não encontrada");
        response.render('alterar', {'pessoa': {}})
      }
      else{
        response.render('alterar', {'pessoa': pessoa})
      }
    });
  },
  alterar_pessoa_service: function(request, response, next) {
    var pessoa = new Pessoa();

    pessoa.cpf        = request.body.cpf;
    pessoa.nome       = request.body.nome;
    pessoa.sobrenome  = request.body.sobrenome;
    pessoa.telefone   = request.body.telefone;
    pessoa.endereco   = request.body.endereco;

    pessoa.salvar(function(){
      response.send({});
    }, request.query.cpfAterar)
  },
  alterar_pessoa: function(request, response, next) {
    var pessoa = new Pessoa();

    pessoa.cpf        = request.body.cpf;
    pessoa.nome       = request.body.nome;
    pessoa.sobrenome  = request.body.sobrenome;
    pessoa.telefone   = request.body.telefone;
    pessoa.endereco   = request.body.endereco;

    pessoa.salvar(function(){
      response.redirect("/");
    }, request.query.cpfAterar)
  },
  excluir: function(request, response, next) {
    if(!homeController.verifica_autenticado(request, response)){
      return;
    }

    var pessoa = new Pessoa();
    pessoa.cpf = request.query.cpf;
    pessoa.excluir(function(){
      response.redirect("/");
    })
  },
  excluir_service: function(request, response, next) {
    var pessoa = new Pessoa();
    pessoa.cpf = request.query.cpf;
    pessoa.excluir(function(){
      response.send({});
    })
  },
  pesquisar: function(request, response, next) {
    if(!homeController.verifica_autenticado(request, response)){
      return;
    }
    
    Pessoa.buscarPorNome(request.query.nome, function(pessoas) {
      response.render('index', { 
        title: 'Pesquisando em arquivos', 
        pessoas: pessoas
      });
    });
  },
  ajax_test_html: function(request, response, next) {
    response.render('html-teste');
  },
  estados: function(request, response, next) {
    response.send([
      {'SP': 'São Paulo'},
      {'RJ': 'Rio de Janeiro'},
      {'BH': 'Belo Horizonte'}
    ])
  },
  cidades: function(request, response, next) {
    var cidades_estados = [
      {'SP': [
        'Álvares Florence',
        'Aguaí',
        'Águas da Prata'
      ]},
      {'RJ': [
        'Aperibé',
        'Areal',
        'Armação dos Búzios',
      ]},
      {'BH': [
        'Abre Campo',
        'Açucena',
        'Abaeté'
      ]}
    ]

    if(request.query.estado != undefined && request.query.estado != ""){
      var cidades = []

      for(var i=0; i<cidades_estados.length; i++){
        var estadoRequest = request.query.estado.toUpperCase();
        if(cidades_estados[i][estadoRequest] != undefined){
          cidades = cidades_estados[i][estadoRequest];
        }
      }

      if(cidades == []){
        cidades = [
          'Álvares Florence',
          'Aguaí',
          'Águas da Prata',
          'Aperibé',
          'Areal',
          'Armação dos Búzios',
          'Abre Campo',
          'Açucena',
          'Abaeté'
        ]
      }
      
      response.send(cidades)
    }
    else{
      response.send([
        'Álvares Florence',
        'Aguaí',
        'Águas da Prata',
        'Aperibé',
        'Areal',
        'Armação dos Búzios',
        'Abre Campo',
        'Açucena',
        'Abaeté'
      ]);
    }
  },
  cadastrar_pessoa_service: function(request, response, next) {
    var pessoa = new Pessoa();

    pessoa.cpf        = request.body.cpf;
    pessoa.nome       = request.body.nome;
    pessoa.sobrenome  = request.body.sobrenome;
    pessoa.telefone   = request.body.telefone;
    pessoa.endereco   = request.body.endereco;

    pessoa.salvar(function(){
      response.send({});
    });
  },
  cadastrar_pessoa: function(request, response, next) {
    var pessoa = new Pessoa();

    pessoa.cpf        = request.body.cpf;
    pessoa.nome       = request.body.nome;
    pessoa.sobrenome  = request.body.sobrenome;
    pessoa.telefone   = request.body.telefone;
    pessoa.endereco   = request.body.endereco;

    pessoa.salvar(function(){
      response.redirect("/");
    });
  }
}


module.exports = homeController;
