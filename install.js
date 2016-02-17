#! /usr/bin/env node
var shell = require("shelljs");

shell.exec("cp -n config.sample.js config.js");