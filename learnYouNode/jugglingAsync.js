var http = require('http')
var bl = require('bl')

var urls = [process.argv[2] ,process.argv[3], process.argv[4]]
var dict = {}
var i = 0
urls.forEach(function (entry){
  http.get(entry, callback(i))
  i+=1
})
function finished(){
  for (j=0; j<Object.keys(dict).length; j++){
    console.log(dict[j])
  }
}
//http.get(urls[0],callback)

function callback (index){
  return function(response){
    response.pipe(bl(
      function (err, data){
        if (err)
          return console.log("error: "+err)
        data = data.toString()
        dict[index]=data;

        if(Object.keys(dict).length==3){
          finished()
        }
        //console.log(index + ": " +"\n"+dict[index])
      }
    ))
  }
}
