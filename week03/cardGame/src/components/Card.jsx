import { CARD_LIST } from "./../constants/cardList";
import styled from "@emotion/styled";

const Card = () => {
  return CARD_LIST.map((card, index) => (
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
