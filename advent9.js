const fs = require('fs');
const inp = fs.readFileSync('./input9').toString('utf-8').trim();

let [garbage, depth, score, gCount] = [false, 0, 0, 0];
for (let [i, curr] = [0, inp[0]]; i < inp.length; i++, curr = inp[i]) {
    if (curr === '!') i++;
    else if(garbage && curr != '>') gCount++;
    else if(curr === '<') garbage = true;
    else if(curr === '>') garbage = false;
    else if(curr === '{') depth++;
    else if(curr === '}') score += depth--; 
}
console.log(score, gCount)
