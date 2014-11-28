var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var file = process.argv[3]
var server = http.createServer(function (req, res)
  res.writeHead(200, { 'content-type': 'text/plain' })

  var readStream = fs.createReadStream(file)
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });
})

server.listen(port)
