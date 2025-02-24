# Comandos Básicos do Docker

## docker ps

O comando ```docker ps``` serve para listar os containers dockers. Quando utilizado sem nenhuma opção, ele lista os containers que estão em execução.

Sintaxe:

```
docker ps [OPTIONS]
```

Exemplo do comando ```docker ps```:
```
$ docker ps
CONTAINER ID   IMAGE     COMMAND       CREATED         STATUS         PORTS     NAMES
64c0dbfe4f12   ubuntu    "/bin/bash"   3 seconds ago   Up 3 seconds             beautiful_feistel
```

Para listar todos os containers (inclusive os que não estão em execução), utilize a opção ```--all``` ou ```-a```.

Exemplo do comando ```docker ps``` com a opção ```--all``` ou ```-a```:
```
$ docker ps -a
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS                      PORTS     NAMES
64c0dbfe4f12   ubuntu         "/bin/bash"              2 minutes ago   Exited (0) 2 minutes ago              beautiful_feistel
db6e499cff79   omnetpp        "/bin/bash start.bash"   5 hours ago     Exited (130) 5 hours ago              omnetpp
94d202ad7701   ubuntu:22.04   "/bin/bash"              23 hours ago    Exited (127) 23 hours ago             adoring_faraday
6d8cc6a8bd74   ubuntu:22.04   "/bin/bash"              23 hours ago    Exited (0) 23 hours ago               unruffled_hoover
a6fb4a8bad75   ubuntu         "/bin/bash"              23 hours ago    Exited (130) 23 hours ago             clever_bohr
```

Ao listar os containers, são exibidas as seguintes informações: **ID do container (CONTAINER ID)**, **Imagem (IMAGE)**, **Comando (COMMAND)**, **Status (STATUS)**, **Portas (PORTS)** e **Nomes (NAMES)**.

## docker pull

O comando ```docker pull``` serve para baixar imagens docker a partir de um registro de containers. O comando ```docker pull``` deve ser obrigatoriamente seguido do **nome da imagem (IMAGE)** do container.

