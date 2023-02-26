// Aprende Node.js y Express: Promises
// Estefanía
// to execute: node promise.js
// 2023-02-26

const isPromiseResolved = false;
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isPromiseResolved) {
      resolve('Promise kept :)');
    } else {
      reject('Promise unfulfilled :(');
    }
  }, 3000);
});


const handleResolvedPromise = (value) => {
  console.log(value);
};

const handleRejectedPromise = (reasonRejected) => {
  console.log(reasonRejected);
};

console.log('Promise is called');
myPromise.then(handleResolvedPromise, handleRejectedPromise);


