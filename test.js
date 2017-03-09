var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');

var should = chai.should();

chai.use(chaiHttp);

describe('timestamp-microservice', function() {

  it('should handle correctly formatted natural language dates', function(done) {
    chai.request(server)
      .get('/December%2015,%202015')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.all.keys(['natural', 'unix']);
        res.body.natural.should.equal('December 15, 2015');
        res.body.unix.should.equal(1450166400);
        done();
    });
  });

    it('should handle correctly formatted unix timestamps', function(done) {
        chai.request(server)
          .get('/1450166400')
          .end(function(err, res) {
            res.should.have.status(200);
            res.should.be.json;
            res.body.should.have.all.keys(['natural', 'unix']);
            res.body.natural.should.equal('December 15, 2015');
            res.body.unix.should.equal(1450166400);
            done();
        });
    });

    it('should handle incorrectly formatted natural language dates', function(done) {
          chai.request(server)
            .get('/Decembe%2015,%202015')
            .end(function(err, res) {
              res.should.have.status(400);
              res.should.be.json;
              res.body.should.have.all.keys(['natural', 'unix']);
              should.not.exist(res.body.natural); // should equal null
              should.not.exist(res.body.unix);
              done();
            });
        });

        it('should handle empty string', function(done) {
            chai.request(server)
              .get('')
              .end(function(err, res) {
                res.should.have.status(400);
                res.should.be.json;
                res.body.should.have.all.keys(['natural', 'unix']);
                should.not.exist(res.body.natural); // should equal null
                should.not.exist(res.body.unix);
                done();
              });
          });

});
