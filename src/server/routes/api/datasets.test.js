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
      return (
        request
          .post('/water/points')
          .send({ value: 26 })
          // .then((res) => JSON.parse(res))
          .then((res) => expect(res).toEqual(newPoint))
      );
      // .expect('Content-Type', /text\/html/)
      // .expect(200);
    });
  });

  describe('GET /:dataset/points$', () => {
    const newPoint = {
      dataset: 'water',
      owner: 5,
      value: 26,
    };

    it('should return all points in the database', () => {
      request
        .get('/water/points')
        // .send({ value: 26 })
        .then((res) => res.json())
        .then((res) => expect(res).toEqual(newPoint));
      // .expect('Content-Type', /text\/html/)
      // .expect(200);
    });
  });
});
