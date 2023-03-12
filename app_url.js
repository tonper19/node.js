// Aprende Node.js y Express: URL
// Estefanía
// to execute: node promise.js
// 2023-03-12

const wikiURL = new URL('https://en.wikipedia.org/w/index.php?search=sttro&title=Special%3ASearch&ns0=1');

console.log(wikiURL.hostname);
console.log(wikiURL.pathname);
console.log(wikiURL.searchParams);
console.log(wikiURL.searchParams.get('title'));

