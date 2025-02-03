const app = require('../app');
const request = require('supertest');

it('Add a new dish', async () => {
  const response = await request(app).post('/').send({
    Name: "Ribbe",
    Country: "Norway"
  })
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Dish created');

});

it('Deletes the new dish', async () => {
  const response = await request(app).delete('/').send({
    Name: "Ribbe"
  })
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Dish deleted successfully');

});