Em relação ao registro de containers, o mais utilizado é o [Docker Hub](https://hub.docker.com/), nele é possível baixar imagens das principais distribuições linux, da runtime das diferentes linguagens de programação, banco de dados, servidores web, dentre outros. Para saber mais, acesse a [seção de imagens oficiais do DockerHub](https://hub.docker.com/search?badges=official) e veja as diferentes imagens que existem.

Sintaxe:
```
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

Exemplo do comando ```docker pull```:
```
$ docker pull debian
Using default tag: latest
latest: Pulling from library/debian
a492eee5e559: Pull complete 
Digest: sha256:4abf773f2a570e6873259c4e3ba16de6c6268fb571fd46ec80be7c67822823b3
Status: Downloaded newer image for debian:latest
docker.io/library/debian:latest
```

## docker search

O comando ```docker search``` serve para pesquisar por imagens no [Docker Hub](https://hub.docker.com/).

Sintaxe:
```
docker search [OPTIONS] TERM
```

Exemplo do comando ```docker search```:
```
$ docker search mysql
NAME                   DESCRIPTION                                     STARS     OFFICIAL
mysql                  MySQL is a widely used, open-source relation…   15658     [OK]
bitnami/mysql          Bitnami container image for MySQL               130       
circleci/mysql         MySQL is a widely used, open-source relation…   31        
bitnamicharts/mysql    Bitnami Helm chart for MySQL                    0         
cimg/mysql                                                             3         
ubuntu/mysql           MySQL open source fast, stable, multi-thread…   67        
linuxserver/mysql      A Mysql container, brought to you by LinuxSe…   41        
google/mysql           MySQL server for Google Compute Engine          25        
elestio/mysql          Mysql, verified and packaged by Elestio         1         
docksal/mysql          MySQL service images for Docksal - https://d…   0         
alpine/mysql           mysql client                                    3         
mysql/mysql-server     Optimized MySQL Server Docker images. Create…   1026      
jumpserver/mysql                                                       1         
datajoint/mysql        MySQL image pre-configured to work smoothly …   2         
mysql/mysql-router     MySQL Router provides transparent routing be…   28        
ilios/mysql            Mysql configured for running Ilios              1         
mirantis/mysql                                                         0         
corpusops/mysql        https://github.com/corpusops/docker-images/     0         
mysql/mysql-cluster    Experimental MySQL Cluster Docker images. Cr…   100       
vulhub/mysql                                                           1         
mysql/mysql-operator   MySQL Operator for Kubernetes                   1         
vitess/mysql           Lightweight image to run MySQL with Vitess      1         
nasqueron/mysql                                                        1         
cbioportal/mysql       This repository hosts MySQL database images …   0         
encoflife/mysql                                                        0         
```

## docker run

O comando ```docker run``` serve para criar e executar um novo container a partir de uma imagem existente. Este comando deve ser obrigatoriamente seguido do **nome da imagem (IMAGE)** do container. Caso a imagem não tenha sido baixada, ele realizará o download dessa imagem. Quando executado sem nenhuma opção, ele criará a imagem e executará o seu comando padrão da imagem. Como muitas imagens não possuem comando padrão, a execução deste comando sem nenhuma opção pode resultar na rápida criação, execução e término de execução do container.

Sintaxe:
```
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

Exemplo do comando ```docker run```:
```
$ docker run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
e6590344b1a5: Pull complete 
Digest: sha256:e0b569a5163a5e6be84e210a2587e7d447e08f87a0e90798363fa44a0464a1e8
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

Para que o container não termine a sua execução, execute com as opções ```--interactive``` e ```--tty``` ou ```-it```. Dessa forma, em containers que não possuem comando padrão, como distribuições Linux, será possível acessar o seu terminal.

Exemplo do comando ```docker run``` com ```-it```:
```
$ docker run -it debian
root@59ca3c8f7946:/#
```

## docker start

O comando ```docker start``` serve para inicializar um container já existente. Caso o container não exista, uma mensagem de erro será exibida. Em containers que não possuírem comandos padrões, a execução deste comando pode resultar na rápida execução e término de execução do container. O comando start deve ser obrigatóriamente seguído do **Id do container (CONTAINER ID)** ou **Nome (NAMES)**.

Sintaxe:
```
docker start [OPTIONS] CONTAINER [CONTAINER...]
```

Exemplo do comando ```docker start```:
```
$ docker start 07fe5a1fd534
07fe5a1fd534
```

## docker exec

O comando ```docker exec``` serve para executar um comando dentro de um container que já está em execução. Caso o container não esteja em execução, uma mensagem de erro será exibida. Este comando deve ser seguido do **Id do container (CONTAINER ID)** ou **nome do container (NAMES)**, e depois do comando a ser executado. Quando executado sem nenhuma opção, o comando será executado sem nenhuma entrada, e exibirá a saída do comando executado. Enquanto o comando executado não estiver terminado, o Docker não devolverá o shell.

Sintaxe:
```
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

Exemplo do comando ```docker exec```:
```
$ docker exec 07fe5a1fd534 apt full-upgrade -y

WARNING: apt does not have a stable CLI interface. Use with caution in scripts.

Reading package lists...
Building dependency tree...
Reading state information...
Calculating upgrade...
The following packages will be upgraded:
  libgnutls30 libtasn1-6
2 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 1454 kB of archives.
After this operation, 8192 B disk space will be freed.
Get:1 http://deb.debian.org/debian-security bookworm-security/main amd64 libtasn1-6 amd64 4.19.0-2+deb12u1 [48.6 kB]
Get:2 http://deb.debian.org/debian-security bookworm-security/main amd64 libgnutls30 amd64 3.7.9-2+deb12u4 [1405 kB]
debconf: delaying package configuration, since apt-utils is not installed
Fetched 1454 kB in 0s (6298 kB/s)
(Reading database ... 6089 files and directories currently installed.)
Preparing to unpack .../libtasn1-6_4.19.0-2+deb12u1_amd64.deb ...
Unpacking libtasn1-6:amd64 (4.19.0-2+deb12u1) over (4.19.0-2) ...
Setting up libtasn1-6:amd64 (4.19.0-2+deb12u1) ...
(Reading database ... 6089 files and directories currently installed.)
Preparing to unpack .../libgnutls30_3.7.9-2+deb12u4_amd64.deb ...
Unpacking libgnutls30:amd64 (3.7.9-2+deb12u4) over (3.7.9-2+deb12u3) ...
Setting up libgnutls30:amd64 (3.7.9-2+deb12u4) ...
Processing triggers for libc-bin (2.36-9+deb12u9) ...
```

Para que o comando possa receber entrada, execute com as opções ```--interactive``` e ```--tty``` ou ```-it```. Dessa forma, será possível que o programa que esteja sendo executado no container possa ler da entrada padrão.

Exemplo do comando ```docker exec```  com ```-it```:
```
$ docker exec -it 07fe5a1fd534 bash
root@07fe5a1fd534:/#
```

Para executar um comando em segundo plano, sem mostrar a sua saída, execute com as opções ```--detach``` ou ```-d```.

Exemplo do comando ```docker exec```  com ```-d```:
```
$ docker exec -d 07fe5a1fd534 apt full-upgrade -y
```

## docker rm

O comando ```docker rm``` serve para apagar um container existente. Caso o container esteja em execução, uma mensagem de erro será exibida. Este comando deve ser seguido do **Id do container (CONTAINER ID)** ou **nome do container (NAMES)**.

Sintaxe:
```
docker rm [OPTIONS] CONTAINER [CONTAINER...]
```

Exemplo de execução do comando ```docker rm```:
```
$ docker rm 07fe5a1fd534
07fe5a1fd534
```