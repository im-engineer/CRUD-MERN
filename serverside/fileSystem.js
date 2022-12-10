var fs = require('fs')

fs.unlink('sss.txt',function(err){
    if(err) throw err;
    console.log('File del*!');
})


//for delete file