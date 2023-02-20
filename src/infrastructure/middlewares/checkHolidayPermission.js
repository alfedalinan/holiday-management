const STATUS_CODE = require("../../core/constants/status-codes");
const mutationMethods = ['POST', 'PATCH', 'PUT', 'DELETE'];

const checkHolidayPermission = (request, response, next) => {

    let claims = request.headers.claims;

    if (claims.isAdmin == 1) {
        next();
    }
    else {
        
        if (mutationMethods.includes(request.method)) {

            switch (true) {
                case (request.url.startsWith('/save-holiday')):

                    if (request.body.userId === claims.id) {
                        next();
                    }
                    else {
                        response.status(STATUS_CODE.FORBIDDEN).json({
                                message: "Operation is not permitted for current user."
                        });
                        response.end();
                    }

                    break;
                case (request.url.startsWith('/unsave-holiday')):
                    
                    if (parseInt(request.params.userId) === claims.id) {
                        next();
                    }
                    else {
                        response.status(STATUS_CODE.FORBIDDEN).json({
                                message: "Operation is not permitted for current user."
                        });
                        response.end();
                    }

                    break;
                default:
                    next();
                    break;
            }

        }

    }
}

module.exports = checkHolidayPermission;