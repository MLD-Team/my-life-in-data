let request = require('supertest');
const mongoose = require('mongoose');

require('dotenv').config();

const server = 'http://localhost:3000';
request = request(server);

describe('Route integration', () => {
  describe('POST /:dataset/points$', () => {
    const newPoint = {
      dataset: 'water',
      owner: 5,
      value: 26,
    };

    it('should create a new point in the database', () => {
      request
        .post('/water/points')
        .send({ value: 26 })
        .then((res) => res.json())
        .then((res) => expect(res).toEqual(newPoint))
        .expect('Content-Type', /text\/html/)
        .expect(200);
    });
  });
});
