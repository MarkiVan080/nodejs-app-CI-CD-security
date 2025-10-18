const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app/index');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Todos API', () => {
    it('GET /todos should return empty array initially', done => {
        chai.request(app)
            .get('/todos')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array').that.is.empty;
                done();
            });
    });
});
