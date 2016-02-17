FAST-MONITOR
============

Fast-monitor executes the configured commands and returns the output in HTML format.
Quick and easy!

Install
---------
```javascript
npm install fast-monitor -g
```

Setup
---------
Edit the '/usr/local/etc/fast-monitor.js' file to add custom commands
```javascript
commands: [
        ["uname -a","System information"],
        ["date","System date"],
        ["...","..."],
]
```

Run
---------
```
fast-monitor
```

Monitor
---------
Open the following url in the browser:
```
http://your-server-address:1800
```