// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }

//   console.log("File contents:", data);

//   console.log("Hello World");
// });



const fs = require("fs");
const content=fs.readFileSync("example.txt",'utf8');
console.log(content);

const content1=fs.readFileSync("b.txt");
console.log(content1);