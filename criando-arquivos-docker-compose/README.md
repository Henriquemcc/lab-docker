# Criando Arquivos Docker Compose

Neste STEP você aprenderá a criar arquivos Docker Compose. Para isso, utilizaremos a imagem do Wordpress como exemplo.

## STEP 4.1 - Entendendo o problema

Primeiro, iremos entender o problema que o Docker Compose resolve. Imaginamos que tivéssemos uma aplicação Wordpress que depende de um banco de dados MySQL. Para que pudéssemos subir esses containers seria necessário subir manualmente o MySQL e o Wordpress.

Para subirmos o MySQL, teríamos que utilizar o seguinte comando:

```
docker run --detach --name db --env "MYSQL_DATABASE=exampledb" --env "MYSQL_USER=exampleuser" --env "MYSQL_PASSWORD=examplepass" --env "MYSQL_RANDOM_ROOT_PASSWORD='1'" --volume "db:/var/lib/mysql" mysql:8.0
```

E para subirmos o Wordpress, teríamos que utilizar o seguinte comando:

```
docker run --detach --name wordpress --env "WORDPRESS_DB_HOST=db" --env "WORDPRESS_DB_USER=exampleuser" --env "WORDPRESS_DB_PASSWORD=examplepass" --env "WORDPRESS_DB_NAME=exampledb" --volume "wordpress:/var/www/html" --publish "8080:80" wordpress:6.7.2-php8.1-apache
```

E para aplicações que demandassem outros containers, haveriam mais comandos para serem executados. Dessa forma, a dificuldade para subir aplicações com múltiplos container seria gigantesca.

Alguém poderia sugerir a criação de scripts shell para automatizar o deploy desses containers. O problema dessa solução é que ela seria difícil de manter, uma vez que cada programador tem a sua forma de escrever scripts, resultando na dificuldade da compreensão e da manutenibilidade.

A solução para esse problema é a criação de arquivos declarativos no formato Docker Compose.