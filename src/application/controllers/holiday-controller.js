const STATUS_CODE = require('../../core/constants/status-codes');
const holidayUseCase = require('../use-cases/holiday')

/**
 * @query { offset, limit } - For pagination purposes
 */
async function getAll(request) {

    let result = null;

    let offset = request.query.offset ? request.query.offset : 0;
    let limit = request.query.limit ? request.query.limit : 0;

    let data = await holidayUseCase.getAll(offset, limit);

    if (data) {
        result = {
            statusCode: STATUS_CODE.OK,
            data
        }
    }
    else {
        result = {
            statusCode: STATUS_CODE.NO_CONTENT,
            data: []
        }
    }

    return result;
    
}

/**
 * @param { id } - The ID of the holiday stored in database table
 */
async function getById(request) {

    let result = null

    let id = request.params.id;
    
    let data = await holidayUseCase.getById(id);
    
    if (data) {
        result = {
            statusCode: STATUS_CODE.OK,
            data
        }
    }
    else {
        result = {
            statusCode: STATUS_CODE.NO_CONTENT,
            data: {}
        }
    }

    return result;

}


module.exports = {
    getAll,
    getById
}