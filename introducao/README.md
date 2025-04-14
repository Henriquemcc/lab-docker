# Introdução ao Docker

Neste STEP você entenderá quais são os problemas que o Docker resolve, e como ele é diferente de uma máquina virtual tradicional. Se tratando de um STEP introdutório, não haverá nenhuma atividade a ser realizada.

## STEP 0.1 - Entendendo o problema

No desenvolvimento de aplicações é comum enfrentarmos o desafio de que a aplicação rode em diferentes ambientes. Dessa forma, uma aplicação pode funcionar perfeitamente em um determinado ambiente, e em outro apresentar erros de execução. Isso acontece devido às diferenças entre os ambientes, como versões de bibliotecas, configurações do sistema, dependências instaladas, sistema operacional utilizado, dentre outros fatores. Esse cenário pode ser resumido na seguinte frase:

> "Na minha máquina funciona!"
 
Outra dificuldade encontrada é a dificuldade de manter e configurar ambientes para diferentes serviços, como banco de dados, servidores web, aplicações backend. Isso torna-se ainda mais complicado quando existe a necessidade de escalar as aplicações ou gerenciar múltiplas versões e dependências.