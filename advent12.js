'use strict'
const fs = require('fs');
console.time("run");
const input = fs.readFileSync('./input12').toString('utf-8').trim().split('\n')
      .map(row => row.split(" <-> ")[1].split(", ").map(Number));

let seen = new Set();
let groups = 0;
let i = 0;

const findConnected = pipe => {
    const connections = input[pipe];
    for(const c of connections) {
        if(seen.has(c)) continue;
        seen.add(c);
        i++;
        findConnected(c);
    }
    return i;
}

console.log(findConnected(0));

while(seen.size < input.length) {
    let i = 0;
    while(seen.has(i)) i++;
    groups++;
    seen.add(i);
    findConnected(i);
}
console.log(groups+1);

console.timeEnd("run");
