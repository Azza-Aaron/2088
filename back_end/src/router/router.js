const express = require('express');
const router = express.Router();
const {authGuard} = require("../middleware/verification");
const user = require('../controllers/user/user')
const userProfile = require('../controllers/user/userProfile')
const userNotifications = require('../controllers/user/userNotifications')
const session = require("express-session");

router.use('/user', user)
router.use(authGuard)
router.use('/user/profile', userProfile)
router.use('/user/notifications', userNotifications)

module.exports = router