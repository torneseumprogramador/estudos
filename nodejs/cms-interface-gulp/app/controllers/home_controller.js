var HomeController = {
  index: function(request, response, next) {
    response.render('home/index', { title: 'Interface do CMS' });
  }
};

module.exports = HomeController;
