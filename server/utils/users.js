
class Users {
  constructor() {
    this.users = [];

  }
  addUser(id, name, room) {
    var user = {id: id, name: name, room: room};
    this.users.push(user);
    return user;
  }
  getUser(id) {
    var user = this.users.filter(user => user.id === id);
    return user[0];
  }
  removeUser(id) {
    var user = this.getUser(id);
    if(user){
      this.users = this.users.filter(user => user.id !== id);
    }
    return user;
  }
  getUserList(room){
    var users = this.users.filter(user => user.room === room); 
    var namesArray = users.map(user => user.name);
    return namesArray;
  }
}

module.exports = {Users};