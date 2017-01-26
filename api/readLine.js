// var fs = require('fs');
// var readline = require('readline');

// var filename = "sample.txt";
// readline.createInterface({
//     input: fs.createReadStream(filename),
//     terminal: false
// }).on('line', function(line) {
//   console.log(line);
//    if(line == "asd") return;
// });

// var fs = require('fs');
// var rl = require("readline");
// fs.readFile('sample.txt', function(err, data) {
//     if(err) throw err;
//     var array = data.toString().split("\n");
//     for(i of array) {
//       console.log(i);
//     }
// });
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


// rl.question('What is your favorite food?', (answer) => {
//   console.log(`Oh, so your favorite food is ${answer}`);
//   rl.close()
// });

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('guess> ');
rl.prompt();
rl.on('line', function(line) {
    if (line === "right") rl.close();
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});