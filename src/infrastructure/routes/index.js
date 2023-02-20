const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const holidayRoutes = require('./holiday');
const loginRoutes = require('./login');
const signUpRoutes = require('./sign-up');
const userHolidayRoutes = require('./user-holiday');

router.use('/user', userRoutes.router);
router.use('/holiday', holidayRoutes.router);
router.use('/login', loginRoutes.router);
router.use('/sign-up', signUpRoutes.router);
router.use('/user-holiday', userHolidayRoutes.router);

module.exports = {
    router
}