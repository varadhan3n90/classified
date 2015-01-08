var http = require('http');
var express = require('express');
var app = express();
var controllers = require('./controllers');

app.use(express.static(__dirname+'/public'));
app.set('view engine','vash');


controllers.init(app);

var server = http.createServer(app);
server.listen(3000);