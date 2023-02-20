const envFile = '.env';
const path = `${__dirname}/../../../${envFile}`;
const env = require('dotenv').config({ path });

module.exports = env.parsed