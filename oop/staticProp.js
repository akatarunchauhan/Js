class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const tarun = new User("tarun");
// console.log(tarun.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const risama = new Teacher("risama", "risama@gmail.com");
risama.logMe();
console.log(risama.createId());
