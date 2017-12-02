const fs = require("fs");

const input = fs.readFileSync("input1", "utf8").trim();

let total = 0;
for (let i = 0; i < input.length; i++) {
  const thisNum = Number(input.charAt(i));

  let halfwayPos = i + input.length / 2;
  if (halfwayPos > input.length - 1) halfwayPos -= input.length;
  const halfwayNum = Number(input.charAt(halfwayPos));

  if (halfwayNum === thisNum) total += thisNum;
  lastNum = thisNum;
}

console.log(total);
