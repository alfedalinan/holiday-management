const express = require('express');
const app = express();
const v1 = require('./infrastructure/routes');
const config = require('./shared/config')

app.use(express.json());
app.use('/v1', v1.router);

app.listen(config.APP_PORT, () => {
    console.log(`Listens to port ${config.APP_PORT}`);
})
