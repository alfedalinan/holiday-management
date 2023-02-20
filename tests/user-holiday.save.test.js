const { saveUserHoliday } = require("../src/application/use-cases/user-holiday");

describe('User Holiday', () => {
    it('Save User Holiday', async () => {

        let userId = 1;
        let holidayDate = "2023-12-24 00:00:00";
        let countryCode = 'PH';

        const result = await saveUserHoliday(userId, holidayDate, countryCode);

        expect(result).toBeTruthy();

    })
})