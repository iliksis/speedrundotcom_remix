import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { IGame } from "~/api/TestData";
import { getGameTestData } from "~/api/TestData";
import Categories from "~/components/Game/Categories";
import TitleCard from "~/components/Game/TitleCard";

interface IGameLoader {
  game?: IGame;
  selectedCategory: number;
  error?: string;
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const url = new URL(request.url);
  const url_c = url.searchParams.get("c");
  return new Promise((resolve) => {
    setTimeout(() => {
      let error = undefined;
      const game = getGameTestData(parseInt(params.game ?? "0"), {
        players: 3,
        runs: 5,
        categories: 5,
      });
      let selectedCategory = game.categories[0].id;
      if (url_c) {
        const parsed_c = parseInt(url_c);
        if (game.categories.find((category) => category.id === parsed_c)) {
          selectedCategory = parsed_c;
        } else {
          error = `Category ${parsed_c} not found`;
        }
      }

      resolve({
        game,
        selectedCategory,
        error: error,
      });
    }, 300);
  });
};

export default function Game() {
  const { game, selectedCategory, error } = useLoaderData<IGameLoader>();

  if (!game) {
    return <span className="text-red-500">The game could not be found!</span>;
  }

  if (error) {
    return <span className="text-red-500">{error}</span>;
  }

  return (
    <div className="container mx-auto">
      <TitleCard title={game.name} id={game.id} />
      <Categories
        categories={game.categories}
        gameId={game.id}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}
