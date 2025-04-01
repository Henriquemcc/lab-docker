# Passando Variáveis de Ambiente

Neste STEP você aprenderá o que são variáveis de ambiente, e como passá-las para um container Docker. Para isso, utilizaremos a imagem do Ubuntu e do MySQL.

## STEP 3.1 - Baixando a imagem do Ubuntu

Nesta etapa, iremos baixar a imagem do Ubuntu. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker pull ubuntu
```

## STEP 3.2 - Criando um container Docker com variável de ambiente

Agora, iremos criar um container com a variável de ambiente ```foo```, que terá valor igual a ```bar```. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker run --interactive --tty --env foo=bar ubuntu
```

Para testarmos o funcionamento dela, no bash do Ubuntu iremos executar o seguinte comando:

```
echo "$foo"
```

E veremos a seguínte saída:

```
bar
```

Para sair do terminal do container, digite: Control + D.

## STEP 3.3 - Baixando a imagem do MySQL

Nesta etapa, iremos baixar a imagem do MySQL. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker pull mysql
```

## STEP 3.4 - Exemplo real do uso de variáveis de ambiente

Nesta etapa, será mostrado um exemplo real do uso de variáveis de ambiente. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker run --interactive --tty --name mysql --env MYSQL_ROOT_PASSWORD=secret --env MYSQL_DATABASE=basededados --env MYSQL_USER=user --env MYSQL_PASSWORD=password --publish 3306:3306 mysql  
```

Para testarmos o funcionamento do MySQL, em outro terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker exec -it mysql bash
```

E depois, no shell do container, digite:

```
mysql -u user -p
```

E digite a senha ```password```.

Acessando o terminal do banco de dados, digite:

```
SHOW DATABASES;
```

E será listado os seguintes banco de dados: ```basededados```, ```information_schema``` e ```performance_schema```.