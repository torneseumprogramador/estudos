var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  var tituloNovoCadastro = undefined;
  var tituloAlteradoCadastro = undefined;
  var idExclusao = undefined;

  Given('that I am in the registration page {arg1:stringInDoubleQuotes}', function (url, callback) {
    //this.driver.sleep(800);
    this.driver.get(url);
    callback();
  });

  Given('click on the new button', function (callback) {
    //this.driver.sleep(800);
    this.driver.findElement({css:'#novo-registro'}).then(function(element) {
      element.click();
      callback();
    });
  });
  
  Given('fill in the field {arg1:stringInDoubleQuotes} with {arg2:stringInDoubleQuotes}', function (campo, valor, callback) {
    //this.driver.sleep(800);
    if(campo === "nome"){
      tituloNovoCadastro = valor + " - " + new Date().toString();
      valor = tituloNovoCadastro;
    }

    this.driver.findElement({css:'input[name="' + campo + '"]'}).sendKeys(valor);
    callback();
  });

  Given('click the save button', function (callback) {
    //this.driver.sleep(800);
    this.driver.findElement({css:'input[type="submit"]'}).then(function(element) {
      element.click();
      callback();
    });
  });

  Then('I must see the new register', function (callback) {
    //this.driver.sleep(800);
    this.driver.findElement({css:'tr:last-child td:nth-child(2)'}).then(function(element) {
      element.getText().then(function(textValue){
        if(tituloNovoCadastro !== textValue){
          throw "Register not found, register should be = (" + tituloNovoCadastro + "), and return = (" + textValue + ") ";
        }
        callback();
      });
    });
  });

  Given('select a user', function (callback) {
    //this.driver.sleep(800);
    this.driver.findElement({css:'tr:nth-child(2) td:nth-child(6) input'}).then(function(element) {
      element.click();
      callback();
    });
  });

  Given('change the field {arg1:stringInDoubleQuotes} with {arg2:stringInDoubleQuotes}', function (campo, valor, callback) {
    //this.driver.sleep(800);
    if(campo === "nome"){
      tituloAlteradoCadastro = valor + " - " + new Date().toString();
      valor = tituloAlteradoCadastro;
    }
    var cucumber = this;
    cucumber.driver.findElement({css:'input[name="' + campo + '"]'}).clear().then(function(){
      cucumber.driver.findElement({css:'input[name="' + campo + '"]'}).sendKeys(valor);
      callback();
    });
  });

  Then('I must see the user changes', function (callback) {
    //this.driver.sleep(800);
    this.driver.findElement({css:'tr:nth-child(2) td:nth-child(2)'}).then(function(element) {
      element.getText().then(function(textValue){
        if(tituloAlteradoCadastro !== textValue){
          throw "Register not found on change scenario, register should be = (" + tituloAlteradoCadastro + "), and return = (" + textValue + ") ";
        }
        callback();
      });
    });
  });

  Given('select a user and clique em delete', function (callback) {
    //this.driver.sleep(800);
    var cucumber = this;
    this.driver.findElement({css:'tr:last-child td:nth-child(1)'}).then(function(element) {
      element.getText().then(function(textValue){
        idExclusao = textValue;
        cucumber.driver.findElement({css:'tr:last-child td:nth-child(7) input'}).then(function(element) {
          element.click();
          cucumber.driver.switchTo().alert().then(function(alert){
            alert.accept()
            callback();
          });
        });
      });
    });
  });

  Then('I don\'t have seen him anymore', function (callback) {
    //this.driver.sleep(800);
    this.driver.findElement({css:'tr:last-child td:nth-child(1)'}).then(function(element) {
      element.getText().then(function(textValue){
        if(idExclusao === textValue){
          throw "Register with ID = (" + idExclusao + ") should be deleted";
        }
        callback();
      });
    });
  });

});