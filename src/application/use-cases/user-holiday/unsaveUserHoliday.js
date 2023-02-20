const { UserHoliday } = require("../../../core/entities");

async function unsaveUserHoliday(userId, holidayId) {
    return await UserHoliday.destroy({
        where: { userId, holidayId}
    });
}

module.exports = {
    unsaveUserHoliday
}