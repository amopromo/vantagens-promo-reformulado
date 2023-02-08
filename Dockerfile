FROM amopromo/php8:latest 

MAINTAINER  Anakin Pendragon
COPY config/site.conf /etc/nginx/conf.d

# Add application
WORKDIR /var/www/html
COPY --chown=nobody . /var/www/html/

EXPOSE 8080
CMD ["/usr/bin/start.sh" ]

