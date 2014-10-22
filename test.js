var test = require('tape');
var request = require('request');
var http = require('http');
var sendJson = require('./');

http.createServer(function(req, res) {
  sendJson(req, res, {hello: 'world'});
}).listen(3456);

test('basic', function(t) {
  request('http://localhost:3456', function(err, res) {
    t.ok(!err);
    t.equal(res.statusCode, 200);
    var obj = JSON.parse(res.body);
    t.equal(obj.hello, 'world')
    t.end();
  });
});

test('end', function(t) {
  t.end();
  process.exit();
});
