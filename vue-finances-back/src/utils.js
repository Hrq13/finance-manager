const jwt = require('jsonwebtoken')

function getUserId (context) {
    const Authorization = context.request.get('authorization')
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const { userID } = jwt.verify(token, process.env.JWT_SECRET)
        return userID
    }

    throw new Error('Not authenticated!')
}

module.exports = {
    getUserId
}