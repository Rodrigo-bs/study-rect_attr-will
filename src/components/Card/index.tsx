import React from "react";

interface Props {
  title: string;
  description: string;
  rate: number;
}

import styled from "./card.module.css";

const Card = ({ title, description, rate }: Props) => {
  return (
    <div className={styled.card}>
      <div className={styled.cardContent}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      { rate < 2 && ( <span className={styled.cardRateMessageBaixa}>Avaliação baixa</span>  )}
      { rate >= 2 && ( <span className={styled.cardRateMessageAlta}>Avaliação alta</span> )}
    </div>
  );
};

export default Card;
