var cfg = {};

cfg.commands = [
                "ps -A | grep node",
                //"cat /etc/*-release | tail -n 1",
                "uname -a",
                "date",
                "df -h",
                //"free -h",
                //"nmap -sT localhost",
                //"httpd -v",
                //"php -v",
                //"mysql --version",
                //"head -4 /var/www/html/phpmyadmin/ChangeLog",
                //"postconf -d mail_version",
                //"du -h -d 1 /backup/",
                "crontab -l"
                ];
cfg.reserved = "";
cfg.password = "";
cfg.port = process.env.WEB_PORT || 1800;
module.exports = cfg;