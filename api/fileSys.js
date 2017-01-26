const fs = require('fs');
fs.unlink("testRead.txt", (error) => {
    if (error) {
        console.log('we have error');
    }
    console.log('file deleted');
})
