function response(res){
  res.send = function(message){
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Length", message.length);
    res.writeHead(200);
    res.end(message);
  }
  res.json_data = function(message){
    message = JSON.stringify(message);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Content-Length", message.length);
    res.writeHead(200);
    res.end(message)
  }
  res.redirect = function(url){
    res.setHeader("location",url);
    res.writeHead(301);
    res.end();
  }
  res.html = function(message){
    res.setHeader("Content-Type", "text/html;charset=utf-8");
    res.writeHead(200);
    res.end(message);
  }
}

module.exports = response;