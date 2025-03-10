const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const chief = {
    name: "tribal chief",
    price: 619,
    isAvailable: true,
};

console.log(Object.getOwnPropertyDescriptor(chief, "name"));

Object.defineProperty(chief, "name", {
    // writable: false,
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(chief, "name"));

for (let [key, value] of Object.entries(chief)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}
