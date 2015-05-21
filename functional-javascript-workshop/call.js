function duckCount(foo) {
    var args = Array.prototype.slice.call(arguments);
    console.log('\nargs.len: ' + args.length);

    if (foo) {
        console.log('foo: ');
        console.log(foo);
        args = Array.prototype.slice.call(foo);
    }

    var head = args[0];
    if (args.length === 1)
        return;
    // if (arguments.length == 1) {
    //     var tailx = args.slice(1);
    //     // console.log("finish?")
    //     // console.log(head);
    //     // console.log(tailx);

    //     return isDuck(head)
    // }

    var tail = args.slice(1);

    console.log('tail.len: ' + tail.length);
    console.log(tail);
    return console.log("return duckCount: " + (isDuck(head) + duckCount(tail)));

}

function isDuck(object) {
    // console.log("isDuck: object - ");
    // console.log(object);
    if (object.length === 0)
        return 0;

    var isPrototype = Object.getPrototypeOf(object) === Object.prototype;
    var hasQuack = false;
    try {

        hasQuack = object.hasOwnProperty('quack');
    } catch (e) {
        // statements
        //console.log(e);
    }

    if (isPrototype && hasQuack) {
        // console.log("\tisDuck: yes");

        return 1;
    } else {
        // console.log("\tisDuck: no");

        return 0;
    }

}
module.exports = duckCount