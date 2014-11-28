module.exports = function(dir, filter, callback){
  //console.log("filteredLSMod/anon");
  var fs = require('fs');
  var buf = fs.readdir(dir, doCallback);

  function doCallback (err, data){
    //console.log("filteredLSMod/anon/doCallback");
    if (err)
      return callback(err) // early return

    var filteredData = data.filter(isType);
    // all went well, call callback with `null` for the error argument
    callback(null, filteredData)
  }

  function isType(element, index, array){
    //console.log("filteredLSMod/anon/isType");

    //console.log("isType: "+element);
    return String(element).indexOf('.'+filter)>0;
  }
}
