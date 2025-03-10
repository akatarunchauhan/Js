class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chief = new Teacher("chief", "bankai@Dluffy.com", "123");

chief.addCourse();
const tarun = new User("tarun");

tarun.logMe();
chief.logMe();

console.log(tarun instanceof User);
