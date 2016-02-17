#! /usr/bin/env node
var base = require.resolve('./config.sample.js');
try{
    require('child_process').execSync("cp -n "+base+" /usr/etc/fast-monitor.js");
}
catch(e){
    console.log('Installation failed :(');
    console.log('\nRun this command manually:\n\n cp -n '+base+' /usr/etc/fast-monitor.js\n');
}