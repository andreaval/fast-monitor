#! /usr/bin/env node
try{
    var o = require('child_process').execSync("cp -n config.sample.js /usr/local/etc/fast-monitor.js");
    console.log(o);
}
catch(e){
    console.log('Config file exists, do not overwrite.');
}