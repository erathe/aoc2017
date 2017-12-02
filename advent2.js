const R = require('ramda');
const fs = require('fs');
const input = fs.readFileSync('./input2', 'utf8');

const isDivisable = x => y => x !== y && ( x % y === 0 || y % x === 0); 
const diff = (x,y) => x-y;
const splitAndConvertToIntAndSort = R.compose((R.sort(diff)), R.map(Number), R.split('\t'));
const sortedRow = R.compose(R.map(splitAndConvertToIntAndSort), R.split('\n'));

const result = sortedRow(input).reduce(( acc, curr ) => {
    return acc + ( curr[curr.length - 1] - curr[0] );
},0);

const result2 = sortedRow(input).reduce(( acc, curr ) => {
    if (curr.length > 1){
        const div = curr => (([x, y]) => y / x)(curr.filter(x => curr.some(isDivisable(x))));
        return acc + div(curr);
    } else {return acc + 0} // bug in file read? a zero is added at the end of the split for some reason
},0);

console.log(result, result2);
