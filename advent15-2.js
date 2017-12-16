'use strict'
const fs = require('fs');
console.time("run");

let [i, pairs] = [0, 0];
const [divOp, genA, genB] = [2147483647, 16807, 48271];

const convertToBinary = num => num.toString(2);
const matchPairs = (valA, valB) => valA.slice(-16) === valB.slice(-16);
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
  if (matchPairs(convertToBinary(valA), convertToBinary(valB))) pairs++;
  i++;
}

console.log(pairs);
console.timeEnd("run");
