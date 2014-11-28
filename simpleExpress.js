var express = require('express')
var app = express()
var cors = require('cors')

var whitelist = ['http://example1.com', 'http://example2.com'];
var corsOptions = {
  origin: function(origin, callback){
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted)
  }
};


app.get('/getSequence', cors(corsOptions), function (req, res) {
  var data = {"sequence":"gtagtagtagtagatgggtatatatatatagatagtg","sequenceLength":37,"features":[{"name":"CDS","index":0,"length":1},{"name":"Promotor1","index":28,"length":1},{"name":"Promotor1","index":28,"length":1}]}
  res.send(data)
})
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})