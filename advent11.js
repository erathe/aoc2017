const fs = require('fs');
console.time("run");
const input = fs.readFileSync('./input11').toString('utf-8').trim().split(',');

let[x, y] = [0,0,0];
let max = 0;
for (dir of input){
    if(dir === 'ne') x+=1;
    else if(dir === 's') y-=1;
    else if(dir === 'sw') x-=1;
    else if(dir === 'n') y+=1;
    else if(dir === 'se'){
        x += 1;
        y -= 1;
    }
    else if(dir === 'nw'){
        x -= 1;
        y += 1;
    }
    distance = ((Math.abs(x) + Math.abs(y) + Math.abs(x+y))/2);
    if(distance > max) max = distance;
}


console.log(max, distance);
console.timeEnd("run");
