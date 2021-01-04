import React from "react";
import Card from "./Card";
import ICard from "./ICard";

import notes from "./notes.svg";

interface TaskListProps {
  cards: ICard[];
}

const TaskList: React.FC<TaskListProps> = ({ cards }) => {
  if (cards.length === 0) {
    return (
      <div>
        <img src={notes} className="max-w-xs my-2" />
        <div className="text-xl font-semibold">Nothing planned today!</div>
      </div>
    );
  }

  return (
    <div>
      {cards.map((card) => (
        <Card card={card} />
      ))}
    </div>
  );
};

export default TaskList;
