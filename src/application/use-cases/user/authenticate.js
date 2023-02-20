const { User } = require("../../../core/entities");
const config = require("../../../shared/config");
const jwt = require('jsonwebtoken');

async function authenticate(email, password) {

    const result = await User.findOne({
        where: {
            email,
            password
        }
    });
    
    let token = null;

    if (result !== null) {
        delete result.dataValues.password;

        let payload = {
            ...result.dataValues
        };
        
        token = jwt.sign(payload, config.TOKEN_SECRET, { expiresIn: config.TOKEN_EXPIRY });
    }

    return token;
}

module.exports = authenticate;