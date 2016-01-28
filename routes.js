function routes(){
  var paths = {};
  var set = function(path, handler){
    paths[path] = handler;
  }
  var get = function(path){
    return paths[path];
  }

  return {set: set, get: get};
}

module.exports = routes;