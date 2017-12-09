const fs = require('fs');
const input = fs.readFileSync('./input7').toString().trim().split('\n');

let [nodes, holding, root] = [{}, {}, ''];

const dfs = (rooter, holding, nodes) => {
    let [exp, weight] = [0, nodes[rooter]];
    for (child of holding[rooter]){
        //Holy scoping rules
        const ch = child;
        let w = dfs(ch, holding, nodes);
        weight += w;
        if(exp === 0) exp = w;
        else if(exp != w){
            const bad = nodes[ch];
            console.log('expcted child', ch, 'to have weight', nodes[ch] += (exp-w), 'has weight', bad);
        }
    }
    return weight;
}

const a = input.map(row => {
    let rowCont = row.split(' ');
    nodes[rowCont[0]] = Number((rowCont[1].replace(/\(|\)/g, '')));
    hold = rowCont.slice(3, rowCont.length).map(w => w.replace(/[, ]/g, ''));
    holding[rowCont[0]] = hold;
});

const result = Object.keys(holding).forEach(node => {
    if (!Object.values(holding).some(r => r.includes(node))) root = node; 
})
console.log(root, dfs(root, holding, nodes));
