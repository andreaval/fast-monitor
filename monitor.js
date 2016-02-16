#!/usr/bin/env node
'use strict';
try{
    var cfg = require('./config');
}
catch(e){
    console.log('Fast-Monitor ERROR: config.js file not found');
    process.exit(1);
}
var url = require('url');

exports.start = require("http").createServer(function(req,response){
    var query = url.parse(req.url,true).query;
    delete require.cache[require.resolve('./config')];
    var cfg = require('./config');
    response.writeHeader(200, {"Content-Type": "text/html"});
    if(cfg.auth.ip || cfg.auth.password){
        var isAuth = false;
        if(cfg.auth.ip){
            var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
            isAuth = (ip.indexOf(cfg.auth.ip)===0 || ip.indexOf('::ffff:'+cfg.auth.ip)===0);
        }
        if(cfg.auth.password && !isAuth){
            isAuth = (('p' in query) && query.p!=="" && query.p===cfg.auth.password);
        }
        if(!isAuth){
            response.write('Not authorized!');
            response.end();
            return;
        }
    }
    response.write('<style>div{border-top:1px solid #999}b{background:#cdd;display:block;padding:0 .2em}i{font-weight:normal}</style>');
    cfg.commands.forEach(function(cmd){
        response.write('<div>');
        var desc = (cmd[1]==="") ? "" : " <i>("+cmd[1]+")</i>";
        response.write('<b>'+cmd[0]+desc+'</b>');
        try{
            var out = require('child_process').execSync(cmd[0]);
            response.write('<pre>'+out.toString()+'</pre>');
        }
        catch(e){
            response.write('<pre>'+e+'</pre>');
        }
        response.write('</div>');
    });
    response.end();
}).listen(cfg.port);
console.log("Fast-Monitor running on "+cfg.port);