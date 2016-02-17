#! /usr/bin/env node
try{
    var o = require('child_process').execSync("cp -n config.sample.js config.js");
    console.log(o);
}
catch(e){
    console.log('Config.js exists, do not overwrite.')
}