const { User } = require('../../../core/entities');

async function createUser(data) {

    const result = await User.create(data);
    return result;

}

module.exports = createUser;