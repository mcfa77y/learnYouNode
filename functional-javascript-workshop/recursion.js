function reduce(arr, fn, initial) {
    if (arr.length === 0) {
        return initial
    }
    var head = arr[0]
    var tail = arr.slice(1)
    var index = arr.length - (tail.length + 1)
    initial = fn(initial, head, index, arr)
    return reduce(tail, fn, initial)
}

module.exports = reduce