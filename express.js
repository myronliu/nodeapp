var http = require('http');
var Response = require('./response');
var Request = require('./request');
var routes = require('./routes');
var middleware = require('./middleware');

var server = function(){
  var route = routes();
  var Middleware = middleware();
  var server = http.createServer(function(req,res){
    Response(res);
    Request(req);
    Middleware.run(req,res);
    if(route.get(req.pathname)){
      route.get(req.pathname)(req,res);
    }else{
      res.send("routes not found");
    }
  });

  var listen = function(port){
    server.listen(port);
    console.log("server listen port: " + port);
  }
  var setroute = function(path, handler){
    route.set(path,handler);
  }
  return {listen:listen, setroute: setroute, use:Middleware.use};
}

module.exports = server;