var url = require('url');
function request(req){
  req.query={};
  rurl = url.parse(req.url);
  req.pathname = rurl.pathname;
  if(!!rurl.query){  //   '' -> false   !!'ddd'->true
    var q = rurl.query.split('&');
    for(var i = 0; i < q.length; i++){
      if(!q[i]){
        continue;
      }
      var kv = q[i].split('=');
      req.query[kv[0]] = kv[1];
    }
  }
}

module.exports = request;