# site-clima

## Resumo

Esse repositório contém os códigos da aplicação Site Clima, inspirado neste vídeo do [YouTube](https://www.youtube.com/watch?v=iILFBGm_I9M&ab_channel=AsmrProg), bem como as imagens usadas no site e também o arquivo de CI para deploy no Bucket AWS, onde a Infraestrutura está nesse [repositório](https://gitlab.com/desafio-contato-seguro/iac-site)

## Como funciona?

A aplicação Site Clima, construída com JavaScript, HTML e CSS, roda totalmente no Front-End, fazendo uma consulta a API [Open Weather](https://api.openweathermap.org) a partir da cidade consultada na caixa de pesquisa, trazendo uma resposta com a temperatura, velocidade do vento e umidade caso a consulta tenha sucesso ou uma página de not found, caso não tenha encontrado a cidade requisitada. Ao fazer um novo push para o repositório, a pipeline do GitLab CI é acionada, fazendo um Lint do código, testando se os arquivos são consultáveis em um webserver e depois fazendo o upload dos arquivos para o bucket da AWS.
Você consegue acessar a aplicação a partir desse [link](https://dtygev386dqs6.cloudfront.net/). Leia as restrições para saber mais!


## Restrições

A aplicação não estará disponível para você se estiver acessando ela de fora do Brasil ou usando uma VPN que mude a sua localização para outro lugar que não seja o Brasil. 

