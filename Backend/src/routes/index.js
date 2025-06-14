const express = require('express');
const router = express.Router();
const exampleRoutes = require('./exampleRoutes');
const authRoutes = require('./authRoutes');

router.use('/example', exampleRoutes);
router.use('/auth', authRoutes);

module.exports = router;