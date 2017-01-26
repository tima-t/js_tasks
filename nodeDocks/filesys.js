var fs = require('fs');

fs.rename('./tmp/hello', './tmp/world', (err,success) => {
  if (err){
    console.log(err);
    fs.stat('/tmp/world', (err, stats) => {
      if (err) console.log('error ');
      console.log(`stats: ${JSON.stringify(stats)}`);
    }); 
  }
  else{
      console.log(success);
  }
});