var getRequester = require('./serviceRequester');

describe('timestamp-microservice', function() {

  it('should handle correctly formatted natural language dates',
  getRequester('/December 15, 2015', 200, 'December 15, 2015', 1450137600));

  it('should handle positive unix timestamps',
  getRequester('/1450137600', 200, 'December 15, 2015', 1450137600));

  it('should handle negative unix timestamps',
  getRequester('/-1450137600', 200, 'January 19, 1924', -1450137600));

  it('should handle epoch date', getRequester('/0', 200, 'January 1, 1970', 0));

  it('should handle misspelled months',
  getRequester('/Decembe 15, 2015', 400));

  it('should handle out of range dates',
  getRequester('/December 35, 2015', 400));

  it('should handle natural language dates with missing spaces',
  getRequester('/December15, 2015', 400));

  it('should handle empty string', getRequester('', 400));
});
