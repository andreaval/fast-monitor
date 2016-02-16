var cfg = {
    commands: [
        ["ps -A | grep node","Node process"],
        //["cat /etc/*-release | tail -n 1",""],
        ["uname -a","System information"],
        ["date","System date"],
        ["df -h","Disk space"],
        //["free -h",""],
        //["nmap -sT localhost",""],
        ["httpd -v","Apache"],
        ["php -v",""],
        //["mysql --version",""],
        //["head -4 /var/www/html/phpmyadmin/ChangeLog",""],
        //["postconf -d mail_version",""],
        //["du -h -d 1 /backup/",""],
        //["crontab -l",""]
    ],
    auth: {
        ip: "",
        password: ""
    },
    port: process.env.PORT || 1800
};
module.exports = cfg;