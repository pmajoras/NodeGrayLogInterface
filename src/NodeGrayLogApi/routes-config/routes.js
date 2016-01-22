"user strict"

function setup(app, controllers) {
  app.get('/api', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  app.get('/api/graylog', controllers.graylogController.searchAbsolute);
}

exports.setup = setup;