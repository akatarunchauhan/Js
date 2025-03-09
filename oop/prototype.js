// let myName = "Tarun   ";
// console.log(myName.truelength);

let myCaptains = ["bayakuga", "yamamoto"];

let capBankai = {
  bayakuga: "sembonzakura kageyoshi",
  yamamoto: "zanka no tachi",

  getYamaPower: function () {
    console.log(`Yamamoto bankai is ${this.yamamoto}`);
  },
};

Object.prototype.tarun = function () {
  console.log(`Tarun is present in all objects`);
};

Array.prototype.hello = function () {
  console.log(`tarun says hello`);
};

// capBankai.tarun();

// myCaptains.tarun();
// myCaptains.hello();
// capBankai.hello();

//! INHERITANCE

const user = {
  name: "tarun",
  email: "shikai@bankai.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailable: false,
};

const TAsupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

//! MODERN SYNTAX
Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "akatarunchauhan    ";

String.prototype.truelength = function () {
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True lenght is: ${this.trim().length}`);
};

anotherUsername.truelength();
"monkey".truelength();
"monkey D garp".truelength();
