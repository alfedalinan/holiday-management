const userUseCase = require('../use-cases/user')

async function getAll(request) {

    try {
        const data = await userUseCase.getUsers();

        return {
            statusCode: 200,
            data
        }
    } catch (error) {
        return {
            statusCode: 500,
            data: error
        }
    }


}

module.exports = {
    getAll
}