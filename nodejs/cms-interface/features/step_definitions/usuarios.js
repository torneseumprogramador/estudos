var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  Given('that I am in the registration page {arg1:stringInDoubleQuotes}', function (url, callback) {
    this.driver.get(url);
    callback();
  });

  Given('click on the new button', function (callback) {
    this.driver.findElement({css:'#novo-registro'}).then(function(element) {
      element.click();
    });
  });

  Given('fill in the field name {arg1:stringInDoubleQuotes}', function (nome, callback) {
    this.driver.findElement({css:'#nome'}).sendKeys(nome);
    callback();
  });

});