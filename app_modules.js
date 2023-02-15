// console module
//console.log('Trigger an error');
//console.error(new Error('Error 123'));

// module process
//console.log(process.env);

// to access the arguments passed when executing this script
// console.log(process.argv);
// [node, app_modules.js, argument1, argument2]
//   0          1             2          3

//console.log(process.argv);

// for (let index = 2; index < process.argv.length; index++) {
//   console.log(`Argument number ${index - 1} is ${process.argv[index]}`);
// }

// console.log(process.memoryUsage());

// module OS
const os = require('os');

// console.log(os.type()); 
// console.log(os.homedir()); 
// console.log(os.uptime()); 
// console.log(os.userInfo()); 

// module timers
// function display(what, andThis) {
//   console.log(`Display => ${what} and also ${andThis}`);
//   return 'this is returned';
// }

function favoriteSport(name, sport) {
  console.log(`favoriteSport says: ${name} likes ${sport}`);
}

function runForever() {
  counter++;
  console.log(`Current count: ${counter}`);
}

// let rtn = setTimeout(display, 2000, 'Anita', 'Tony');
// console.log(rtn);

// console.log('This instruction is before calling setImmediate');
// setImmediate(favoriteSport, 'Miguel', 'baseball');
// console.log('This instruction is after calling setImmediate');

// var counter = 0;
// setInterval(runForever, 500);

// module fs (File System)
const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contents) => {
  if (err) {
    console.log('1 error');
    throw err;}
  console.log('1');
  console.log(contents);
});

fs.rename('index.html', 'main.html', (err) => {
  if (err) {
    console.log('2 error');
    throw err;
  }
  console.log('2');
  console.log('File renamed index->main');
});

fs.rename('main.html', 'index.html', (err) => {
  if (err) {
    console.log('3 error');
    throw err;
  }
  console.log('3');
  console.log('File renamed main->index');
});

fs.copyFile('index.html', 'main2.html', (err) => {
  if (err) {
    console.log('4 error');
    throw err;
  }
  console.log('4');
  console.log('File copied');
});

fs.appendFile('main2.html', '<p>Appended</p>', (err) => {
  if (err) {
    console.log('5 error');
    throw err;
  }
  console.log('5');
  console.log('File modified -> main2');
});

fs.writeFile('main2.html', 'Replace everything by this', (err) => {
  if (err) {
    console.log('6 error');
    throw err;
  }
  console.log('6');
  console.log('File replaced');
});

fs.unlink('main2.html', (err) => {
  if (err) {
    console.log('7 error');
    throw err;
  }
  console.log('7');
  console.log('File deleted');
});

