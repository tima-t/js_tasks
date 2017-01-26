// Creates a zero-filled Buffer of length 10.
const buf1 = Buffer.alloc(10, 18);
const buf2 = Buffer.from('ABC');

for (var num of buf1) {
    console.log(num);
}

console.log(buf1);