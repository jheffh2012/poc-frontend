FROM nginx

COPY dist/cluster-front/ /var/www/

WORKDIR /var/www/