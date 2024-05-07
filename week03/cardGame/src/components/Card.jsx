import { CARD_LIST } from "./../constants/cardList";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import dummyImage from "../../public/img/sanrio.jpg";
import SuccessModal from "./SuccessModal";
import Header from "./Header";
import SetLevels from "./SetLevels";
import { getRandomCards } from "./../utils/getRandomCards";

const Card = () => {
  const [cards, setCards] = useState([]);
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);
  const [clickedIndexes, setClickedIndexes] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  useEffect(() => {
    const newCards = getRandomCards(5);
    setCards(newCards);
  }, []);

  const handleCardClick = (index) => {
    if (
      selectedIndexes.length < 2 &&
      !selectedIndexes.includes(index) &&
      !matchedIndexes.includes(index) &&
      !flippedIndexes.includes(index)
    ) {
      const updatedCards = cards.map((card, i) =>
        i === index ? { ...card, flipped: true } : card
      );
      setCards(updatedCards);
      setSelectedIndexes([...selectedIndexes, index]);
      setClickedIndexes([...clickedIndexes, index]);
    }
  };

  useEffect(() => {
    if (selectedIndexes.length === 2) {
      const firstIndex = selectedIndexes[0];
      const secondIndex = selectedIndexes[1];
      if (cards[firstIndex].imgSrc !== cards[secondIndex].imgSrc) {
        setTimeout(() => {
          const flipBackCards = () => {
            const updatedCards = cards.map((card, index) => ({
              ...card,
              flipped:
                matchedIndexes.includes(index) || flippedIndexes.includes(index)
                  ? true
                  : false,
            }));
            setCards(updatedCards);
            setSelectedIndexes([]);
            setFlippedIndexes([...flippedIndexes, firstIndex, secondIndex]);
          };
          flipBackCards();
        }, 1000);
      } else {
        setMatchedIndexes([...matchedIndexes, firstIndex, secondIndex]);
        setSelectedIndexes([]);
        setScore(score + 1);
      }
    }
    setFlippedIndexes([]);
  }, [selectedIndexes]);

  useEffect(() => {
    if (matchedIndexes.length === cards.length && cards.length > 0) {
      setShowModal(true);
    }
  }, [matchedIndexes, cards.length]);

  const resetGame = (cardNum) => {
    setSelectedIndexes([]);
    setMatchedIndexes([]);
    setFlippedIndexes([]);
    setScore(0);
    setShowModal(false);
    const newCards = getRandomCards(cardNum);
    setCards(newCards);
  };

  return (
    <>
      <Header score={score} cardNum={cards.length} />
      <SetLevels
        onLeaveSelect={(cardNum) => {
          setScore(0);
          resetGame(cardNum);
        }}
      />
      {cards.map((card, index) => (
        <CardWrapper
          key={index}
          onClick={() => handleCardClick(index)}
          flipped={card.flipped || flippedIndexes.includes(index)}
        >
          <CardImg
            src={card.flipped ? card.imgSrc : dummyImage}
            alt={card.imgAlt}
            flipped={card.flipped}
          />
        </CardWrapper>
      ))}
      {showModal && (
        <SuccessModal resetGame={resetGame} cardNum={cards.length / 2} />
      )}
    </>
  );
};

export default Card;

const CardWrapper = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  margin: 0.5rem;
  border: solid pink 0.3rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
  ${({ flipped }) => flipped && "transform: rotateY(180deg);"}
`;

const CardImg = styled.img`
  width: 12rem;
  height: 12rem;
  transition: transform 0.3s ease;
  transform-style: preserve-3d;
  ${({ flipped }) => flipped && "transform: rotateY(180deg);"}
`;
