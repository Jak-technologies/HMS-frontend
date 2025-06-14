const express = require('express');
const router = express.Router();
const { signup, signin, refreshToken, logout } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/refresh-token', refreshToken);
router.post('/logout', logout);

module.exports = router;
