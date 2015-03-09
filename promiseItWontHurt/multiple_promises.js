var q = require('q')
//1. Construct two promises using Q's defer
var x = q.defer()
var y = q.defer()


// 2. Construct a function "all" that accepts two promises as arguments.
function all(p1, p2){
  // Your function should create an internal promise using Q's defer
  var p3 = q.defer()

  //Your function should create a counter variable with initial value of 0.
  var i = 0, p1Val, p2Val

  var foo =

  // Your function should attach "then" fulfillment handlers to both
  // promises
  p1.then(function(val){
    p1Val = val
    i=i+1;
    if (i==2){
      p3.resolve([p1Val, p2Val])
    }
  }).then(null, p3.reject).done()

  p2.then(function(val){
    p2Val = val
    i=i+1;
    if (i==2){
      p3.resolve([p1Val, p2Val])
    }
  }).then(null, p3.reject).done()

  // and return it!
  //console.log('returning p3'+p3)
  return p3.promise
}


all(x.promise, y.promise).then(console.log).done()

setTimeout(function(){
  x.resolve("PROMISES")
  y.resolve("FTW")
}, 200)

/*
x 1. Construct two promises using Q's defer
2. Construct a function "all" that accepts two promises as arguments.


    and fulfill the function's
   internal promise with an array containing BOTH values
   You should ALSO attach rejection handlers to both promises which both reject
   the internal promise!
3. Pass your two promises into your new function and then attach console.log as
   a fulfillment handler to the promise returned by your function.
4. Attach a function to setTimeout that resolves both of the promises you created
   and passed to your function with the values "PROMISES" and "FTW" respectively.
   Set the timeout delay to 200ms.

TIP: Don't forget to pass the "promise" attribute of your deferreds!
*/
