function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
        // console.log(submittedUsers.length)
        return submittedUsers.every(function(su) {
            return goodUsers.some(function(gu) {
                return gu.id == su.id
            })
        })
    }
}

module.exports = checkUsersValid