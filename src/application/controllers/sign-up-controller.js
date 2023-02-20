const STATUS_CODE = require('../../core/constants/status-codes');
const { createUser } = require('../use-cases/user')

/**
 * 
 * @body { firstName, lastName, email, password }
 */
async function init(request) {

    let data = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email,
        password: request.body.password,
    }

    let result = await createUser(data);
    let response = {}

    if (result) {
        response = {
            statusCode: STATUS_CODE.CREATED,
        }
    }
    else {
        response = {
            statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR
        }
    }

    return response;
}

module.exports = {
    init
}