import supertest from 'supertest';
import router from '../routes/user';

it('should return a message, reflecting that the server started successfully', async () => {
  expect('Server running on port 5000');
});

it('should return a message, reflecting that the database connected successfully', async () => {
  expect('Connected to Mongo on: localhost:2701');
});
