const express = require('express');
const app = express();

const bodyParser = require('body-parser');

//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const parserRoute = require('./parser');


app.use('/parser', parserRoute);

app.listen(3000, () => {
  console.log("Servidor on: http://localhost:3000/");
  console.log("Exibir partidas: http://localhost:3000/games");
  console.log("Procurar partida: http://localhost:3000/game/ID_da_partida");
  
})
  

module.exports = app;