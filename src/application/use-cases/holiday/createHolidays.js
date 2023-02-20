const { Holiday } = require('../../../core/entities');


async function createHolidays(holidayList) {
    return await Holiday.bulkCreate(holidayList, { ignoreDuplicates: true });
}

module.exports = createHolidays;