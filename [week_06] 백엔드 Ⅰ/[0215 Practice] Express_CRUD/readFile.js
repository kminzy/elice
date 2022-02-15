const fs = require('fs');
//const fs = require('fs/promises');

// async function readHTML() {
//   return fs.readFile('./index.html', 'utf-8');
// }

// readHTML().then((res) => {
//   console.log(res);
// })

const htmlCode = fs.readFile('./index.html', 'utf-8', (err, data) => {
  console.log(data);
});

console.log('값:', htmlCode);