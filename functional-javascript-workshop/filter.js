function getShortMessages(messages) {
    var fm = messages.filter(function(m) {
        return m.message.length < 50
    })
    return fm.map(function(m) {
        return m.message
    })
}

module.exports = getShortMessages