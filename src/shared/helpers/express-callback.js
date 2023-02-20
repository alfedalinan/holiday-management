module.exports = (controller) => {

    return (request, response) => {

        var httpRequest = {
            body: request.body,
            query: request.query,
            params: request.params,
            ip: request.ip,
            method: request.method,
            path: request.path,
            headers: {
                ...request.headers
            }
        };

        controller(httpRequest)
            .then(httpResponse => {

                if (httpResponse.headers) {
                    response.set(httpResponse.headers);
                }

                response.status(httpResponse.statusCode).json(httpResponse.data);
                response.end();
            })
            .catch(httpError => {
                response.json(httpError);
                response.end();
            })

    }

}