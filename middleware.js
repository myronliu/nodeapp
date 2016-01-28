
function middleware(){
  var middlewares = [];

  var use = function(handler){
    middlewares.push(handler);
  }

  var run = function(req,res){
    console.log("test========")
    var index = -1;
    var next = function(){
      index++;
      if(index < middlewares.length){
        middlewares[index](req,res,next);
      }
    }
    next();
  }

  return {use: use, run: run};
}

module.exports = middleware;