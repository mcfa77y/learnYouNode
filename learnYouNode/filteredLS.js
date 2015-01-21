var fs = require('fs');
var fn = process.argv[2];
var filter = process.argv[3];
var buf = fs.readdir(fn, callback);
function callback (err, data){
		var foo = data.filter(isType);
		foo.forEach(printThings);
}

function isType(element, index, array){
  //console.log("isType: "+element);
  return String(element).indexOf('.'+filter)>0;
}

function printThings(entry){
  console.log(entry);
}
