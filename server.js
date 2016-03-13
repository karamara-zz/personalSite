var express= require('express'),
path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(__dirname));
// require('./nodemailer.js');

app.set('port', (process.env.PORT || 8000));
app.listen(app.get('port'), function(){
	console.log('listening the port : 8000')
})