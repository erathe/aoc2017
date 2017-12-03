//part2
let [di, dj, seg_len, seg_passed, i, j, input] = [1, 0, 1, 0, 0, 0, 289326];
let sums = { '0,0': 1 };
for (let k = 0; k < input-1; ++k){
    [i, j, seg_passed] = [i+=di, j+=dj, seg_passed+1];
    const sum = generateSum(i, j, sums);
    sums[`${i},${j}`] = sum
    if(sum > input) {
        console.log(sum)
        break;
    }

    if(seg_passed == seg_len) {
        seg_passed = 0;
        let buffer = di;
        di = -dj;
        dj = buffer;

        if(dj == 0) ++seg_len;
    }
}

function generateSum(i, j, sums) {
const sum = (i, j) => sums[`${i},${j}`] || 0;
    return (
        sum(i+1,j) +
        sum(i+1,j+1) +
        sum(i+1,j-1) +
        sum(i,j+1) +
        sum(i,j-1) +
        sum(i-1, j+1) +
        sum(i-1, j) +
        sum(i-1, j-1)
    )
}

