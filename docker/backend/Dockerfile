FROM php:8.2-apache

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y libzip-dev

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN docker-php-ext-install pdo pdo_mysql zip


RUN mkdir /app
WORKDIR /app

USER 1000

ENTRYPOINT [ "php", "artisan", "serve", "--host", "0.0.0.0" ]
