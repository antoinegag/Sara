import React from "react";
import Moment from "react-moment";
import ICard from "./ICard";
import styles from "./Card.module.css";

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <div className={styles.card}>
      <div className="text-2xl">{card.name}</div>
      {card.due && (
        <div>
          Due <Moment format="MMM Do">{card.due}</Moment>
        </div>
      )}
    </div>
  );
};

export default Card;
