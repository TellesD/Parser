const functions = {

  buscarGames(games, x) {
    if (!x) {
      return games;
    }
    else {
      if (!games[x]) return "game não encontrado"

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

    }

    );
    return games;

  },


  ranking(jogos, players) {
    let i = players.length;
    let game_ranking = {}
    let ranking = []
    let kill = 0

    for (let cont = 0; cont < i; cont++) {
      jogos.forEach((element) => {
        if (element.kills[players[cont]]) kill = kill + element.kills[players[cont]]

      }

      );
      ranking[cont] = {
        nome: players[cont],
        kills: kill
      }

      kill = 0
    }


    ranking.sort(function (a, b) {
      return a.kills < b.kills ? -1 : (a.kills > b.kills) ? 1 : 0;
    });;
    ranking = ranking.slice(0).reverse()
    ranking.forEach((element, index) => {
      game_ranking[`posição: ${index + 1}`] = {
        nome: element.nome,
        kills: element.kills
      }
    })

    console.log(game_ranking)
    return (game_ranking);

  },



}

module.exports = functions 