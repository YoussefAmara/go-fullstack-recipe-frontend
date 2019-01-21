var  http = require('http');


var app = require('./app');
var server=http.createServer(app);

app.set('port', (process.env.PORT || 3000));

server.listen(app.get('port'),()=>{
   console.log('Started on port 3000');
});
