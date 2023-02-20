const { UserHoliday } = require("../../../core/entities");

async function saveUserHoliday(userId, holidayId) {
    let data = await UserHoliday.findOne({
        where: { userId, holidayId }
    });

    if (data) {
        return false;
    }
    else {
        await UserHoliday.create({
            userId,
            holidayId
        });
        return true;
    }
}

module.exports = {
    saveUserHoliday
}