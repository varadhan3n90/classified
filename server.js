var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));
app.set('view engine','vash');


app.get('/',function(req,res){
	res.write('<html><body>Hello world</body></html>');
	res.end();
});

app.listen(3000);