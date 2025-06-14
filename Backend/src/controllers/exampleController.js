const pool = require('../config/db');

exports.getExample = async (req, res) => {
  try {
    console.log('Executing query...');
    const result = await pool.query('SELECT * FROM example_table');
    console.log('Query result:', result.rows);
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error executing query:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};