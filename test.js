var getRequester = require('./serviceRequester');

describe('timestamp-microservice', function() {

  it('should handle correctly formatted natural language dates',
  getRequester('/December%2015,%202015', 200, 'December 15, 2015', 1450166400));

  it('should handle correctly formatted unix timestamps',
  getRequester('/1450166400', 200, 'December 15, 2015', 1450166400));

  it('should handle incorrectly formatted natural language dates',
  getRequester('/Decembe%2015,%202015', 400));

  it('should handle empty string', getRequester('', 400));
});
