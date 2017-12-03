//part1
let [di, dj, seg_len, seg_passed, i, j, input] = [1, 0, 1, 0, 0, 0, 289326];

for (let k = 0; k < input-1; ++k){
    [i, j, seg_passed] = [i+=di, j+=dj, seg_passed+1];
    if(seg_passed == seg_len) {
        seg_passed = 0;

        let buffer = di;
        di = -dj;
        dj = buffer;

        if(dj == 0) ++seg_len;
    }
}

console.log(Math.abs(i) + Math.abs(j));

