const fs = require("fs");

fs.writeFileSync("data.txt", "0");

const data = fs.readFileSync("data.txt", "utf8");
console.log(data);