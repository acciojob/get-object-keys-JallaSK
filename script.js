function getKeys(obj) {
    return Object.keys(obj);
}

const student = {
    name: "John"
};

const test1 = {
    name: "John",
    age: 25,
    city: "Hyderabad"
};

const test2 = {
    name: "John"
};

console.log(getKeys(test1));
console.log(getKeys(test2));
