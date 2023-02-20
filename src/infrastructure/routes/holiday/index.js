const express = require('express');
const router = express.Router();
const { holidayController } = require('../../../application/controllers');

const expressCallback = require('../../../shared/helpers/express-callback');

router.route('/')
    .get(expressCallback(holidayController.getAll))

router.route('/:id')
    .get(expressCallback(holidayController.getById))


module.exports = {
    router
}