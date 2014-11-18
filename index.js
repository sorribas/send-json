module.exports = function(res, obj, opts) {
  opts = opts || {};

  if (opts.pretty) opts.space = '    ';

  var json = JSON.stringify(obj, null, opts.space || '');

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Content-Length', Buffer.byteLength(json));
  res.end(json);
};
