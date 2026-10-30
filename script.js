Object.prototype.getKeys = function () {
    return Object.keys(this);
};

const student = {
    name: "John",
};

console.log(student.getKeys());
