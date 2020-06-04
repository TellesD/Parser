const readline = require('readline');
const fs = require('fs');

const games = [];
let game = [];
game.kill=0;
game.players = [];
game.kills=[];



const rl = readline.createInterface({
  input: fs.createReadStream('./arquivos/games.log')
});






let x = 0
let y = 0
let z = []


rl.on('line', (line) => {

  if (line.indexOf("ShutdownGame:") != -1) {
    
    let gamex = game
    games[x] = gamex;
    x++
    game = [];
    game.kill=0;
    game.players = [];
    game.kills=[];
    y= 0
    z = []
    


  }

  if (line.indexOf("ClientUserinfoChanged:") != -1) {
    let data = line.split("n\\")
    data = data[1].split("\\")
    if (game.players.indexOf(data[0])=== -1) game.players.push(data[0])




  }

  if (line.indexOf("Kill:") != -1) {
    let data = line.split("killed");
     game.kill++

   /*  if(data[0].indexOf("<world>") != -1){
        y= y+1
       game.kills["<world>"] = y

     }*/
     
     for(let cont=0; cont < game.players.length; cont++){
      
     if(data[0].indexOf(game.players[cont]) != -1){
      if(!z[cont]) z[cont] = 0
      z[cont] ++
     game.kills[game.players[cont]]= z[cont] 
    
    
   } 
   
  }
    




  }


});

rl.on('close', () => {
  console.log('acabou!');
  console.log(games)

});
