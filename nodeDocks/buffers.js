//buffer with 10 0 bits
var buf1 = new Buffer.alloc(10);

//buffer with 10 1 bits
var buf2 = new Buffer.alloc(10,1);

//buffer with 10 undefined bits
var buf3 = new Buffer.allocUnsafe(10);

// Creates a Buffer containing [0x1, 0x2, 0x3].
const buf4 = Buffer.from([1, 2, 3]);

// Creates a Buffer containing ASCII bytes [0x74, 0x65, 0x73, 0x74].
const buf5 = Buffer.from('test');

// Creates a Buffer containing UTF-8 bytes [0x74, 0xc3, 0xa9, 0x73, 0x74].
const buf6 = Buffer.from('tést', 'utf8');

console.log(buf1);

console.log(buf2);

console.log(buf3);

console.log(buf4);

console.log(buf5);

console.log(buf6);