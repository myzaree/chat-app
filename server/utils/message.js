var generateMessage = (from, text) => {
  var now = new Date();
  var day = now.getDay();
  var month = now.getMonth();
  if(day < 10) day = '0' + day;
  if(month < 10) month = '0' + month;
  return {
    from,
    text,
    createdAt: `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}, ${day}.${month}.${now.getFullYear()}}`
  }
};

module.exports = {generateMessage};