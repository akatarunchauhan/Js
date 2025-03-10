const User = {
    _email: "tarun@bankai.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    },
};

const chief = Object.create(User);
console.log(chief.email);
