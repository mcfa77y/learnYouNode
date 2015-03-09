var q = require('q');
var defer = q.defer();


function throwMyGod(){
  throw new Error("OH NOES")
}

function iterate(x){
  console.log(x)
  return x+1
}

q.fcall(iterate,1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null,console.log)
