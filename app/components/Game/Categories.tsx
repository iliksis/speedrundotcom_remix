import React from "react";
import type { ICategory } from "~/api/TestData";
import { ArrowLeft } from "../generic/ArrowLeft";
import { ArrowRight } from "../generic/ArrowRight";
import Runs from "./Runs";

interface ICategories {
  gameId: number;
  categories: ICategory[];
  selectedCategory: number;
}

export default function Categories(props: ICategories) {
  const { gameId, categories, selectedCategory } = props;

  const current = React.useMemo(() => {
    return categories.find((category) => category.id === selectedCategory);
  }, [categories, selectedCategory]);

  const previousItems = React.useMemo(() => {
    const index = categories.findIndex(
      (category) => category.id === selectedCategory
    );
    return categories.slice(0, index);
  }, [categories, selectedCategory]);
  const previousDisabled = previousItems.length === 0;

  const nextItems = React.useMemo(() => {
    const index = categories.findIndex(
      (category) => category.id === selectedCategory
    );
    return categories.slice(index + 1);
  }, [categories, selectedCategory]);
  const nextDisabled = nextItems.length === 0;

  return (
    <div className="m-6 p-6 mx-auto bg-gray-800 shadow-md">
      <div className="pb-3 text-white grid grid-cols-3">
        <a
          href={`/${gameId}?c=${previousItems[previousItems.length - 1]?.id}`}
          className={`${
            previousDisabled && "pointer-events-none"
          } hover:bg-orange-800 justify-self-start has-tooltip`}
        >
          <div className="tooltip translate-x-6 w-40">
            {previousItems.map((item) => (
              <a
                key={item.id}
                className="p-2 block truncate hover:text-orange-800"
                href={`/${gameId}?c=${item.id}`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <ArrowLeft />
        </a>
        <span className="justify-self-center">{current?.name}</span>
        <a
          href={`/${gameId}?c=${nextItems[0]?.id}`}
          className={`${
            nextDisabled && "pointer-events-none"
          } hover:bg-orange-800 justify-self-end has-tooltip`}
        >
          <div className="tooltip -translate-x-40 w-40">
            {nextItems.map((item) => (
              <a
                key={item.id}
                className="p-2 block truncate hover:text-orange-800"
                href={`/${gameId}?c=${item.id}`}
              >
                {item.name}
              </a>
            ))}
          </div>
          <ArrowRight />
        </a>
      </div>
      <Runs runs={current?.runs} gameId={gameId} />
    </div>
  );
}
