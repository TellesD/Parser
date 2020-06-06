const functions = {

  buscarGames(games, x) {
    if (!x) {
      return games;
    }
    else {
      return games[x]
    }
  },

  montarHash(jogos) {
    let games = {}
    jogos.forEach((element, index) => {

      if (!element.total_kill) element.total_kill = 0


      games[`game_${index}`] = {} = {

        total_kills: element.total_kill,
        players: element.players,
        kills: { ...element.kills }
      }

    });

    return games;

  },

  
}

module.exports = functions 