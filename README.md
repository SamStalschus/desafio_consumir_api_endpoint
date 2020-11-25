Essa aplicação está sendo desenvolvida com o intuito de consumir a api viacep através de um endpoint que retornará um json para o front.

em node o server.js -> faz todo o back end:
- Implementa um endpoint para consulta do CEP
- Ao receber requisição do cliente, extrai o nome da rua do JSON
- Consulta api via CEP
- gerar JSON de resposta


em html/JS(Jquery) o index.html juntamente com o script.js fazem o front end:
- Pega dados do usuário
- Enviar requisição via REST (http POST)
- Pegar reposta e preencher com os dados


--------------Como utilizar----------

--> para os testes é necessário ter o node.js instalado

-->Para executar o arquivo de back-end "server.js" será necessário instalar os seguintes modulos : nodemon, express, axios e cors. => comando "node i nodemon express axios cors"

-->Apos executado o "server.js" o nosso endpoint esta no ar, e para fazer uma requisição post, basta acessar o endereço: "http://local:host/3008/Nome da rua" e ele retornara os dados de endereço no formato json

-->Para executar o front de teste deve ser executado o arquivo "index.html" que traz em seu body o "script.js", para testar o front recomendo instalar no terminal o "lite-server" que tem um tipo de leitura automática do código HTML atraves da criação de um servidor comando =>> "npx lite-server"

-->Ao executar o código, basta preencher a rua de Goiânia :).

--> ex: Rua Suely Fraissat
