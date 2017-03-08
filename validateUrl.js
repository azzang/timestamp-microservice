var moment = require('moment');

exports.isValid = function(dateString) {
  var date = moment(dateString, ['MMMM%D,%YYYY', 'x'], true);
  return date.isValid();
}
