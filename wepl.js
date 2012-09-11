var express = require('express');
var app = express();

var global = this;

app.get('/', function(req, res){
  if (req.query.methodVal) {
    app.get(('/' + req.query.methodName), function(req1,res1) {
      res1.send(req.query.methodVal);
    });
    res.send(req.query.methodName + ' was defined.  it returns: ' + req.query.methodVal);
    console.log('responded from methodVal branch');
  }
  else if (req.query.methodBody) {
    with(global) {eval(req.query.methodBody)};
    res.send('<pre>' + req.query.methodBody + " was evaled.");
    console.log('responded from methodBody branch');
  }
  else {
    res.send('welcome to the wepl.');
    console.log('responded from default branch.');
  }
});


app.listen(4000);
console.log('Listening on port 4000');
