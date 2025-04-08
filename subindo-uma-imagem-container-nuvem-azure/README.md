# Subindo uma imagem de container para a nuvem do Microsoft Azure

Neste STEP você subirá a aplicação containerizada para a nuvem do Microsoft Azure.

## STEP 6.1 - Criação de uma conta de estudante no Microsoft Azure

O Instituto de Ciências Exatas e Informática (ICEI) da PUC Minas possuí parceria com a Microsoft, dando um crédito de US$100 para cada aluno anualmente. Para criar sua conta de estudante, basta seguir o [tutorial no site do ICEI](https://icei.pucminas.br/index.php/azurepucminas).

## STEP 6.2 - Criando Container Registry no Microsoft Azure

### STEP 6.2.1 - Acessando o Container Registries

No [console do Microsoft Azure](https://portal.azure.com/), na barra de pesquisa, digite ```Container Registries```, e clique na opção 'Container Registries'. 

<img src="../imagens/pesquisar-container-registries-azure.png" alt="Captura de tela do console do Microsoft Azure, mostrando o resultado da pesquisa por 'Container Registries'. As opções que aparecem são: 'Container Registries', 'Container Apps', 'Container Instances' e 'App Registration'. A opção 'Container Registries' está contornada de uma moldura vermelha, indicando que esta deve ser selecionada.">

### STEP 6.2.2 - Criando um novo container Registry

No menu 'Container Registries', clique no botão 'Create'.

<img src="../imagens/criar-container-registry-azure.png" alt="Captura de tela do console do Microsoft Azure, mostrando o menu 'Container Registries', com o botão 'Create' (no canto superior esquerdo) contornado, indicando que ele deverá ser clicado.">

Na aba basics, nos campos (em 1, na imagem abaixo), deixe da seguinte forma:

| Opção                  | Valor                |
|------------------------|----------------------|
| Subscription           | 'Azure for Students' |
| Resource group         | '(New) Exemplo'      |
| Registry name          | 'exemplo'            |
| Location               | 'North Central US'   |
| Use availability zones | Desmarcado           |
| Pricing plan           | 'Standard'           |

O 'Registry name' ```exemplo``` deve ser substituído pelo nome do seu container registry, que deve ser único.

Depois, clique na aba 'Review + Create' (em 2, na imagem abaixo).

<img src="../imagens/criar-container-registry-basic.png" alt="Captura de tela do console do Microsoft Azure, mostrando a aba 'Basics' do menu de criação de 'Container Registry'. Nela é mostrado os seguintes campos: 'Subscriptions': 'Azure for Students', 'Resource': '(New) Exemplo', 'Registry name': 'exemplo', 'Location': 'North Central US', 'Use availability zones': Desmarcado, 'Pricing Plan': 'Standard'.">

E depois, clique em no botão 'Create', no canto inferior esquerdo.

<img src="../imagens/criar-container-registry-review-create.png" alt="Captura de tela do console do Microsoft Azure, mostrando a aba 'Review + create' do menu de criação do 'Container Registry'. Nele é mostrada as seguintes informações: 'Registry name': 'exemplo', 'Subscription: 'Azure for Students', 'Resource Group': 'Exemplo', 'Location': 'North Central US', 'Availability zones': 'Disabled', 'Pricing plan': 'Standard', 'Public network access': 'Yes', 'Customer-Managed Key': 'Disabled, 'Identity': 'None', 'Key Vault': 'None', 'Encryption key': 'None', 'Version': 'None'.">

<img src="../imagens/your-deployment-is-complete-azure.png" alt="Captura de tela do console do Microsoft Azure, mostrando a mensagem 'Your Deployment is Complete'. No canto inferior esquerdo existe o botão 'Go to Resource', que está contornado, indicando que deve ser clicado.">

<img src="../imagens/registry-criado-azure.png" alt="Captura de tela do console do Microsoft Azure, mostrando o 'Container Registry' criado.">

### STEP 6.2.3 - Instalando o Azure CLI

Instale o Azure CLI em sua máquina. Siga os passos do tutorial oficial da Microsoft: https://learn.microsoft.com/pt-br/cli/azure/install-azure-cli

### STEP 6.2.4 - Faça login no Azure CLI

Agora iremos realizar login no Azure CLI. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
az login
```

Uma janela no navegador web se abrirá, e será exibida a opção para entrar em sua conta da Azure.

### STEP 6.2.5 - Faça login no Azure Container Registry

Para realizarmos login no Azure Container Registry, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
az acr login --name exemplo
```

O 'Registry name' ```exemplo``` deve ser substituído pelo nome do seu container registry, que deve ser único.

### STEP 6.2.6 - Crie uma tag para a imagem

Para que o Docker possa vincular a imagem criada ao container, é necessário a criação de uma tag. Para isso, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker tag exemplo:latest exemplo.azurecr.io/exemplo_imagem
```

O 'Registry name' ```exemplo``` deve ser substituído pelo nome do seu container registry, que deve ser único.

### STEP 6.2.7 - Enviando a imagem ao container registry

Para enviarmos a imagem criada ao container registry, em um terminal (ou Prompt de Comando), digite o seguinte comando:

```
docker push exemplo.azurecr.io/exemplo_imagem:latest
```

O 'Registry name' ```exemplo``` deve ser substituído pelo nome do seu container registry, que deve ser único.

### STEP 6.2.8 - Criando novo Container

No [console do Microsoft Azure](https://portal.azure.com/), na barra de pesquisa, digite ```Container instances```, e clique na opção 'Container instances'.

<img src="../imagens/pesquisar-container-registries-azure.png" alt="Captura de tela do console do Microsoft Azure, mostrando o resultado da pesquisa por 'Container instances'. As opções que aparecem são: 'Container instances', 'BareMetal Instances', 'Container Apps' e 'Instance pools'. A opção 'Container instances' está contornada de uma moldura vermelha, indicando que esta deve ser selecionada.">

<img src="../imagens/criar-container-instance-azure.png">