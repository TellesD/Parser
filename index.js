const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const parserRoute = require('./parser');


app.use('/parser', parserRoute);

app.listen(3000, () => {
  console.log("Exibir partidas: http://localhost:3000/parser/games");
  console.log("Procurar partida: http://localhost:3000/parser/game/ID_da_partida");
  console.log("Exibir ranking: http://localhost:3000/parser/ranking");
  
})
  

module.exports = app;