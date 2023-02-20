const { SUCCESS_MESSAGE, NO_OP_MESSAGE } = require("../../core/constants/messages");
const { CURRENT_COUNTRY_CODE } = require("../../core/constants/other-codes");
const STATUS_CODE = require("../../core/constants/status-codes");
const { saveUserHoliday, unsaveUserHoliday, getUserHolidayByUserId } = require("../use-cases/user-holiday");

/**
 * 
 * @body { userId, holidayId } 
 */
async function save(request) {

    let userId = request.body.userId;
    let holidayId = request.body.holidayId;
    
    let result = await saveUserHoliday(userId, holidayId);
    let response = {}

    if (result) {
        response = {
            statusCode: STATUS_CODE.CREATED,
            data: {
                message: SUCCESS_MESSAGE.HOLIDAY_SAVE 
            }
        }
    }
    else {
        response = {
            statusCode: STATUS_CODE.NO_CONTENT,
            data: {
                message: NO_OP_MESSAGE.HOLIDAY_SAVE 
            }
        }
    }
    

    return response;

}

/**
 * 
 * @param {userId, holidayId} 
 */
async function unsave(request) {

    let userId = request.params.userId;
    let holidayId = request.params.holidayId;
    
    let deleted = await unsaveUserHoliday(userId, holidayId);
    let response = {}

    if (deleted) {
        response = {
            statusCode: STATUS_CODE.OK,
            data: {
                message: SUCCESS_MESSAGE.HOLIDAY_UNSAVE
            }
        };
    }
    else {
        response = {
            statusCode: STATUS_CODE.NO_CONTENT,
            data: {
                message: NO_OP_MESSAGE.HOLIDAY_UNSAVE
            }
        };
    }

    return response;
}

async function getByUserId(request) {
    console.log(request.params);
    let userId = request.params.userId

    let result = await getUserHolidayByUserId(userId) || [];

    return {
        statusCode: STATUS_CODE.OK,
        data: {
            result
        }
    }
}

module.exports = {
    save,
    unsave,
    getByUserId
}