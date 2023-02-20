const express = require('express');
const router = express.Router();
const { loginController } = require('../../../application/controllers');

const expressCallback = require('../../../shared/helpers/express-callback');

router.route('/')
    .post(expressCallback(loginController.init));

module.exports = {
    router
}