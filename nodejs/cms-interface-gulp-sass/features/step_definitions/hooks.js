var {defineSupportCode} = require('cucumber');

defineSupportCode(function({After}) {
  After(function() {
    return this.driver.quit();
  });
});