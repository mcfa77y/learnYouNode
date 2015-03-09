var q = require('q');
var defer = q.defer();

var invalidJSON = process.argv[2]
function parsePromised(json){

  var promise = q.defer();
  var result = {}
  try{
    result = JSON.parse(json)
  } catch(e){
    promise.reject(e)
  }
  promise.resolve(result)
  return promise.promise
}

parsePromised(invalidJSON).then(null,console.log)


// tries to parse invaldJSON returns a rejected promise with the error
// that rejected promise's value is then printed to the reject function of
// console.log
