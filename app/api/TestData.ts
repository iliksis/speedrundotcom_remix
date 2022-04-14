export interface IDashboardGame {
  id: number;
  name: string;
  runs: IRun[];
}
export interface IRun {
  id: number;
  category: string;
  time: string;
  place: number;
  players: IPlayer[];
}
export interface IPlayer {
  name: string;
}

export function getLatestRunsTestData({ games = 5, runs = 5, players = 1 }) {
  const data = [];
  for (let i = 0; i < games; i++) {
    const game: IDashboardGame = {
      id: i,
      name: "Game Name " + i,
      runs: [],
    };
    for (let j = 0; j < runs; j++) {
      const run = {
        id: j,
        category: "Category Name " + j,
        time: `${j}m ${j}s`,
        place: j,
        players: [] as IPlayer[],
      };
      for (let k = 0; k < players; k++) {
        const player = {
          name: `Player ${k}`,
        };
        run.players.push(player);
      }
      game.runs.push(run);
    }
    data.push(game);
  }
  return data;
}

export interface IGame {
  id: number;
  name: string;
  categories: ICategory[];
}
export interface ICategory {
  id: number;
  name: string;
  runs: IRun[];
}
export function getGameTestData(
  index: number = 0,
  { categories = 2, runs = 2, players = 1 }
) {
  const data = {
    id: 0,
    name: "Game Name " + index,
    categories: [] as ICategory[],
  };
  for (let i = 0; i < categories; i++) {
    const category = {
      id: i,
      name: "Category Name " + i,
      runs: [] as IRun[],
    };
    for (let j = 0; j < runs; j++) {
      const run = {
        id: j,
        category: "Category Name " + j,
        time: `${j + i}m ${j + i}s`,
        place: j,
        players: [] as IPlayer[],
      };
      for (let k = 0; k < players; k++) {
        const player = {
          name: `Player ${k}`,
        };
        run.players.push(player);
      }
      category.runs.push(run);
    }
    data.categories.push(category);
  }
  return data;
}
