/*
 * Fast-Monitor
 * Version 1.0.0
 * Copyright (c) 2016 Andrea Vallorani, contributors
 * Licensed under the MIT license.
 * https://github.com/andreaval/fast-monitor/blob/master/LICENSE-MIT
 */
'use strict';
var cfg = require('./config.json');
var url = require('url');

require("http").createServer(function(req,response){
    var query = url.parse(req.url,true).query;
    if(('r' in query)){
        delete require.cache[require.resolve('./config.json')];
        cfg = require('./config.json');
    }
    response.writeHeader(200, {"Content-Type": "text/html"});
    if(cfg.reserved){
        var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
        var auth = (('p' in query) && query.p!=="" && query.p===cfg.password) || ip.indexOf(cfg.reserved)===0 || ip.indexOf('::ffff:'+cfg.reserved)===0;
        if (!auth){
            response.write('Not authorized!');
            response.end();
            return;
        }
    }
    response.write('<style>div{border-top:1px solid #999}i{background:#cdd;display:block;padding:0 .2em}</style>');
    cfg.commands.forEach(function(cmd){
        response.write('<div>');
        response.write('<i>'+cmd+'</i>');
        try{
            var out = require('child_process').execSync(cmd);
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