var fs = require('fs');
var fn = process.argv[2];
var buf = fs.readFileSync(fn);
console.log(buf.toString().split('\n').length-1)

