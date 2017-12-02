const fs = require("fs");

const input = fs.readFileSync("input", "utf8").trim();

let total = 0;
let rows = input.split("\n");
rows.forEach(row => {
  const values = row.split("\t");
  const sortVals = values.sort((a, b) => a - b);

  for (let i = 0; i < sortVals.length; i++) {
    for (let j = i + 1; j <= sortVals.length; j++) {
      if (sortVals[j] % sortVals[i] === 0) {
        total += sortVals[j] / sortVals[i];
      }
    }
  }
});

console.log(total);
