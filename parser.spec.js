const funcoes = require('./function');
const games = { game_0: { total_kills: 0, players: ['Isgalamido'], kills: {} } }
const jogos = []
const players = []
let game = []
game.total_kills = 0
game.players = []
game.kills = []

describe('função buscar', () => {
  it('retornar todos os valores', () => {
    expect(funcoes.buscarGames(games)).toBe(games);
  }),
    it('buscar game por ID', () => {
      expect(funcoes.buscarGames(games, `game_${0}`)).toBe(games[`game_${0}`]);
    })
  it('buscar game por ID invalido', () => {
    expect(funcoes.buscarGames(games, `game_${3}`)).toBe("game não encontrado");
  })
});

describe('função montarHash', () => {
  game.players.push("Isgalamido")
  jogos.push(game);
  it('montar hash', () => {
    expect(funcoes.montarHash(jogos)).toMatchObject(games);
  })
});

describe('função ranking', () => {
  players.push("Isgalamido")
  it('rankeamento', () => {
    expect(funcoes.ranking(jogos, players)).toMatchObject({ 'posição: 1': { nome: 'Isgalamido', kills: 0 } });
  })
});

