
var http = require('http'),
  fs = require('fs');


fs.readFile('Index.html', function (err, html) {
  if (err) {
    throw err;
  }

  var server = http.createServer(function (request, response) {

    if (request.url === '/') {
      response.setHeader('Content-type', 'text/html');
      response.end(html);
      return;
    }

    fs.readFile('./' + request.url, function (err, data) {
      if (!err) {
        var dotoffset = request.url.lastIndexOf('.');
        var mimetype = dotoffset == -1
          ? 'text/plain'
          : {
            '.html': 'text/html',
            '.ico': 'image/x-icon',
            '.jpg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.css': 'text/css',
            '.js': 'text/javascript',
            '.json': 'application/json'
          }[request.url.substr(dotoffset)];

        mimetype = mimetype ? mimetype : 'text/html';
        response.setHeader('Content-type', mimetype);
        response.end(data);
      } else {
        console.log('file not found: ' + request.url);
        response.writeHead(404, "Not Found");
        response.end();
      }
    });
  });

  server.listen(8000);
});

