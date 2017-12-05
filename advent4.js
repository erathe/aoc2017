const fs = require('fs');
const inp = fs.readFileSync('./input4').toString().trim();

//initial solution
const phrases = inp.split('\n').map(row => row.split(' '));
const r = phrases.reduce((acc, curr) => {
	  curr = curr.map(word => word.split('').sort().join('')); //remove this line for task 1
	  if (new Set(curr).size == curr.length) acc++;
    return acc;
},0);
console.log(r);

//Functional approach after checking reddit
const phrases2 = inp.split('\n');
const noRepeats = (w, _, ws) => ws.filter(v => v === w).length === 1;
const isValid = f => ph => ph.split(' ').map(f).every(noRepeats);
const count = f => phrases2.filter(isValid(f)).length;
const sortedLetters = w => [...w].sort().join('');

console.log([w => w, sortedLetters].map(count));
