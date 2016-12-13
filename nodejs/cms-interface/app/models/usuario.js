var Usuario = function(usuario){
  if(usuario !== undefined){
    this.id = usuario.id;
    this.nome = usuario.nome;
    this.login = usuario.login;
    this.senha = usuario.senha;
    this.email = usuario.email;
  }
  else{
    this.id = 0;
    this.nome = "";
    this.login = "";
    this.senha = "";
    this.email = "";
  }

  this.salvar = function(callback){
    
  };
};

module.exports = Usuario;