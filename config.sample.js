module.exports = {
    commands: [
        ["ps -A | grep node","Nodejs process"],
        //["cat /etc/*-release | tail -n 1","Distro"],
        ["uname -a","System information"],
        ["date","System date"],
        ["df -h","Disk space"],
        //["free -h","Ram"],
        //["nmap -sT localhost","Open ports"],
        ["httpd -v","Apache"],
        ["php -v","PHP"],
        //["mysql --version","Mysql"],
        //["head -4 /var/www/html/phpmyadmin/ChangeLog","PhpMyadmin"],
        //["postconf -d mail_version","Postfix"],
        //["du -h -d 1 /backup/","Last day backup"],
        //["crontab -l","User cron"]
    ],
    auth: {
        ip: "",
        password: ""
    },
    port: process.env.PORT || 1800
};