var HTTP = require("q-io/http")

var json = HTTP.read("http://localhost:1337")

console.log(JSON.stringify(json))
