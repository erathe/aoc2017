const fs = require('fs');
const input = fs.readFileSync('./input7').toString().trim().split('\n');

let nodes = {};
let holding = {};
const a = input.map(row => {
    let rowCont = row.split(' ');
    nodes[rowCont[0]] = Number((rowCont[1].replace(/\(|\)/g, '')));
    hold = rowCont.slice(3, rowCont.length).map(w => w.replace(/[, ]/g, ''));
    holding[rowCont[0]] = hold;
});

const result = Object.keys(nodes).forEach(node => {
    if (!Object.values(holding).some(r => r.includes(node))) console.log(node);
})

