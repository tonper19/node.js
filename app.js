const hellos = require("./hellos.js");
console.log(hellos.sayHello("freeCodeCamp"));
console.log(hellos.sayHelloWorld());
console.log(hellos);

// REST operator ...
const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};
console.log(sumar(1, 2, 3, 4, 5));

// destructuring (unpack values from arrays)
const LOCAL_FORECAST = {
    "today": {
        min: -1,
        max: 14
    },
    "tomorrow": {
        min: 1,
        max: 13
    },
    "day after tomorrow": {
        min: 4,
        max: 11
    }

};

const {"today": {min: minToday, max: maxToday}} = LOCAL_FORECAST;
console.log(`Today, 14/02/2023, we have a minimum of ${minToday} and maximum of ${maxToday}`);

