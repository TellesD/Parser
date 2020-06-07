const express = require('express');
const router = express.Router();
const funcoes = require('./function');
const readline = require('readline');
const fs = require('fs');



let jogos = [];
let game = [];
game.total_kills = 0;
game.players = [];
game.kills = [];

let games = {};

let ranking = [];
ranking.players = [];



//Read log
const rl = readline.createInterface({
  input: fs.createReadStream('./arquivos/games.log')
});



let x = 0;
let z = [];
let p = 0

//Agroup data 
rl.on('line', (line) => {

  //End game
  if (line.indexOf("ShutdownGame:") != -1) {
    let gamex = game;
    jogos[x] = gamex;

  

    x++;
    game = [];
    game.total_kill = 0;
    game.players = [];
    game.kills = [];
    y = 0;
    z = [];
  };


  //Join player
  if (line.indexOf("ClientUserinfoChanged:") != -1) {
    let data = line.split("n\\");
    data = data[1].split("\\");

    if (game.players.indexOf(data[0]) === -1) {

      game.players.push(data[0]);
      
    };

    if (ranking.players.indexOf(data[0]) === -1) {

      ranking.players.push(data[0]);
      
    };

  

  };


  //kill
  if (line.indexOf("Kill:") != -1) {
    let data = line.split("killed");
    game.total_kill++;

    if (data[0].indexOf("<world>") != -1) {
      for (let cont = 0; cont < game.players.length; cont++) {
        if (data[1].indexOf(game.players[cont]) != -1) {
          if (!z[cont]) z[cont] = 0;
          z[cont]--;
          game.kills[game.players[cont]] = z[cont];
        };
      };

    };
    for (let cont = 0; cont < game.players.length; cont++) {
      if (data[0].indexOf(game.players[cont]) != -1) {
        if (!z[cont]) z[cont] = 0;
        z[cont]++;
        game.kills[game.players[cont]] = z[cont];
      };

    };
    if (data[0].indexOf("<world>") != -1) {

    }
  };
});


//End parser
rl.on('close', () => {
  //Hash 
  games = funcoes.montarHash(jogos);


});

//HTTP requisitions
router.get('/games', (req, res) => {
  retorno = funcoes.buscarGames(games);

  return res.send(retorno);
})

router.get('/game/:id', (req, res) => {
  const id = req.params.id;
  retorno = funcoes.buscarGames(games, `game_${id}`);

  return res.send(retorno);
})

router.get('/ranking', (req, res) => {
  
  
 retorno = funcoes.ranking(jogos, ranking.players);

  return res.send(retorno);
})



module.exports = router;