'use strict'
const fs = require('fs');
console.time("run");

let [i, pairs] = [0, 0];
const [divOp, genA, genB] = [2147483647, 16807, 48271];

const getVal = (num, generator, multiple) => {
  let val = (num * generator) % divOp;
  while(val % multiple != 0){
    val = (val * generator) % divOp;
  }
  return val;
}


function* genPairs(){
  let [startA, startB] = [699, 124]
  while(true){
    [startA, startB] = [getVal(startA, genA, 4), getVal(startB, genB, 8)]
    yield [startA, startB];
  }
}

const gen = genPairs();
while(i < 5000000){
  const [valA, valB] = gen.next().value;
  if ((valA & 0xFFFF) == (valB & 0xFFFF)) pairs++;
  i++;
}

console.log(pairs);
console.timeEnd("run");
