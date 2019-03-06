const bodyParser = require('body-parser'),
	express = require('express'),
	app = express();

app.use(express.static( __dirname + '/public/dist/public' ));  
app.use(bodyParser.json());

require('./server/models/product.js');
require('./server/config/routes.js')(app);
require('./server/config/mongoose.js')();

app.listen(8000, function(){
	console.log("listening on port 8000");
})