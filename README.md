send-json
=========

Send objects as JSON over http.

Example
-------


```js
var http = require('http');
var sendJson = require('send-json');

var server = http.createServer(function(req, res) {
  sendJson(req, res, {hello: 'world'});
});

server.listen(3000);
```
Or you can just add a `send` function to the http response object like this.

```js
var http = require('http');
var sendJson = require('send-json');

var server = http.createServer(function(req, res) {
  res.send = sendJson.bind(null, req, res);

  res.send({hello: 'world'});
});

server.listen(3000);
```

License
-------

MIT License
