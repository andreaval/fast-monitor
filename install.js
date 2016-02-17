#! /usr/bin/env node
try{
    require('child_process').execSync("cp -n config/config.sample.js config/default.js");
}
catch(e){
    console.log(e);
}