var express = require('./express');
var app = express();

app.use(function(req,res,next){
  console.log("one------------>");
  next();
});

app.use(function(req,res,next){
  console.log("two------------>");
  next();
});

app.setroute('/test', function(req,res){
  res.html('<html><head></head><body><h1>呵呵哒</h1></body></html>');
})

app.setroute('/hello', function(req,res){
  res.send("hello" + req.params["name"]);
})

app.setroute('/home', function(req,res){
  res.json_data({home:"yes"})
})

app.setroute('/go_to_home', function(req,res){
  res.redirect('/home');
})


app.listen(3010);