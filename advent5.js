const fs = require('fs');
const inp = fs.readFileSync('./input5').toString().trim().split('\n').map(Number);
let [ count, val, result ] = [ 0, true, 0 ];

const jump = index => {
    if (index < 0 || index > inp.length-1) {
        val = false;
        return count;
    }
    [step, count] = [inp[index], count + 1];
    step > 2 ? inp[index]-- : inp[index]++; //++ for part 1
    return (index+step);
}

while(val){
    result = jump(result);
}

console.log(result);
