let request = require('supertest');

// const mongoose = require('mongoose');
const server = 'http://localhost:3000';
// const server = '../../server';

// const databaseName = 'TRYTHIS';
// const Point = require('../../models/User');
const DataSet = require('../../models/DataSet');

beforeAll(async () => {
  const url = `mongodb://127.0.0.1/${databaseName}`;
  await mongoose.connect(url, { useNewUrlParser: true });
  const data = {
    name: 'Andrew',
  };
  DataSet.create(data, (err, data) => {
    if (err) {
    } else {
    }
  });
});

describe('Andrew/s portion of route integration', () => {
  it('should get from db', () => {
    return request(server).get('/api/datasets').expect(200);
  });
  // it('Should respond with 200 and application/json content type', () =>
  //   request(server)
  //     .get(`/api/datasets`)
  //     .expect('Content-Type', /application\/json/)
  //     .expect(200));
  // it('should be 1', () => {
  //   expect(1).toEqual(1);
  // });
  // describe('/api/datasets/:dataset/points/:point', () => {
  //   describe('PUT', () => {
  //
  //     it('Should update points within the dataset', () => {
  //       request(server)
  //         .post(`/api/datasets`)
  //         .send({ blah: 'Andrew' })
  //         .expect(200);
  //     });
  //   });
  // });
});
