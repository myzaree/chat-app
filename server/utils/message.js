var moment = require('moment');

var getPrettyTime = () => {

  var date = moment();
  return date.format('h:mm a');
}

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: getPrettyTime()
  }
};

var generateLocationMessage = (from, lat, long) => {
  return {
    from,
    url: `http://google.com/maps?q=${lat},${long}`,
    createdAt: getPrettyTime()
  };
};
module.exports = {generateMessage, generateLocationMessage};