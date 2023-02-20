const { User } = require('../../../core/entities');

async function getUsers() {
    const result = await User.findAll();
    return result;
}

module.exports = getUsers;