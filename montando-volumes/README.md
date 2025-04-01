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

## STEP 2.4 - Modificando o banco de dados

Nesta etapa, iremos modificar o banco de dados. Para isso, em um navegador web (na mesma máquina), acesse: http://127.0.0.1:8080

### STEP 2.4.1 - Criando Tabela

No canto superior direito, serão mostradas as opções: ```new_table_name``` com os botões ```create``` e ```query```. Em ```new_table_name``` digite ```usuario```, e clique em ```create```.

<img src="../imagens/criacao-tabela-sqliteweb.png" alt="Captura de tela do canto superior direito do sqlite web, mostrando opção de criação de tabela.">

### STEP 2.4.2 - Criando Colunas

#### STEP 2.4.2.1 - Criando Coluna 'usuario'

No menu de navegação, serão mostradas as seguintes opções: ```Structure```, ```Content```, ```Query```, ```Insert```, ```Drop```, ```Import``` e ```Export```. Clique em ```Structure```.

Clique no botão ```Add column```, á direita de ```Columns```.

<img src="../imagens/criacao-coluna-sqliteweb.png" alt="Captura de tela do menu 'Structure' da tabela 'usuario' com o título 'Coluna' á direita com o botão 'Add column'."/>

No campo ```Column name```, digite ```usuario```. E em ```Column type```, selecione ```TEXT```. E clique ```Add column```.

#### STEP 2.4.2.1 - Criando Coluna 'senha'

Repita o passo anterior, para a coluna 'senha'.

E no final teremos uma tabela com a seguinte estrutura:
- ```id``` como ```INTEGER``` não nulo.
- ```usuario``` como ```TEXT```.
- ```senha``` como ```TEXT```.

<img src="../imagens/estrutura-tabela-usuario-sqliteweb.png" alt="Captura de tela do menu Captura de tela do menu 'Structure' da tabela 'usuario' com a estrutura criada."/>