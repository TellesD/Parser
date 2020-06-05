const express = require('express');
const router = express.Router();

const readline = require('readline');
const fs = require('fs');



let jogos = [];
let game = [];
game.total_kills = 0;
game.players = [];
game.kills = [];

let games = {};





const rl = readline.createInterface({
  input: fs.createReadStream('./arquivos/games.log')
});



let x = 0;
let z = [];

rl.on('line', (line) => {


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



  if (line.indexOf("ClientUserinfoChanged:") != -1) {
    let data = line.split("n\\");
    data = data[1].split("\\");

    if (game.players.indexOf(" " + data[0] + " ") === -1) {

      game.players.push(" " + data[0] + " ");
    };

  };



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
  };


});



rl.on('close', () => {
  console.log('acabou!');
  console.log(jogos[1]);

  jogos.forEach((element, index) => {
    if (!element.total_kill) element.total_kill = 0
   
    games[`game_${index}`] = {} = {

      total_kills: element.total_kill,
      players: element.players,
      "kills": element.kills
    }

  });
  console.log(games)


});

router.get('/games', (req, res) => {
  
  return res.send(games);
})

router.get('/game/:id', (req, res) => {
  const id = req.params.id;
 
  return res.send(games[`game_${id}`]);
})


module.exports = router;