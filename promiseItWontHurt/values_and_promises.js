var q = require('q');
var defer = q.defer();

function attachTitle(name){
  return "DR. "+name
}

defer.promise.then(attachTitle).then(console.log)

defer.resolve("MANHATTAN")

// resolve first feeds MANHATTAN parameter to the attachTitle fn
// which yields the value 'DR. MANHATTAN' which feeds into console.log
// which eventually prints DR.MANHATTAN to the console
