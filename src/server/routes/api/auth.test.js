let request = require('supertest');

const server = 'http://localhost:3000';
request = request(server);

describe('Route integration', () => {
  describe('/validateToken', () => {
    const successResult = { ok: true };

    it("validates the user's JWT token", () => {
      request
        .post('/api/validateToken')
        .then((res) => res.json())
        .then((res) => expect(res).toEqual(successResult));
    });
  });
});
