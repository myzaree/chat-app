var getPrettyTime = () => {
  var now = new Date();
  var day = now.getDay();
  var month = now.getMonth();
  if(day < 10) day = '0' + day;
  if(month < 10) month = '0' + month;
  return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}, ${day}.${month}.${now.getFullYear()}}`;
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