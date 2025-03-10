// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const tarun = new User("tarun", "tarun@bankai.com", "123");

console.log(tarun.encryptPassword());
console.log(tarun.changeUsername());

//!  BEHIND THE SCENE

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const chief = new User("chief", "chief@yowaimo.com", "69");

console.log(chief.encryptPassword());
console.log(chief.changeUsername());
