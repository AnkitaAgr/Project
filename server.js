 var	express 	= require('express'),
 		app			= express(),
 		bodyParser	= require('body-parser'),
 		mongoose	= require('mongoose'),
 		employeesController = require('./server/controllers/employees-controller');

 mongoose.connect('mongodb://localhost:27017/mean-demo');

 app.use(bodyParser());

 app.get('/', function(req, res) {
 	res.sendfile(__dirname + '/client/views/index.html');
 });

 app.use('/js', express.static(__dirname + '/client/js'));

 app.post('/api/employees', employeesController.create);
 app.get('/api/employees', employeesController.list);

 app.listen(3000, function() {
 	console.log('I\'m Listening...');
 }) 