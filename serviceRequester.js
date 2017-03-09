var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./server');

var should = chai.should();

chai.use(chaiHttp);

function confirmBasicAssertions(res, status) {
  res.should.have.status(status);
  res.should.be.json;
  res.body.should.have.all.keys(['natural', 'unix']);
}

function confirmUniqueAssertions(res, status, natural, unix) {
  if (status === 200) {
    res.body.natural.should.equal(natural);
    res.body.unix.should.equal(unix);
  } else {
    should.not.exist(res.body.natural);
    should.not.exist(res.body.unix);
  }
}

function getEndHandler(status, done, natural, unix) {
  return function(err, res) {
    confirmBasicAssertions.call(this, res, status);
    confirmUniqueAssertions.call(this, res, status, natural, unix);
    done();
  };
}

module.exports = function(url, status, natural, unix) {
  return function(done) {
    chai.request(server)
      .get(url)
      .end(getEndHandler(status, done, natural, unix));
  }
};
