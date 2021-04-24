const jwt = require('jsonwebtoken')

function getUserId (context) {
    const Authorization = context.request.get('authorization')
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '')
        const { userId } = jwt.verify(token, process.env.JWT_SECRET)
        return userId
    }

    throw new Error('Not authenticated!')
}

module.exports = {
    getUserId
}