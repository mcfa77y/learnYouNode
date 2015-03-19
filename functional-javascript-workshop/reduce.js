function countWords(inputWords) {
    var result = {}
    inputWords.reduce(function(previousValue, currentValue, index, array) {
        if (result[currentValue]) {
            result[currentValue] += 1
        } else {
            result[currentValue] = 1
        }
    }, result)
    return result
}

module.exports = countWords