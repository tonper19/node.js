// Aprende Node.js y Express: Async Await
// Estefanía
// to execute: node promise.js
// 2023-02-28

function productOrder(product) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering ${product} (PO)`)
    setTimeout(() => {
      if (product === 'XL T-shirt') {
        resolve('XL T-shirt ordered (PO)');
      } else {
        reject(`Product ${product} is not available at the moment (PO)`);
      }
    }, 2000)
  });
}

function processOrder(answer) {
  return new Promise((resolve, reject) => {
    console.log('Processing order... (PR)');
    console.log(`The answer was: "${answer}" (PR)`);
    setTimeout(() => {
      resolve('Thanks for your purchase. (PR)');
    }, 4000);
  });
}

async function performOrder(product) {
  try {
    const answerProductOrder = await productOrder(product);
    console.log('Answer received (PERF)');
    const answerProcessOrder = await processOrder(answerProductOrder); 
    console.log(`${answerProcessOrder} (PERF)`);
  } catch (error) {
    console.log(`${error} (PERF)`);
  }
}

performOrder('XL T-shirt');
performOrder('chiripitiflautico');
