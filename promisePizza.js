// Aprende Node.js y Express: Promises Pizza Shop example
// Estefanía
// to execute: node promise.js
// 2023-02-26
// Pizza Shop: orders may fail for various reasons, to simulate a failure
// we use orderStatus (20% failure)

const orderStatus = () => {
  return Math.random() < 0.8; // true = success (80%) false = failure (20%)
};


const toppings = () => {
  let topping = "empty";
  randomTopping = Math.trunc(Math.random() * 4);
  switch (randomTopping) {
    case 1:
      topping = 'Pepperoni';
      break;
    case 2:
      topping = 'Anchovies, Capers, Black Olives';
      break;
    case 3:
      topping = 'Pinapple, Ham';
      break;
    default:  
      topping = 'Cheese galore';
  }
  return topping;
};
// test
// for (let i = 0; i < 10; i++) {
//   console.log(`Toppings: ${toppings()}`);
// }

const pizzaOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (orderStatus()) {
      const toppingSelection = toppings();
      let pizzaStyle = "";
      switch (toppingSelection) {
        case 'Pepperoni':
          pizzaStyle = toppingSelection;
          break;
        case 'Anchovies, Capers, Black Olives':
          pizzaStyle = 'Napolitana';
          break;
        case 'Pinapple, Ham':
          pizzaStyle = 'Hawaiian';
          break;
        default:  
          pizzaStyle = 'Three Cheeses';
      }
      resolve(`A ${pizzaStyle} pizza is on your way`);
    } else {
      reject('There was an error with your order, please try again');
    }
  }, 500);
});

pizzaOrder
  .then((confirmationMessage) => {
    console.log(confirmationMessage);
  })
  .catch((refuseMessage) => {
    console.log(refuseMessage);
  });

