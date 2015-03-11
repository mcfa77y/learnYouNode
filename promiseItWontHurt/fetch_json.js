var HTTP = require("q-io/http");

HTTP.read("http://localhost:1337").then(
    function(json){
        // content = content.replace("\\\"", '');
        console.log(JSON.parse(json));
        // console.log(eval(content)+ content);
    }
    ).then(null, console.error).done();

