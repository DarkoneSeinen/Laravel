# Docker Configuration Backup

Configuración de Docker guardada el 24 de noviembre de 2025.

## docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: laravel_app
    restart: unless-stopped
    working_dir: /var/www
    volumes:
      - ./:/var/www
    environment:
      - DB_HOST=db
      - DB_PORT=3306
      - DB_DATABASE=laravel
      - DB_USERNAME=laravel
      - DB_PASSWORD=laravel_password
    depends_on:
      - db
    networks:
      - laravel

  nginx:
    image: nginx:alpine
    container_name: laravel_nginx
    restart: unless-stopped
    ports:
      - "8000:80"
    volumes:
      - ./:/var/www
      - ./docker/nginx.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - app
    networks:
      - laravel

  db:
    image: mysql:8.0
    container_name: laravel_db
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: laravel
      MYSQL_ROOT_PASSWORD: root_password
      MYSQL_PASSWORD: laravel_password
      MYSQL_USER: laravel
    ports:
      - "3306:3306"
    volumes:
      - dbdata:/var/lib/mysql
    networks:
      - laravel

  phpmyadmin:
    image: phpmyadmin:latest
    container_name: laravel_phpmyadmin
    restart: unless-stopped
    environment:
      PMA_HOST: db
      PMA_USER: laravel
      PMA_PASSWORD: laravel_password
      PMA_ROOT_PASSWORD: root_password
    ports:
      - "8080:80"
    depends_on:
      - db
    networks:
      - laravel

volumes:
  dbdata:
    driver: local

networks:
  laravel:
    driver: bridge
```

## Dockerfile

```dockerfile
FROM php:8.3-fpm

# Instalar dependencias del sistema
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libonig-dev \
    locales \
    zip \
    jpegoptim optipng pngquant gifsicle \
    unzip \
    git \
    curl \
    mariadb-client \
    --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Instalar extensiones PHP
RUN docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Establecer el directorio de trabajo
WORKDIR /var/www

# Copiar los archivos del proyecto
COPY . .

# Crear directorios necesarios
RUN mkdir -p bootstrap/cache storage/logs storage/framework/cache storage/framework/sessions storage/framework/views && \
    chmod -R 755 bootstrap/cache storage

# Instalar dependencias de Composer
RUN composer install --no-dev --optimize-autoloader

# Crear usuario para Laravel
RUN useradd -m -u 1000 laravel && chown -R laravel:laravel /var/www

USER laravel

EXPOSE 9000

CMD ["php-fpm"]
```

## docker/nginx.conf

```nginx
server {
    listen 80;
    index index.php index.html;
    root /var/www/public;

    location ~ \.php$ {
        try_files $uri =404;
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass app:9000;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param PATH_INFO $fastcgi_path_info;
        
        # Pass original headers from Codespaces proxy
        fastcgi_param HTTP_X_FORWARDED_FOR $http_x_forwarded_for;
        fastcgi_param HTTP_X_FORWARDED_PROTO $http_x_forwarded_proto;
        fastcgi_param HTTP_X_FORWARDED_HOST $http_x_forwarded_host;
        fastcgi_param HTTP_X_ORIGINAL_URI $http_x_original_uri;
        fastcgi_param HTTP_HOST $http_x_forwarded_host;
    }

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
}
```
