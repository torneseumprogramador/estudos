////////// código blocante //////////////

// exemplo programação funcional
function resolveProblema(){
  return "sync";
}

function resolveProblema2(){
  return "sync2";
}

function resolveProblema3(){
  return "sync3";
}

var retorno = resolveProblema();
alert(retorno);

var retorno2 = resolveProblema2();
alert(retorno2);

var retorno3 = resolveProblema3();
alert(retorno3);

////////// código assincronos //////////////

function resolveProblema(callback){
  callback.call(null, "async");
}

function resolveProblema2(callback){
  callback.call(null, "async2")
}

function resolveProblema3(callback){
  callback.call(null, "async3")
}

resolveProblema(function(retorno){ 
  setTimeout(function(){
    alert(retorno)
  }, 1000);
});

resolveProblema2(function(retorno2){ 
  alert(retorno2)
});

resolveProblema3(function(retorno3){ 
  alert(retorno3)
});


// exemplo programação orientado a objetos
function Problema(){
  this.resolveProblema = function(){
    
  }

  this.resolveProblema2 = function(){
    
  }

  this.resolveProblema3 = function(){
    
  }
}

var problema = new Problema();
var retorno = problema.resolveProblema();
var retorno2 = problema.resolveProblema2();
var retorno2 = problema.resolveProblema3();

////////// exemplo programação assincrona ////
////////// código não blocante //////////////

// exemplo programação funcional assincrona
function resolveProblema(callback){
  
}

function resolveProblema2(callback){
  
}

function resolveProblema3(callback){
  
}

resolveProblema(function(){

});
resolveProblema2(function(){
  
});
resolveProblema3(function(){
  
});


// exemplo programação orientado a objetos assincrona
function Problema(){
  this.resolveProblema = function(callback){
    
  }

  this.resolveProblema2 = function(callback){
    
  }

  this.resolveProblema3 = function(callback){
    
  }
}

var problema = new Problema();
problema.resolveProblema(function(){
  
});
problema.resolveProblema2(function(){
  
});
problema.resolveProblema3(function(){
  
});


