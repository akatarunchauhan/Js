class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}tarun`;
    }

    set password(value) {
        this._password = value;
    }
}

const tarun = new User("tarun@bankai.com", "shikai");
console.log(tarun.email);
