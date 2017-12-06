const fs = require('fs');
const input = fs.readFileSync('./input6').toString().trim().split('\t').map(Number);
//got some help on this one
let seen = {};
let step = 0
while (!seen[input]) {
    seen[input] = step++

    let [i, max] = input.reduce( (acc, curr, index) => acc[1] >= curr ? acc : [index,curr], [-1, -Infinity])

    input[i] = 0
    while (max-- > 0)
      input[++i % input.length]++
}

console.log(step, step - seen[input])


