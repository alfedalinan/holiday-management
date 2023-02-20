const express = require('express');
const router = express.Router();
const { userHolidayController } = require('../../../application/controllers');
const verifyUser = require('../../middlewares/verifyUser');
const checkHolidayPermission = require('../../middlewares/checkHolidayPermission');

const expressCallback = require('../../../shared/helpers/express-callback');

router.route('/user/:userId')
    .get([verifyUser], expressCallback(userHolidayController.getByUserId));

router.route('/save-holiday')
    .post([verifyUser, checkHolidayPermission], expressCallback(userHolidayController.save));

router.route('/unsave-holiday/:userId/:holidayId')
    .delete([verifyUser, checkHolidayPermission], expressCallback(userHolidayController.unsave));

module.exports = {
    router
}