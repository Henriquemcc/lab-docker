# Passando Variáveis de Ambiente

Neste STEP você aprenderá o que são variáveis de ambiente, e como passá-las para um container Docker. Para isso, utilizaremos a imagem do Ubuntu.

## STEP 3.1 - Baixando a imagem do Ubuntu

Nesta etapa, iremos baixar a imagem do Ubuntu. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker pull ubuntu
```

## STEP 3.2 - Criando um container Docker com variável de ambiente

Agora, iremos criar um container com a variável de ambiente ```foo```, que terá valor igual a ```bar```. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker run -it --env foo=bar ubuntu
```

Para testarmos o funcionamento dela, no bash do Ubuntu iremos executar o seguinte comando:

```
echo "$foo"
```

E veremos a seguínte saída:

Para sair do terminal do container, digite: Control + D.