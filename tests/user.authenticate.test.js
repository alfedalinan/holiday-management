const { authenticate } = require("../src/application/use-cases/user");

describe('User', () => {

    it('Authenticate', async () => {

        let data = {
            email: 'user.one2@email.com',
            password: 'userPassword'
        }

        const result = await authenticate(data.email, data.password);

        expect(result).toBeTruthy();

    })
})