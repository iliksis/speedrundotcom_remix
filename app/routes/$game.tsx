import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import type { IGame } from "~/api/TestData";
import { getGameTestData } from "~/api/TestData";
import TitleCard from "~/components/Game/TitleCard";

export const loader: LoaderFunction = async ({ params }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        getGameTestData(parseInt(params.game ?? "0"), {
          players: 5,
          runs: 10,
          categories: 5,
        })
      );
    }, 300);
  });
};

export default function Game() {
  const game = useLoaderData<IGame>();

  const [selectedCategory, setSelectedCategory] = useState(
    game.categories[0].id
  );

  return (
    <div className="container mx-auto">
      <TitleCard title={game.name} id={game.id} />
      <table className="bg-gray-800">
        <thead>
          {game.categories.map((category) => (
            <th
              key={category.id}
              className="text-white p-3 hover:bg-gray-700 cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </th>
          ))}
        </thead>
        <tbody>
          {game.categories.map((category) =>
            selectedCategory === category.id
              ? category.runs.map((run) => (
                  <td key={run.id} className="flex">
                    <a href={`/${game.id}/${run.id}`}>
                      {run.players.map((player) => (
                        <span key={player.name}>{player.name}</span>
                      ))}
                      <span className="text-white ml-4">{run.time}</span>
                    </a>
                  </td>
                ))
              : null
          )}
        </tbody>
      </table>
    </div>
  );
}
