var q = require('q');
var defer = q.defer();

defer.promise.then(
  console.log,
  console.log)

setTimeout(defer.resolve, 300,'I FIRED')
setTimeout(defer.reject, 350,'I DID NOT FIRE')
