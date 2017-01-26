// try {
//     const m = 1;
//     const n = m + z;
// } catch (err) {
//     console.log(err.message)
// }

const fs = require('fs');
fs.readFile('testRead.txt', (err, data) => {
    if (err) {
        console.error('There was an error reading the file!', err);
        return;
    }
    // Otherwise handle the data
    console.log(data.toString());
});