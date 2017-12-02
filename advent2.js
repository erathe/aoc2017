const R = require('ramda');
const fs = require('fs');
const input = fs.readFileSync('./input2').toString().trim();

const isDivisable = x => y => x !== y && ( x % y === 0 || y % x === 0);
const diff = (x,y) => x-y;
const splitAndConvertToIntAndSort = R.compose((R.sort(diff)), R.map(Number), R.split('\t'));
const sortedRow = R.compose(R.map(splitAndConvertToIntAndSort), R.split('\n'));

const result = sortedRow(input).reduce(( acc, curr ) => {
    return acc + ( curr[curr.length - 1] - curr[0] );
},0);

const result2 = sortedRow(input).reduce(( acc, curr ) => {
    const div = curr => (([x, y]) => y / x)(curr.filter(x => curr.some(isDivisable(x))));
    return acc + div(curr);
},0);

console.log(result, result2);
