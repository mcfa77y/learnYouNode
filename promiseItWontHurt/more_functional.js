var HTTP = require('q-io/http')
var _ = require('lodash')
    // HTTP.read('http://localhost:7000/')
    // .then(
    //     function(id){
    //         return HTTP.read('http://localhost:7001/'+id)
    //     })
    // .then(
    //     function(json){
    //         console.log(JSON.parse(json))
    //     })
    // .fail(function (error) {
    //     console.log('error occured:\n\t'+error)
    // }).done()



var getId = function() {
    // console.log('getId')
    return HTTP.read('http://localhost:7000/')

}
var getUser = function(idPromise) {
    return idPromise.then(function(id) {
        // console.log('id: ' + id)
        return HTTP.read('http://localhost:7001/' + id)
    })
}

var composite = _.flowRight(getUser, getId)

var readUser = function(userJsonPromise) {
    userJsonPromise.then(function(json) {
        console.log(JSON.parse(json))
    })

}

var foo = _.bind(readUser, null, _)
foo(composite())