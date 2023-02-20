const express = require('express');
const router = express.Router();
const { userController } = require('../../../application/controllers');

const expressCallback = require('../../../shared/helpers/express-callback');

router.route('/')
    .post(expressCallback(userController.create));

module.exports = {
    router
}