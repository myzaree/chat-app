var expect = require('expect');
var {Users} = require('./users');

describe('Users', () => {
  var users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: 1,
      name: 'Mike',
      room: 'Cool guys'
    },{
      id: 2,
      name: 'John',
      room: 'Bad guys'
    },{
      id: 3,
      name: 'Kim',
      room: 'Bad guys'
    },{
      id: 4,
      name: 'Nigga',
      room: 'Bad guys'
    },{
      id: 5,
      name: 'Nurs',
      room: 'Cool guys'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Bob',
      room: 'Cool guys'
    }

    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should return names for "Bad guys"', () => {
    var userList = users.getUserList("Bad guys");
    expect(userList).toEqual(['John', 'Kim', 'Nigga']);
  });

  it('should return names for "Cool guys"', () => {
    var userList = users.getUserList("Cool guys");
    expect(userList).toEqual(['Mike', 'Nurs']);
  });

  it('should remove a user', () => {
    var removedUser = users.removeUser(3);
    expect(removedUser.id).toBe(3);
    expect(users.users.length).toBe(4);
    expect(users.users.includes({
      id: 3,
      name: 'Kim',
      room: 'Bad guys'
    })).toBe(false);
  });

  it('should not remove a user', () => {
    var user = users.removeUser(10);
    expect(user).toBeUndefined();
  });

  it('should find a user with existing id', () => {
    var user = users.getUser(4);
    expect(user.id).toBe(4);
    expect(user.name).toBe('Nigga');
    expect(user.room).toBe('Bad guys');
  });

  it('should not find a user with not existing id', () => {
    var user = users.getUser(20);
    expect(user).toBe(undefined);
  });
});