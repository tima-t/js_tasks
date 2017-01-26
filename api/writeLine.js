var fs = require('fs');


var logger = fs.createWriteStream('log.txt', {
  flags: 'a' // 'a' means appending (old data will be preserved)
})


// fs.readFile('sample.txt', function(err, data) {
//     if(err) throw err;
//     var array = data.toString().split("\n");
//     for(i of array) {
//       logger.write(`logger ${i} \n`);
//     }

//     logger.end();
// });
 // append string to your file
// logger.write('more data \n') // again
// logger.write('and more') // again

var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('sample.txt')
});

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
});