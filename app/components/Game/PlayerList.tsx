import type { IPlayer } from "~/api/TestData";

interface IPlayerList {
  players: IPlayer[];
}

export default function PlayerList(props: IPlayerList) {
  const { players } = props;

  const renderPlayer = (player: IPlayer, index: number) => {
    const isFirst = index === 0;
    const isLast = index === players.length - 1;

    return (
      <span key={player.name}>
        {isFirst ? null : (
          <span className="text-gray-500">{isLast ? " and " : ", "}</span>
        )}
        <a
          key={player.name}
          href={`/user/${player.name}`}
          className="hover:text-orange-800"
        >
          {player.name}
        </a>
      </span>
    );
  };

  return <>{players.map((player, index) => renderPlayer(player, index))}</>;
}
