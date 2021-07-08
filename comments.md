Primeiramente, criei um arquivo Json e através dele criei um front bem basico com react, baixei as extensões express, body-parser, nodemon e mysql e iniciei com o npm start na porta 3000.
Depois , sincronizei o banco de dados com o servidor na porta 3001, criei o db de nome específico e testei a conexão inserindo os primeiros dados no banco através do INSERT INTO (basico), e posteriormente criei um alerta de "dados inseridos".
Dentro da pasta client, instalei o Axios e o cors...
Chamei as extensões instaladas no app.js e utilizando o app /post insert into e (req, res), inseri os dados no banco chamando-o no console.log, reportando se houver algum erro.
Utilizei o app.js para fazer os imports e as rotas necessárias
De volta no index do server, fiz o getall para poder pegar todos os dados da tabela do db e mostrar os dados já inseridos e reportando se houver algum erro.
Logo depois fiz o app get para pegar algum dado específico e o mesmo poder ser alterado através do PUT e deletado, através do DELETE, com seus respectivos códigos.
Criei os botões de integração entre as páginas

Obs. Tive que usar o banco de dados do MYSql pois o SQL Server não conectava de jeito algum no meu servidor. Para conseguir entregar o projeto, fiz pelo MySQL mesmo. 

Se eu tivesse mais tempo, trataria melhor os codigos e melhoraria o front...

Obrigado!

