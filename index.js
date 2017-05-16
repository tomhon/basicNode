var restify = require('restify');

var server = restify.createServer(); 

server.listen(process.env.port || 3978, function () {

    console.log('%s listening to %s', 'makeable' , 'url'); 

});


server.get('/', function (req, res) { 

    res.send('Basic Node Running' )

}); 