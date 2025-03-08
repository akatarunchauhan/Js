const user = {
  username: "tarun",
  loginCount: 69,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = () => {
    console.log(`Welcome ${this.username}`);
  };

  // return this; //* implicitly defined anyways
}

const userOne = new User("monkey", 56, true);
const userTwo = new User("roronoa", 1111, false);
console.log(userOne.constructor);
// console.log(userTwo);
