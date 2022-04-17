import type { IRun } from "~/api/TestData";
import PlayerList from "./PlayerList";

interface IRuns {
  runs?: IRun[];
  gameId: number;
}

export default function Runs(props: IRuns) {
  const { runs, gameId } = props;

  if (!runs || runs.length === 0) {
    return <span className="text-white">No runs submitted yet</span>;
  }

  return (
    <table className="w-full text-white">
      <thead>
        <tr>
          <th scope="col" className="p-2 w-2 text-center">
            Place
          </th>
          <th
            scope="col"
            className="p-2 w-auto text-left border-x border-gray-600"
          >
            Players
          </th>
          <th
            scope="col"
            className="p-2 w-1/6 text-center border-x border-gray-600"
          >
            Time
          </th>
          <th scope="col" className="p-2 w-1/6 text-center">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        {runs.map((run) => (
          <tr
            key={run.id}
            className="hover:bg-gray-700 hover:cursor-pointer border-t border-gray-600"
            onClick={() => {
              window.open(`${gameId}/run/${run.id}`, "_self");
            }}
            onAuxClick={() => {
              window.open(`${gameId}/run/${run.id}`);
            }}
          >
            <td className="text-center">{run.place}</td>
            <td className="p-2 border-x border-gray-600">
              <PlayerList players={run.players} />
            </td>
            <td className="p-2 text-center border-x border-gray-600">
              {run.time}
            </td>
            <td className="p-2 text-center">
              {new Date().toLocaleDateString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
