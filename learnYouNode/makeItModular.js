var myModule = require('./filteredLSMod.js');
var fn = process.argv[2];
var filter = process.argv[3];
var buf = myModule(fn,filter, printArray);

function printArray(err, data){
  //console.log("makeItModular/printArray");
  if (err)
    console.log("error in makeItModular at printArray");

  data.forEach(printThings);
}
function printThings(entry){
  console.log(entry);
}
