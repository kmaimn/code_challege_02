var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//put routes here;
var animals = require('./routes/animals');

app.use(bodyParser.urlencoded({ extended: true}));

//put route app.use here;
app.use('/animals', animals);
//catch all route;
app.get('/*', function(req, res){
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, './public', file));
});

//set my port;
app.set('port', process.env.PORT || 5000);

//set listener - console log message to make sure it works;
app.listen(app.get('port'), function(){
  console.log('Listening on port ', app.get('port'));
});
