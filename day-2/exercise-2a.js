const fs = require("fs");

const input = fs.readFileSync("input", "utf8").trim();

let total = 0;
let rows = input.split("\n");
rows.forEach(row => {
  const values = row.split("\t");
  const largest = Math.max(...values);
  const smallest = Math.min(...values);
  total += largest - smallest;
});

console.log(total);
