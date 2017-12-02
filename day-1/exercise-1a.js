const fs = require("fs");

const input = fs.readFileSync("input", "utf8").trim();

let total = 0;
let lastNum = Number(input[input.length - 1]);
for (let i = 0; i < input.length; i++) {
  const thisNum = Number(input.charAt(i));
  if (lastNum === thisNum) total += thisNum;
  lastNum = thisNum;
}

console.log(total);
