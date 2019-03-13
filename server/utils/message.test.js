var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = generateMessage('Jimmy', 'Look at yourself! Pathetic!');
    console.log(message);
    expect(message.from).toBe('Jimmy');
    expect(message.text).toBe('Look at yourself! Pathetic!');
    expect(typeof message.createdAt).toBe('string');
  });
});