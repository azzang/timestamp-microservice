var chai = require('chai');
var expect = chai.expect;
var isValid = require('../validateUrl').isValid;

describe('isValid', function() {

  it('should return true when date string has correct natural language or unix timestamp format', function() {

    expect(isValid('December%20,%2015')).to.equal(true);
    expect(isValid('January%2,%2013')).to.equal(true);
    expect(isValid('February%27,%2018')).to.equal(true);
    expect(isValid('March%28,%1899')).to.equal(true);
    expect(isValid('April%4,%1999')).to.equal(true);
    expect(isValid('September%19,%2105')).to.equal(true);
    expect(isValid('August%13,%1745')).to.equal(true);
    expect(isValid('July%01,%1600')).to.equal(true);
    expect(isValid('June%25,%1952')).to.equal(true);
    expect(isValid('October%22,%1200')).to.equal(true);
    expect(isValid('1410715640579')).to.equal(true);
    expect(isValid('-1410715640579')).to.equal(true);
    expect(isValid('-14')).to.equal(true);
    expect(isValid('0')).to.equal(true);

  });

  it('should return false when date string has incorrect natural language or unix timestamp format', function() {

    expect(isValid('Decemer%20,%2015')).to.equal(false);
    expect(isValid('January%50,%2013')).to.equal(false);
    expect(isValid('February%27,%018')).to.equal(false);
    expect(isValid('Marc%28,%1899')).to.equal(false);
    expect(isValid('random bull')).to.equal(false);
    expect(isValid('September%19,%2')).to.equal(false);
    expect(isValid('')).to.equal(false);
    expect(isValid('July%1,%16000')).to.equal(false);
    expect(isValid('June25,%1952')).to.equal(false);
    expect(isValid('October%22%1200')).to.equal(false);

  });

});
