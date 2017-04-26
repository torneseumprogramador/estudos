var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  Given('the initial page', function (callback) {
    this.driver.get('http://local.com.br:3001/');
    callback();
  });

  Given('I have de content table in body', function (callback) {
    this.driver.findElement({css:'body'})
    callback();
  });

  Then('I should have text {arg1:stringInDoubleQuotes} on page', function (title, callback) {
    this.driver.findElements({css: 'h1'}).then(function(h1){
      h1[0].getAttribute("innerText").then(function(text) {
        if (text === title) {
          callback();
        } else {
          callback(new Error("The title of body is different, body:(" + text + "), test:(" + title + ")"));
        }
      });
    });
  });
});


// var seleniumWebdriver = require('selenium-webdriver');
// var {defineSupportCode} = require('cucumber');

// defineSupportCode(function({Given, When, Then}) {

//   Given('the initial page', function (callback) {
//     this.driver.get('http://local.com.br:3001/');
//     callback();
//   });

//   Given('I have de content table in body', function (callback) {
//     this.driver.findElement({css:'body'})
//     callback();
//   });

//   Then('I should have text {arg1:stringInDoubleQuotes} on page', function (title, callback) {
//     this.driver.findElements({css: 'h1'}).then(function(titles){
//       titles[0].getAttribute("innerText").then(function(text) {
//         if (text === title) {
//           callback();
//         } else {
//           callback(new Error("The title of body is different, body:(" + text + "), test:(" + title + ")"));
//         }
//       });
//     });
//   });

// });

// //=========== Exemplo ============
// // this.driver.get('http://local.com.br:3000/');
// // this.driver.findElement({css:'#lupa a img'}).click();
// // this.driver.findElement({css:'form input#aula'}).sendKeys('aula 1');
// // this.driver.findElement({css:'form input.button'}).click().then(function(e){
// //   // this.driver.wait(function(){}, 50000);
// //   this.driver.findElements({css: '.video a'}).then(function(links){
// //     links[0].getAttribute("innerHTML").then(function(html) {
// //       if (html.toLowerCase().indexOf("aula 1") != -1) {
// //         callback();
// //       } else {
// //         callback(new Error("A aula 1 não foi encontrada"));
// //       }
// //     });
// //   });
// // });