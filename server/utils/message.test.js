var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = generateMessage('Jimmy', 'Look at yourself! Pathetic!');
    expect(message.from).toBe('Jimmy');
    expect(message.text).toBe('Look at yourself! Pathetic!');
    expect(typeof message.createdAt).toBe('string');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location link', () => {
    var from = 'Admin';
    var locationLink = generateLocationMessage(from, 1, 1);
    expect(locationLink.from).toBe(from);
    expect(locationLink.url).toBe('http://google.com/maps?q=1,1');
    expect(typeof locationLink.createdAt).toBe('string');
  });
});