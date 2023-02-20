const db = require('../src/infrastructure/db/sequelize');

describe('DB Connection', () => {

    it('Test Connection', () => {

        expect(db).toBeTruthy();

    })
})