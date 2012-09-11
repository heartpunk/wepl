var express = require('express');
var util = require('util');
var markdown = require('markdown');

var app = express();

app.engine('jade', require('jade').__express);

var port = process.env.PORT || 3000;
var global = this;

app.get('/', function(req, res){
  if (req.query.methodBody) {
    var result;
    with(global) {result = util.inspect(eval(req.query.methodBody), true, 3)};
    res.render(
      'index.jade',
      {
        code: req.query.methodBody,
        result: result
      }
    );
    console.log('got some code.');
  }
  else {
    demo_code = "Math.exp(10);";
    demo_result = util.inspect(eval(demo_code), true, 3);
    res.render(
      'index.jade',
      {
        code: demo_code,
        result: demo_result
      }
    );
    console.log('main page.');
  }
});


app.listen(port);
console.log('Listening on port ' + port);
