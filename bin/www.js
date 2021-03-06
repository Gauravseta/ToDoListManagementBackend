var app=require('../app');

var http=require('http');
var config = require('../config/default');


var portToBeUsed=config.portnumber;

var port=normalizePort(process.env.PORT||portToBeUsed);

app.set('port',port);

var server=http.createServer(app);


server.listen(port);
server.on('error',onerror);


function normalizePort(val){
	var port=parseInt(val,10);

	if(isNaN(port)){
		return val;
	}
	if(port>=0){
		return port;
	}
	return false;
}

function onerror(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
