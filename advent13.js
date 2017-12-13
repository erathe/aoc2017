'use strict'
const fs = require('fs');
console.time("run");
const input = fs.readFileSync('./input13').toString('utf-8').trim().split('\n')
  .map(word => word.split(': ').map(Number));

let i = 1;
while(input.some(s => ((i + s[0]) % ((s[1]-1)*2)) === 0)) i++
console.log(i);

console.timeEnd("run");
