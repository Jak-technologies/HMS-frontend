const app = require('./app');
const logger = require('./config/logger');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`);
});