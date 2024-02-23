#!/bin/bash

cron 2>&1 &
touch /var/log/syslog
user=$(whoami)
expression='echo ${date "+%FT%H:%M:%S" } hello >> /var/log/syslog'
(crontab -l -u $user 2>/dev/null; echo "* * * * * $expression") | crontab -u $user -;


nginx -g 'daemon off;'

wait -n
echo "done"

