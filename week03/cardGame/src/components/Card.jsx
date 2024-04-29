import { CARD_LIST } from "./../constants/cardList";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import dummyImage from "../../public/img/sanrio.jpg";
import SuccessModal from "./SuccessModal";

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
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const flipBackCards = () => {
      const updatedCards = cards.map((card, index) => ({
        ...card,
        flipped: matchedIndexes.includes(index) ? true : false,
      }));
      setCards(updatedCards);
      setSelectedIndexes([]);
    };

    if (selectedIndexes.length === 2) {
      const firstIndex = selectedIndexes[0];
      const secondIndex = selectedIndexes[1];
      if (cards[firstIndex].imgSrc !== cards[secondIndex].imgSrc) {
        setTimeout(() => {
          flipBackCards();
        }, 1000); // 두 카드가 다를 경우 1초 뒤에 카드 뒤집기
      } else {
        setMatchedIndexes([...matchedIndexes, firstIndex, secondIndex]);
        setSelectedIndexes([]);
      }
    }
  }, [cards, selectedIndexes, matchedIndexes]);

  const handleCardClick = (index) => {
    if (
      selectedIndexes.length < 2 &&
      !selectedIndexes.includes(index) &&
      !matchedIndexes.includes(index)
    ) {
      const updatedCards = cards.map((card, i) =>
        i === index ? { ...card, flipped: true } : card
      );
      setCards(updatedCards);
      setSelectedIndexes([...selectedIndexes, index]);
    }
  };

  const resetGame = () => {
    const newCards = getRandomCards().map((card, index) => ({
      ...card,
      flipped: false,
    }));
    setCards(newCards);
    setSelectedIndexes([]);
    setMatchedIndexes([]);
    setShowModal(false);
  };

  useEffect(() => {
    if (matchedIndexes.length === cards.length) {
      //모든 카드를 맞춘 경우
      console.log("축하합니다!");
      setShowModal(true);
      /* 
      resetGame(); */
    }
  }, [matchedIndexes, cards.length]);

  return (
    <>
      {cards.map((card, index) => (
        <CardWrapper key={index} onClick={() => handleCardClick(index)}>
          <CardImg
            src={card.flipped ? card.imgSrc : dummyImage}
            alt={card.imgAlt}
            flipped={card.flipped}
          ></CardImg>
        </CardWrapper>
      ))}
      {showModal && <SuccessModal resetGame={resetGame} />}
    </>
  );
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
