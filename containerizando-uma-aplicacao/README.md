# Containerizando uma Aplicação

Neste STEP você aprenderá como criar uma imagem de container para uma aplicação já existente. Para isso utilizaremos de uma aplicação escrita em TypeScript para Deno.

## STEP 5.1 - Baixando a aplicação

A aplicação está disponível em na pasta [aplicacao](aplicacao), dentro da pasta que contém este arquivo README.

Para baixá-la, clone este repositório git ou baixe o zip dos arquivos da branch main.

### Clonando o repositório

Em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
git clone git@github.com:webtech-network/lab-docker.git
```

Ou

```
git clone https://github.com/webtech-network/lab-docker.git
```

### Baixando o arquivo zip da branch main

Acesse o link: https://github.com/webtech-network/lab-docker/archive/refs/heads/main.zip, baixe e extraia o arquivo ```main.zip```.

## STEP 5.2 - Executando a aplicação

Na pasta [aplicacao](aplicacao), abra um terminal (ou Prompt de Comando) e digite o seguinte comando:

```
deno run --allow-net --allow-read ./main.ts
```

Para testar o funcionamento da aplicação, em um navegador web (na mesma máquina), acesse: http://127.0.0.3:8080

Com a aplicação aberta no navegador web, no menu de navegação, clique no link 'Café', e veja a página resultante.

## STEP 5.3 - Criando o arquivo Dockerfile

### STEP 5.3.1 - Criando novo arquivo

Dentro da pasta aplicação, crie um arquivo com o nome ```Dockerfile```.

### STEP 5.3.2 - Escolhendo imagem base

Para construirmos a imagem da nossa aplicação, iremos utilizar uma imagem como base. Para isso, acessaremos o [Docker Hub](https://hub.docker.com/), e pesquisaremos por uma imagem que possa servir como base

Como a nossa aplicação foi desenvolvida para Deno, uma opção é utilizarmos a [imagem oficial do Deno](https://hub.docker.com/r/denoland/deno).

O arquivo ```Dockerfile``` ficará da seguinte forma:

```
FROM denoland/deno:2.2.8
```

No momento do desenvolvimento deste lab, a última imagem do deno era ```2.2.8```. Caso deseja utilizar a última versão, substitua ```2.2.8``` por ```latest```.

### STEP 5.3.3 - Expondo portas

Para que o container Docker possa escutar por uma determinada porta, devemos expô-la. Para isso utilizaremos a instrução ```EXPOSE```.

A nossa aplicação utiliza a porta ```8080```.

O arquivo ```Dockerfile``` ficará da seguinte forma:

```
FROM denoland/deno:2.2.8
EXPOSE 8080
```
