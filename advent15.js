'use strict'
const fs = require('fs');
console.time("run");

let [i, pairs] = [0, 0];
const [divOp, genA, genB] = [2147483647, 16807, 48271];

function* genPairs(){
  let [startA, startB] = [699, 124]
  while(true){
    [startA, startB] = [(startA * genA) % divOp, (startB * genB) % divOp];
    yield [startA, startB];
  }
}

const gen = genPairs();
while(i < 40000000){
  const [valA, valB] = gen.next().value;
  if ((valA & 0xFFFF) == (valB & 0xFFFF)) pairs++;
  i++;
}

console.log(pairs);
console.timeEnd("run");
