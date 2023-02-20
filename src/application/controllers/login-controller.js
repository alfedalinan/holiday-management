const { authenticate } = require('../use-cases/user');
const STATUS_CODE = require('../../core/constants/status-codes');

/**
 * 
 * @body { email, password} request 
 */
async function init(request) {
    
    let email = request.body.email;
    let password = request.body.password;

    let token = await authenticate(email, password);
    
    let result = {};

    if (token) {
        result = {
            statusCode: STATUS_CODE.OK,
            data: {
                token
            }
        }
    }
    else {
        result = {
            statusCode: STATUS_CODE.UNAUTHORIZED,
            data: {}
        }
    }
    
    return result;
}

module.exports = {
    init
}