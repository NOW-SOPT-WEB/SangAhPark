import { CARD_LIST } from "./../constants/cardList";
import styled from "@emotion/styled";

const getRandomCards = () => {
  const shuffledCards = [...CARD_LIST].sort(() => Math.random() - 0.5);
  const selectedCards = shuffledCards.slice(0, 5); //단계에 따라 컴포넌트 개수 달라지도록
  const doubledCards = selectedCards.concat(selectedCards);
  return doubledCards.sort(() => Math.random() - 0.5);
};

const Card = () => {
  const randomCards = getRandomCards();
  return randomCards.map((card, index) => (
    <CardWrapper key={index}>
      <CardImg src={card.imgSrc} alt={card.imgAlt}></CardImg>
    </CardWrapper>
  ));
};

export default Card;

const CardWrapper = styled.div`
  width: 10rem;
  height: 10rem;

  margin: 0.5rem;

  border: solid pink 0.3rem;
  border-radius: 0.5rem;
`;

const CardImg = styled.img`
  width: 10rem;
  height: 10rem;
`;
