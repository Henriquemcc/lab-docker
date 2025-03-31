# Criando e Executando Containers Docker

Neste STEP você aprenderá como criar, executar, se conectar, parar e deletar containers Docker. Para isso, utilizaremos a imagem do Nginx como exemplo.

## STEP 1.1 - Listando os containers em execução

Primeiro, iremos listar os containers Docker que estão em execução. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker ps
```

Caso não tenha nenhum container em execução, será mostrada a seguinte saída:

```
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

## STEP 1.2 - Baixando imagem do container Docker

Agora, iremos baixar a imagem do servidor web Nginx. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker pull nginx
```

Caso a imagem não tenha sido baixada, será mostrada a seguinte saída:

```
docker pull nginx
Using default tag: latest
latest: Pulling from library/nginx
6e909acdb790: Already exists 
5eaa34f5b9c2: Pull complete 
417c4bccf534: Pull complete 
e7e0ca015e55: Pull complete 
373fe654e984: Pull complete 
97f5c0f51d43: Pull complete 
c22eb46e871a: Pull complete 
Digest: sha256:124b44bfc9ccd1f3cedf4b592d4d1e8bddb78b51ec2ed5056c52d3692baebc19
Status: Downloaded newer image for nginx:latest
docker.io/library/nginx:latest
```

A imagem foi baixada do Docker Hub. Para mais informações sobre a imagem baixada, acesse: https://hub.docker.com/_/nginx

