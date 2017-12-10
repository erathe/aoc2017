const fs = require('fs');
console.time("run");
const inplengths = fs.readFileSync('./input10').toString('utf-8').trim().split('');
const trail = [17, 31, 73, 47, 23];
const inputArray = Array.from(Array(256).keys());

const convertToASCII = arr => arr.map((curr) => curr.charCodeAt(0));
const chunk = (arr, gSize) => arr.reduce((acc, curr, i, ar) => !(i % gSize) ? acc.concat([ar.slice(i,i+gSize)]) : acc, []);
const XOR = arr => arr.map(row => row.reduce((acc, curr) => acc^curr), 0);
const convertToHex = arr => arr.map(num => num.toString(16).length === 2 ? num.toString(16) : '0' + num.toString(16));
const addTrail = arr => arr.concat(trail);

const _xTimesList = (arr, num) => {
    const conc = [...arr];
    while(num--){
        arr = arr.concat(conc);
    }
    return arr;
}

const fillArray = (length, inpArr, startindex) => {
    let [newArr, i] = [[], 0];
    while(length--){
        newArr.push(inpArr[startindex++ % inpArr.length]);
    }
    return newArr;
}

const generateList = (inputArray, ascii) => {
    let [skipSize, startIndex, inpArray] = [0, 0, [...inputArray]];
    for(elem of ascii){
        let i = 0, inc = elem, b = startIndex;
        const arrayToBeSwitched = fillArray(elem, inpArray, startIndex).reverse();
        while(elem--){
            inpArray[b++ % inpArray.length] = arrayToBeSwitched[i++];
        }
        startIndex = (startIndex + inc + skipSize++);
    }
    return inpArray;
}
const asciiNumbers = convertToASCII(inplengths).map(Number);
const inputLengths = addTrail(asciiNumbers);
const asciiList = _xTimesList(inputLengths, 63);
const reslist = generateList(inputArray, asciiList);
const chunkedArr = chunk(reslist, 16);
const XORed = XOR(chunkedArr);
const HexNums = convertToHex(XORed);

console.log(HexNums.join(''));
console.timeEnd("run");
