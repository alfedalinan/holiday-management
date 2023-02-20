const { Holiday } = require('../../../core/entities');


async function getById(id) {

    let result = await Holiday.findOne({
        where: { id }
    });

    return result;
}

module.exports = getById;