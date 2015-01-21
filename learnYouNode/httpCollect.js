var http = require('http')
var bl = require('bl')

var url = process.argv[2]

http.get(url, callback)

function callback (response){
  response.pipe(bl(
    function (err, data){
      if (err)
        return console.log("error: "+err)
      data = data.toString()
      console.log(data.length)
      console.log(data)
    }
  ))

  response.on('error', console.error)
}
