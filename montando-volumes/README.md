# Montando Volumes

Neste STEP você aprenderá a montar volumes em containers Docker. Para isso, utilizaremos a imagem do banco de dados sqlite-web.

## STEP 2.1 - O que são volumes?

Quando um container Docker é deletado, todas as informações armazenadas dentro dele são perdidas. Para que os dados criados dentro desse container possam continuar existindo mesmo após a sua destruição, é necessário a criação e a montagem de volumes.

## STEP 2.2 - Baixando o sqlite-web

Nesta etapa, iremos baixar o sqlite-web. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker pull ghcr.io/coleifer/sqlite-web:latest
```

O ```ghcr.io``` é o registro de containers do GitHub.

Caso a imagem não tenha sido baixada, será mostrada uma saída parecida com esta:

```
latest: Pulling from coleifer/sqlite-web
48ecbb6b270e: Pull complete 
692f29ee68fa: Pull complete 
6439819450d1: Pull complete 
3c7be240f7bf: Pull complete 
ca4b349df8ed: Pull complete 
a7adb8af9dab: Pull complete 
a09b377e5b4d: Pull complete 
Digest: sha256:31e338c418777ade2afaaa1634e7fb96cf4ff310a1f77ee6fc9c59f22642dfaa
Status: Downloaded newer image for ghcr.io/coleifer/sqlite-web:latest
ghcr.io/coleifer/sqlite-web:latest
```

## STEP 2.3 - Criando e executando o sqlite-web (sem persistência)

Nesta próxima etapa, criaremos e executaremos o sqlite-web sem haver nenhuma persistência de dados. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker run --env SQLITE_DATABASE=db_filename.db --interactive --tty --publish 8080:8080 ghcr.io/coleifer/sqlite-web:latest
```