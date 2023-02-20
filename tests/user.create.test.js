const { createUser } = require("../src/application/use-cases/user")

describe('User', () => {

    it('Create', async () => {

        let data = {
            email: 'user.one2@email.com',
            password: 'userPassword',
            firstName: 'User',
            lastName: 'One'
        }

        const result = await createUser(data);

        expect(result).toBeTruthy();

    })
})