FROM nginx:latest

RUN apt update;
RUN apt install cron certbot python3-certbot-nginx procps -y
RUN rm /var/log/nginx/*
RUN mkdir /etc/nginx/templates && \
    mkdir /etc/nginx/sites-enabled
COPY nginx.conf /etc/nginx/nginx.conf
COPY entrypoint.sh /entrypoint.sh
# CMD cron && nginx -g "daemon off;" && tail -f /var/log/nginx/access.log
# ENTRYPOINT ["/entrypoint.sh"]
CMD ["/entrypoint.sh"]

