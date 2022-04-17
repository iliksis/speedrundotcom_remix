import { useLoaderData } from "@remix-run/react";
import type { IDashboardGame } from "~/api/TestData";
import { getLatestRunsTestData } from "~/api/TestData";

export async function loader() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getLatestRunsTestData({}));
    }, 300);
  });
}

export default function Index() {
  const games = useLoaderData<IDashboardGame[]>();
  return (
    <div className="container mx-auto">
      {games.map((game) => (
        <div
          className="p-6 m-3 mx-auto shadow-md bg-gray-800 flex space-x-4"
          key={game.id}
        >
          <a href={`/${game.id}`} className="shrink-0 h-16">
            <img
              className="h-16 w-12"
              src="https://www.speedrun.com/gameasset/4d7y5zd7/cover?v=d2812e6"
              alt="game cover"
            />
          </a>
          <div className="grow">
            <a href={`/${game.id}`} className="text-xl font-medium text-white">
              {game.name}
            </a>
            <div className="text-orange-800 text-sm">
              {game.runs.map((run) => (
                <p key={run.id} className="hover:bg-gray-700">
                  <a href="https://google.com">
                    <span>{run.category}</span>
                    <span className="text-white ml-4">{run.time}</span>
                  </a>
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
