"user strict"

function setup(app, controllers) {
  app.get('/api', function (req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  app.get('/api/graylog', function (req, res) {
    controllers.graylogController.searchAbsolute(req, res);
  });
}

exports.setup = setup;