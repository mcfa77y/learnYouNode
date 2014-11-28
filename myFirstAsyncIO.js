var fs = require('fs');
var fn = process.argv[2];
var buf = fs.readFile(fn, 'utf8', callback);
function callback (err, data){
	if(err){
		consile.log("errori "+err);
	} else {
		console.log(data.split('\n').length-1)
	}
}
