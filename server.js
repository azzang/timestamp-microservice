var http = require('http');
var moment = require('moment');

var server = http.createServer(function(req, res) {
  var date = moment.utc(req.url.slice(1), ['MMMM%20D,%20YYYY', 'X'], true);
  var data = {
    'natural': null,
    'unix': null
  };

  res.setHeader('Content-Type', 'application/json');
  if (date.isValid()) {
    res.statusCode = 200;
    data.natural =  `${moment.months()[date.month()]} ${date.date()}, ${date.year()}`;
    data.unix = date.unix();
  } else {
    res.statusCode = 400;
    res.statusMessage = 'Invalid date. See github.com/azzang/timestamp-microservice for formatting rules.';
  }

  res.end(JSON.stringify(data, null, 3));
});

server.listen(8000);

module.exports = server;
