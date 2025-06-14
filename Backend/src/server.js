const app = require('./app');
const logger = require('./config/logger');
const { createUserTable } = require('./models/userModel');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

createUserTable()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('Error creating user table:', err));