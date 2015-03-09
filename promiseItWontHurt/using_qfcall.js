var q = require('q');
var defer = q.defer();

var invalidJSON = process.argv[2]


var promise = q.defer()
q.fcall(JSON.parse,invalidJSON).then(null,console.log)

// passes invalidJSON to JSON.parse then catches the error in the then fn
