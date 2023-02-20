const { Sequelize } = require('sequelize');
const config = require('../../shared/config');
const pg = require('pg');

// basically: postgress://user:password@host:port/dbname
const postgresInit = `postgres://${config.POSTGRES_USER}:${config.POSTGRES_PASSWORD}@${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/postgres`;
const postgresConnection = `postgres://${config.POSTGRES_USER}:${config.POSTGRES_PASSWORD}@${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/${config.POSTGRES_DB}`;
var sequelize = null

var pool = new pg.Pool({
    connectionString: postgresInit
});

// pool.connect((err, client, done) => {

//     client.query(`CREATE DATABASE ${config.POSTGRES_DB}`, (error) => {
//         console.log(err)
//     })

//     done();

// });

sequelize = new Sequelize(postgresConnection, {
    sync: true,
    logging: false
});


module.exports = sequelize;