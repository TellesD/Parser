SOBRE: Programa para leitura de arquivo de log gerado pelo servidor de quake 3 arena e montagem de hash com informações, o algoritmo lê o log usando o modulo file system do node e depois analiza linha a linha utilizando o modulo ReadLine, as informações são organizadas por meio de função acionadas durante as requisições http no servidor.

DEPENDENCIAS: Express e bodyParser, testes realizados com jest

INSTRUÇÕES DE USO: executar od comandos "npm i Express" e "npm i body-parser", depois executar o servidor "node index.js" e fazer as requisições na porta 3000 "Exibir partidas: http://localhost:3000/parser/games", "Procurar partida: http://localhost:3000/parser/game/ID_da_partida", "Procurar partida: http://localhost:3000/parser/ranking"
