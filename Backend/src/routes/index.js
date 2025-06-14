const express = require('express');
const router = express.Router();
const exampleRoutes = require('./exampleRoutes');

router.use('/example', exampleRoutes);

module.exports = router;