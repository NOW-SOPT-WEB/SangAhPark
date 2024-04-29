import { CARD_LIST } from "./../constants/cardList";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import dummyImage from "../../public/img/sanrio.jpg";

const getRandomCards = () => {
  const shuffledCards = [...CARD_LIST].sort(() => Math.random() - 0.5);
  const selectedCards = shuffledCards.slice(0, 5); //단계에 따라 컴포넌트 개수 달라지도록
  const doubledCards = selectedCards.concat(selectedCards);
  return doubledCards.sort(() => Math.random() - 0.5);
};

const Card = () => {
  const [cards, setCards] = useState(
    getRandomCards().map((card) => ({ ...card, flipped: false }))
  );
  const [selectedIndexes, setSelectedIndexes] = useState([]);

  useEffect(() => {
    const flipBackCards = () => {
      const updatedCards = cards.map((card, index) => ({
        ...card,
        flipped: false,
      }));
      setCards(updatedCards);
      setSelectedIndexes([]);
    };

    if (selectedIndexes.length === 2) {
      const firstIndex = selectedIndexes[0];
      const secondIndex = selectedIndexes[1];
      if (cards[firstIndex].imgSrc !== cards[secondIndex].imgSrc) {
        console.log("First card" + cards[firstIndex].imgSrc);
        console.log("Seconde card" + cards[secondIndex].imgSrc);
        console.log("different card");
        setTimeout(() => {
          flipBackCards();
        }, 1000);
      } else {
        console.log("First card" + cards[firstIndex].imgSrc);
        console.log("Seconde card" + cards[secondIndex].imgSrc);

        console.log("same card");
        setSelectedIndexes([]);
      }
    }
  }, [cards, selectedIndexes]);

  const handleCardClick = (index) => {
    if (selectedIndexes.length < 2 && !selectedIndexes.includes(index)) {
      const updatedCards = cards.map((card, i) =>
        i === index ? { ...card, flipped: true } : card
      );
      /*       const updatedCards = [...cards];
      updatedCards[index].flipped = !updatedCards[index].flipped;
 */ setCards(updatedCards);
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  return cards.map((card, index) => (
    <CardWrapper key={index} onClick={() => handleCardClick(index)}>
      <CardImg
        src={card.flipped ? card.imgSrc : dummyImage}
        alt={card.imgAlt}
        flipped={card.flipped}
      ></CardImg>
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
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
  cursor: pointer;
  ${({ flipped }) => flipped && "transform: rotateY(180deg);"}
`;
