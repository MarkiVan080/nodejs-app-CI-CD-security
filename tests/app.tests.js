const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const baseUrl = 'http://localhost:3000';

describe('Todos API', () => {
  it('GET /todos should return all todos', (done) => {
    chai.request(baseUrl)
      .get('/todos')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('POST /todos should create a new todo', (done) => {
    chai.request(baseUrl)
      .post('/todos')
      .send({ task: 'Test new task' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('task', 'Test new task');
        done();
      });
  });
});
