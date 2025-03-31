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

Caso a imagem não tenha sido baixada, será mostrada uma saída parecida com esta:

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

## STEP 1.3 - Criando e executando o container Docker

Nesta próxima etapa, criaremos o container Docker, com a imagem baixada. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker run --interactive --tty --publish 80:8080 nginx
```

A opção ```--interactive``` (ou ```-i```) força o container executar de forma interativa.

A opção ```--tty``` (ou ```-t```) aloca um pseudo tty.

E a opção ```--publish``` (ou ```-p```) realiza o mapeamento das portas especificadas.

Ao executar este comando, será mostrada uma saída parecida com esta:

```
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2025/03/31 18:22:52 [notice] 1#1: using the "epoll" event method
2025/03/31 18:22:52 [notice] 1#1: nginx/1.27.4
2025/03/31 18:22:52 [notice] 1#1: built by gcc 12.2.0 (Debian 12.2.0-14) 
2025/03/31 18:22:52 [notice] 1#1: OS: Linux 6.13.8-200.fc41.x86_64
2025/03/31 18:22:52 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
2025/03/31 18:22:52 [notice] 1#1: start worker processes
2025/03/31 18:22:52 [notice] 1#1: start worker process 29
2025/03/31 18:22:52 [notice] 1#1: start worker process 30
2025/03/31 18:22:52 [notice] 1#1: start worker process 31
2025/03/31 18:22:52 [notice] 1#1: start worker process 32
2025/03/31 18:22:52 [notice] 1#1: start worker process 33
2025/03/31 18:22:52 [notice] 1#1: start worker process 34
2025/03/31 18:22:52 [notice] 1#1: start worker process 35
2025/03/31 18:22:52 [notice] 1#1: start worker process 36
```

Para testar o funcionamento do Nginx, em um navegador web (na mesma máquina), acesse: http://localhost:8080

Caso o Nginx esteja executando corretamente, será exibida uma página com a mensagem: "Welcome to nginx!"

Para terminar a execução, digite o comando: Control + C.

## STEP 1.4 - Criando e executando o container Docker (de forma silenciosa)

Nesta etapa, iremos criar e executar o container Docker acima, para rodar em segundo plano, desalocando do terminal. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker run --detach --publish 80:8080 nginx
```

A opção ```--detach``` roda o container em segundo plano e imprime o ID do container.

Ao executar o comando, será mostrada na saída um conjunto de letras e números como este:

```
3d12b129343c56fd95ee1e11e8b1ec3e57a0b02ee3a5eadaa3265b099a24ac4d
```

## STEP 1.5 - Listando os containers em execução

Nesta etapa, iremos novamente listar os containers em execução.  Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker ps
```

Como nós temos um container em execução, será mostrada uma saída parecida com esta:

```
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS         PORTS                                             NAMES
3d12b129343c   nginx     "/docker-entrypoint.…"   10 minutes ago   Up 7 seconds   80/tcp, 0.0.0.0:80->8080/tcp, [::]:80->8080/tcp   festive_murdock
```

## STEP 1.6 - Parando a execução do container

Nesta etapa, iremos parar a execução do container Docker criado anteriormente. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker stop <ID_DO_CONTAINER>
```

O ID_DO_CONTAINER é o conjunto de letas e números mostrado em baixo de ```CONTAINER ID``` da saída do comando do [step 1.5](#step-15---listando-os-containers-em-execução).

## STEP 1.7 - Iniciando novamente o container

Nesta etapa, iremos iniciar o container que tinha sido parado no step anterior. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker start <ID_DO_CONTAINER>
```

O ID_DO_CONTAINER é o conjunto de letas e números mostrado em baixo de ```CONTAINER ID``` da saída do comando do step [step 1.5](#step-15---listando-os-containers-em-execução).

Para testar o funcionamento do Nginx, em um navegador web (na mesma máquina), acesse: http://localhost:8080

## STEP 1.8 - Reiniciando o container

Nesta etapa, iremos reiniciar o container. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker restart <ID_DO_CONTAINER>
```

O ID_DO_CONTAINER é o conjunto de letas e números mostrado em baixo de ```CONTAINER ID``` da saída do comando do step [step 1.5](#step-15---listando-os-containers-em-execução).

## STEP 1.9 - Parando a execução do container

Agora, iremos novamente parar a execução do container. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker stop <ID_DO_CONTAINER>
```

O ID_DO_CONTAINER é o conjunto de letas e números mostrado em baixo de ```CONTAINER ID``` da saída do comando do step [step 1.5](#step-15---listando-os-containers-em-execução).

## STEP 1.10 - Deletando o container

Nesta etapa, iremos deletar o container. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker rm <ID_DO_CONTAINER>
```

O ID_DO_CONTAINER é o conjunto de letas e números mostrado em baixo de ```CONTAINER ID``` da saída do comando do [step 1.5](#step-15---listando-os-containers-em-execução).

## Step 1.11 - Explorando o Docker Hub

Nesta etapa, iremos explorar as imagens de container disponíveis no Docker Hub. Para isso, acesse em um navegador web: https://hub.docker.com/ e na barra de pesquisa digite a imagem desejada.

Exemplos de imagens disponíveis:

Distribuições Linux: "Ubuntu", "Fedora", "Debian", "Oracle Linux", "Alpine", "CentOS".

Linguagens de Programação: "Python", "Node", "OpenJDK", "GoLang", "PHP".

Banco de Dados: "MySQL", "MariaDB", "Postgres".

Servidores Web: "Apache", "Nginx".

Outros: "WordPress".