const fs = require('fs');
const inplengths = fs.readFileSync('./input10').toString('utf-8').trim().split(',').map(Number);
const inputArray = Array.from(Array(256).keys());

const fillArray = (length, inpArr, startindex) => {
    let [newArr, i] = [[], 0];
    while(length--){
        newArr.push(inpArr[startindex++ % inpArr.length]);
    }
    return newArr;
}

const generateList = (inputArray, inpLengths) => {
    let [skipSize, startIndex, inpArray] = [0, 0, [...inputArray]];
    for(elem of inplengths){
        let i = 0, inc = elem, b = startIndex;
        const arrayToBeSwitched = fillArray(elem, inpArray, startIndex).reverse();
        while(elem--){
            inpArray[b++ % inpArray.length] = arrayToBeSwitched[i++];
        }
        startIndex = (startIndex + inc + skipSize++);
    }
    return inpArray;
}

const resList = generateList(inputArray, inplengths);
console.log(resList[0] * resList[1]);

// input[i] = 0
// while (max-- > 0)
//     input[++i % input.length]++
