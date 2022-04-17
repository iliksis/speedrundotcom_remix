interface ITitleCard {
  title: string;
  id: number;
}
export default function TitleCard(props: ITitleCard) {
  return (
    <div className="p-6 mx-auto bg-gray-800 shadow-md flex space-x-4">
      <a href={`/${props.id}`} className="shrink-0 h-16">
        <img
          className="h-16 w-12"
          src="https://www.speedrun.com/gameasset/4d7y5zd7/cover?v=d2812e6"
          alt="game cover"
        />
      </a>
      <div className="grow">
        <a href={`/${props.id}`} className="text-xl font-medium text-white">
          {props.title}
        </a>
      </div>
    </div>
  );
}
