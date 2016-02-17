#! /usr/bin/env node
try{
    require('child_process').execSync("cp -n config.sample.js /usr/etc/fast-monitor.js");
}
catch(e){
    console.log(e);
}
console.log('\nRun command: cp -n /usr/lib/node_modules/fast-monitor/config.sample.js /usr/etc/fast-monitor.js');