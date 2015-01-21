var url = require('url')
var http = require('http')

var port = process.argv[2]

console.log('port: '+port)
var server = http.createServer(
  function (req, res){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var date = dateFromUrl(req.url)
    var pathname = url.parse(req.url,true).pathname
    console.log('pathname: '+pathname)

    var result = {}
    if(pathname.indexOf("/api/parsetime")==0){
      result = {'hour': date.getHours(),
                'minute': date.getMinutes(),
                'second': date.getSeconds() }
    } else if (pathname.indexOf ("/api/unix")==0) {
      result =  { "unixtime": date.getTime() }
    }
    res.write(JSON.stringify(result))
    res.end()

  })

//server.listen(port)


function dateFromUrl(requrl){
  var foo = url.parse(requrl, true)
  console.log('foo.query:' + foo.query +"\n\t" +foo.query.iso)
  var date = new Date(foo.query.iso)
  console.log('date: '+date)
  return date
}


var express = require('express');
var app = express();

app.get('/api/parsetime', function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var date = dateFromUrl(req.url)
  var result = {'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds() }
  res.end(JSON.stringify(result))
});

app.get('/api/unixtime', function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var date = dateFromUrl(req.url)
  var result =  { "unixtime": date.getTime() }
  res.end(JSON.stringify(result))
});

app.listen(port)
