const jwt = require("jsonwebtoken");
const STATUS_CODE = require("../../core/constants/status-codes");
const config = require('../../shared/config');

const verifyUser = (request, response, next) => {

    if (!('authorization' in request.headers)) {
        response.status(STATUS_CODE.UNAUTHORIZED).json({
            data: {
                message: 'Missing required headers (Authorization).'
            }
        });
        response.end();
    }
    else if (('authorization' in request.headers) && request.headers.authorization !== '') {

        var token = request.headers.authorization.trim();

        try {
            var payload = jwt.verify(token, config.TOKEN_SECRET);
            
            request.headers['claims'] = payload;
            return next();
        }
        catch (error) {
            console.log(error);
            response.status(STATUS_CODE.UNAUTHORIZED);
            response.end();
        }

    }
    else {
        response.status(STATUS_CODE.UNAUTHORIZED);
        response.end();
    }

}

module.exports = verifyUser;