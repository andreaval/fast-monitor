module.exports = {
    commands: [
        ["ps -A | grep node","Nodejs process"],
        //["cat /etc/*-release | tail -1","Distro"],
        ["uname -a","System information"],
        ["date","System date"],
        ["df -h","Disk space"],
        ["free -h","Ram"],
        //["nmap -sT localhost","Open ports"],
        ["httpd -v","Apache"],
        ["php -v","PHP"],
        //["mysql --version","Mysql"],
        //["head -4 /var/www/html/phpmyadmin/ChangeLog | tail -1","PhpMyadmin"],
        //["postconf -d mail_version","Postfix"],
        //["du -h -d 1 /backup/","Backup size"],
        //["find /backup/ -mtime 0 -type f -printf \"%f\\n\"| tail -n 10","Last 10 backup files"],
        //["crontab -l","User cron"]
    ],
    auth: {
        ip: "",
        password: ""
    },
    port: process.env.PORT || 1800
};