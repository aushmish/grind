const fs = require("fs");

fs.readFile("example.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("b.txt", "utf-8", function (err, contents) {
  console.log(contents);
});

fs.readFile("example.txt", "utf-8", function (err, contents) {
  console.log(contents);
});
