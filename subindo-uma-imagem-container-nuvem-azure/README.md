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

<img src="../imagens/criar-container-registry-basic.png" alt="Captura de tela do console do Microsoft Azure, mostrando a aba 'Basics' do menu de criação de 'Container Registry'. Nela é mostrado os seguintes campos: 'Subscriptions': 'Azure for Students', 'Resource": '(New) Exemplo', 'Registry name': 'exemplo', 'Location': 'North Central US', 'Use availability zones': Desmarcado, 'Pricing Plan': 'Standard'.>

<img src="../imagens/criar-container-registry-review-create.png" alt="Captura de tela do console do Microsoft Azure, mostrando a aba 'Review + create' do menu de criação do 'Container Registry'. Nele é mostrada as seguintes informações: 'Registry name': 'exemplo', 'Subscription: 'Azure for Students', 'Resource Group': 'Exemplo', 'Location': 'North Central US', 'Availability zones': 'Disabled', 'Pricing plan': 'Standard', 'Public network access': 'Yes', 'Customer-Managed Key': 'Disabled, 'Identity': 'None', 'Key Vault': 'None', 'Encryption key': 'None', 'Version': 'None'.">