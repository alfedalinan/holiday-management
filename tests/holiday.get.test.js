const { getAll } = require("../src/application/use-cases/holiday")

describe('Holidays', () => {
    it('Get Holidays', async () => {

        let countryCode = 'PH';

        const result = await getAll(countryCode);

        expect(result.length).toBeGreaterThan(0);

    })
})