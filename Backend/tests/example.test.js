const request = require('supertest');
const app = require('../src/app');
const pool = require('../src/config/db'); // Import the database connection

describe('GET /api/example', () => {
  afterAll(async () => {
    await pool.end(); // Close the database connection
  });

  it('should return example data', async () => {
    const res = await request(app).get('/api/example');
    expect(res.statusCode).toEqual(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toBeInstanceOf(Array); // Ensure data is an array
  });
});