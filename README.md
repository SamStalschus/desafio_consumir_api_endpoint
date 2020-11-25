Essa aplicação está sendo desenvolvida com o intuito de consumir a api viacep através de um endpoint que retornará um json para o front.

em node o server.js -> faz todo o back end:
- Implementar endpoint para consulta do CEP
- Ao receber requisição do cliente, extrair nome da rua do JSON
- Consultar api via CEP
- gerar JSON de resposta


em html o index.html juntamente com o script.js fazem o front end:
- Pega dados do usuário
- Gerar JSON
- Enviar requisição via REST (http POST)
- Pegar reposta e preencher com o CEP