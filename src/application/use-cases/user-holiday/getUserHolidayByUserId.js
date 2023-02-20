const { HasOne } = require('sequelize');
const { User, UserHoliday, Holiday } = require('../../../core/entities');

async function getUserHolidayByUserId(userId) {

    let result = null;

    let data = await User.findOne({
        where: {
            id: userId,
        },
        include: [{
            model: UserHoliday,
            as: 'userHolidays',
            include: [{
                model: Holiday,
                association: new HasOne(UserHoliday, Holiday, { sourceKey: 'holidayId', foreignKey: 'id', as: 'holiday' }),
                as: 'holiday'
            }]
        }]
    });

    if (data) {
        result = data.userHolidays;
    }

    return result;

}

module.exports = {
    getUserHolidayByUserId
}