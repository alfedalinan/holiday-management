const config = require('../src/shared/config')

module.exports = {
    development: {
        url: `postgres://${config.POSTGRES_USER}:${config.POSTGRES_PASSWORD}@${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/postgres`,
        dialect: "postgres"
    }
}