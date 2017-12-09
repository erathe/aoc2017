const fs = require('fs');
const inp = fs.readFileSync('./input8').toString().trim().split('\n');

const seen = {};
let max = -Infinity;
const getMax = array => array.reduce(( acc, curr ) => acc >= curr ? acc : curr, -Infinity);
const summarize = args => {
    if (!seen[arg1]) seen[arg1] = 0;
    if (!seen[carg]) seen[carg] = 0;
    eval(`if (seen.${carg} ${oper} ${lim}) seen.${arg1} ${op === 'inc' ? '+' : '-'}= ${num}` );
    max = max > seen[arg1] ? max : seen[arg1];
} 
const split = row => summarize([arg1, op, num, cond, carg, oper, lim] = row.split(' '));
const res = inp.map(split);
console.log(getMax(Object.values(seen)), max);
