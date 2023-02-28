function productOrder(product) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering ${product}`)
    setTimeout(() => {
      if (product === 'XL T-shirt') {
        resolve('XL T-shirt ordered');
      } else {
        reject('Product not available');
      }
    }, 2000)
  });
}

function processOrder(answer) {
  return new Promise((resolve, reject) => {
    console.log('Processing order...');
    console.log(`The answer was: "${answer}"`);
    setTimeout(() => {
      resolve('Thanks for your purchase.');
    }, 4000);
  });
}

productOrder('XL T-shirt')
  .then(answer => {
    console.log('Answer received');
    return processOrder(answer);
  })
  // chaining promises
  .then(processedAnswer => {
    console.log(processedAnswer);
  })
  .catch(error => {
    console.log(error);
  });