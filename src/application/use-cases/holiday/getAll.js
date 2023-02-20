const Holidays = require('date-holidays');
const { CURRENT_COUNTRY_CODE } = require('../../../core/constants/other-codes');
const { Holiday } = require('../../../core/entities');
const createHolidays = require('./createHolidays');
const hd = new Holidays();


async function getAll(offset, limit) {

    let result = null;

    let initialResult = limit > 0 ? await Holiday.findAndCountAll({
        offset,
        limit,
    }) : await Holiday.findAndCountAll();

    // if it has a result
    if (initialResult.length > 0) {
        result = initialResult;
    }
    else {

        hd.init(CURRENT_COUNTRY_CODE);
        let holidayList = await hd.getHolidays(new Date().getFullYear());

        let holidayData = []
        holidayList.forEach(holiday => {
            holidayData.push({
                date: holiday.date,
                name: holiday.name,
                type: holiday.type
            })
        })

        let insertResult = await createHolidays(holidayData);

        if (insertResult) {
            result = limit > 0 ? await Holiday.findAndCountAll({
                offset,
                limit
            }) : await Holiday.findAndCountAll();
        }

    }
    
    return result;
}

module.exports = getAll;