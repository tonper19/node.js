
function sayHello(name) {
    return `Hello, ${name}`;
}

function sayHelloWorld() {
    return 'Hello, World!';
}

// export option 1
// module.exports.sayHello = sayHello;
// module.exports.sayHelloWorld = sayHelloWorld;

// export option 2
module.exports = {
    sayHello: sayHello,
    sayHelloWorld: sayHelloWorld
};