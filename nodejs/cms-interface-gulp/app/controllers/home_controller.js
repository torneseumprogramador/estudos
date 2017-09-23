var HomeController = {
  index: function(request, response, next) {
  	console.log(request.body.name)
    response.render('home/index', { title: 'Interface do CMS' });
  }
};

module.exports = HomeController;
